// index.js
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const app = express();
const JWT_SECRET = process.env.JWT_SECRET || 'wide_take_agency_secret_2026';
const LEADS_FILE = path.join(__dirname, 'leads.json');

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Helper functions for Leads persistence
const getLeads = () => {
  try {
    if (!fs.existsSync(LEADS_FILE)) {
      // Seed initial data if file doesn't exist
      const initialLeads = [
        {
          id: 'lead-1',
          firstName: 'Aarav',
          lastName: 'Sharma',
          email: 'aarav@sparsh.edu.in',
          company: 'Sparsh World School',
          website: 'sparshworldschool.com',
          message: 'Looking to rebuild our school website, enhance branding guidelines, and setup regular social media posts.',
          newsletter: true,
          status: 'New',
          date: '2026-06-10T14:30:00.000Z'
        },
        {
          id: 'lead-2',
          firstName: 'David',
          lastName: 'Miller',
          email: 'david@sunnyside.com',
          company: 'Sunny Side Up',
          website: 'sunnysideup.cafe',
          message: 'Need 10 high-quality promotional reels/videos edited for our new summer breakfast menu launch.',
          newsletter: false,
          status: 'In Progress',
          date: '2026-06-12T09:15:00.000Z'
        },
        {
          id: 'lead-3',
          firstName: 'Sophia',
          lastName: 'Chen',
          email: 'sophia@gupshup.co',
          company: 'GupShup @ chhat',
          website: 'gupshupchhat.in',
          message: 'Looking for content creation and social media management for our rooftop lounge in Jaipur.',
          newsletter: true,
          status: 'Contacted',
          date: '2026-06-14T18:45:00.000Z'
        },
        {
          id: 'lead-4',
          firstName: 'Marcus',
          lastName: 'Vance',
          email: 'marcus@retromini.io',
          company: 'Retro Mini Cafe',
          website: 'retromini.io',
          message: 'Interested in web development services for a simple landing page and branding guidelines.',
          newsletter: false,
          status: 'Closed',
          date: '2026-06-15T11:00:00.000Z'
        }
      ];
      fs.writeFileSync(LEADS_FILE, JSON.stringify(initialLeads, null, 2));
      return initialLeads;
    }
    const data = fs.readFileSync(LEADS_FILE, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading leads file:', error);
    return [];
  }
};

const saveLeads = (leads) => {
  try {
    fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2));
  } catch (error) {
    console.error('Error writing leads file:', error);
  }
};

// Admin credentials (hashed password for 'admin123')
const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD_HASH = bcrypt.hashSync('admin123', 10);

// Request Validation Middleware
const validateLeadInput = (req, res, next) => {
  const { firstName, lastName, email, company, message } = req.body;

  if (!firstName || !lastName || !email || !message) {
    return res.status(400).json({ 
      error: 'Validation Error', 
      message: 'First name, last name, email, and message are required fields.' 
    });
  }

  // Basic email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ 
      error: 'Validation Error', 
      message: 'Please provide a valid email address.' 
    });
  }

  // Sanitize fields (basic trim and HTML escape template)
  req.body.firstName = firstName.trim();
  req.body.lastName = lastName.trim();
  req.body.email = email.trim().toLowerCase();
  req.body.company = company ? company.trim() : '';
  req.body.message = message.trim();

  next();
};

// JWT Authentication Middleware
const verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader) {
    return res.status(401).json({ error: 'Unauthorized', message: 'No access token provided.' });
  }

  const token = authHeader.split(' ')[1];
  if (!token) {
    return res.status(401).json({ error: 'Unauthorized', message: 'Malformed authorization header.' });
  }

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ error: 'Forbidden', message: 'Invalid or expired access token.' });
    }
    req.user = decoded;
    next();
  });
};

// Nodemailer Transporter
const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: "neil.torphy21@ethereal.email",
    pass: "785bydBpa5fNU1gQBp",
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.error("Nodemailer error:", error);
  } else {
    console.log("Server is ready to take messages");
  }
});

// PUBLIC ENDPOINTS

// 1. Admin Login API
app.post('/api/auth/login', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required.' });
  }

  if (username === ADMIN_USERNAME && bcrypt.compareSync(password, ADMIN_PASSWORD_HASH)) {
    const token = jwt.sign(
      { username: ADMIN_USERNAME, role: 'admin' }, 
      JWT_SECRET, 
      { expiresIn: '1h' }
    );
    return res.status(200).json({ 
      message: 'Login successful!', 
      token,
      expiresIn: 3600
    });
  }

  return res.status(401).json({ message: 'Invalid administrative credentials.' });
});

// 2. Submit Lead / Contact Form
app.post('/send', validateLeadInput, (req, res) => {
  const { firstName, lastName, email, company, website, message, newsletter } = req.body;

  // Save lead in JSON file
  const leads = getLeads();
  const newLead = {
    id: 'lead-' + Date.now(),
    firstName,
    lastName,
    email,
    company,
    website,
    message,
    newsletter: !!newsletter,
    status: 'New',
    date: new Date().toISOString()
  };
  leads.push(newLead);
  saveLeads(leads);

  // Attempt to send email via nodemailer
  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER || "rjranjan2112@gmail.com",
    subject: `New Lead from ${firstName} ${lastName} (${company || 'No Company'})`,
    text: `
      Name: ${firstName} ${lastName}
      Email: ${email}
      Company: ${company}
      Website: ${website}
      Message: ${message}
      Subscribe to newsletter: ${newsletter ? 'Yes' : 'No'}
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.warn("Mail sending failed, but lead was saved:", error.message);
      // We still return 200 since the lead was saved in our database.
      return res.status(200).json({ 
        message: 'Lead submitted successfully! (Backup: Saved in Lead Center)',
        lead: newLead
      });
    }
    console.log('Email sent: ' + info.response);
    res.status(200).json({ 
      message: 'Lead submitted and email sent successfully!',
      lead: newLead
    });
  });
});

// PROTECTED ADMINISTRATIVE ENDPOINTS

// 3. Get all leads
app.get('/api/leads', verifyToken, (req, res) => {
  const leads = getLeads();
  res.status(200).json(leads);
});

// 4. Update lead status
app.put('/api/leads/:id/status', verifyToken, (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const validStatuses = ['New', 'In Progress', 'Contacted', 'Closed'];
  if (!status || !validStatuses.includes(status)) {
    return res.status(400).json({ message: `Invalid status. Must be one of: ${validStatuses.join(', ')}` });
  }

  const leads = getLeads();
  const leadIndex = leads.findIndex(l => l.id === id);

  if (leadIndex === -1) {
    return res.status(404).json({ message: 'Lead not found.' });
  }

  leads[leadIndex].status = status;
  saveLeads(leads);

  res.status(200).json({ message: 'Lead status updated successfully.', lead: leads[leadIndex] });
});

// 5. Delete a lead submission
app.delete('/api/leads/:id', verifyToken, (req, res) => {
  const { id } = req.params;
  const leads = getLeads();
  const filteredLeads = leads.filter(l => l.id !== id);

  if (leads.length === filteredLeads.length) {
    return res.status(404).json({ message: 'Lead not found.' });
  }

  saveLeads(filteredLeads);
  res.status(200).json({ message: 'Lead deleted successfully from Lead Center.' });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
