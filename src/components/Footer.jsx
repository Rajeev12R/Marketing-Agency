import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Linkedin, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // WhatsApp Click to Chat
  const phoneNumber = "918852899110";
  const message = "Hello! I would like to get more information. Let's Connect.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  // Mailto Link
  const emailAddress = "rjranjan2112@gmail.com";
  const subject = "Inquiry from Website";
  const body = "Hello, I would like to get more information about. Let's Connect.";
  const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  return (
    <footer className="bg-[#070709] text-[#9a9ab0] border-t border-white/5 py-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#818cf8]/10 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo and social */}
          <div className="col-span-1 md:col-span-2 space-y-6">
            <Link to="/" className="text-2xl font-bold tracking-widest font-display text-white uppercase">
              WIDE TAKE<span className="text-[#818cf8]">.</span>
            </Link>
            <p className="text-[#9a9ab0] max-w-sm text-sm leading-relaxed font-light">
              Transforming brand complexity into powerful digital narrative sequences that maximize customer conversion.
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="p-2 rounded-lg bg-white/5 text-slate-400 hover:text-[#818cf8] hover:bg-white/10 transition-all"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/volt-studios/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 text-slate-400 hover:text-[#818cf8] hover:bg-white/10 transition-all"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 text-slate-400 hover:text-[#818cf8] hover:bg-white/10 transition-all"
              >
                <FaWhatsapp className="h-5 w-5" />
              </a>
              <a
                href={mailtoUrl}
                className="p-2 rounded-lg bg-white/5 text-slate-400 hover:text-[#818cf8] hover:bg-white/10 transition-all"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-6">Agency</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" className="hover:text-[#818cf8] transition-colors">
                  Overview
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#818cf8] transition-colors">
                  Meet the Team
                </Link>
              </li>
              <li>
                <Link to="/client-portfolio" className="hover:text-[#818cf8] transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#818cf8] transition-colors">
                  Get in Touch
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-6">Directory</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/blog" className="hover:text-[#818cf8] transition-colors">
                  Insights Blog
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#818cf8] transition-colors">
                  Services Index
                </Link>
              </li>
              <li>
                <Link to="/how-we-work" className="hover:text-[#818cf8] transition-colors">
                  Execution Model
                </Link>
              </li>
              <li>
                <Link to="/admin" className="hover:text-[#818cf8] transition-colors">
                  Lead Center
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <p className="text-slate-500">© {currentYear} WIDE TAKE. Engineered in 2026.</p>
          <div className="flex gap-4 text-slate-500">
            <Link to="/admin" className="hover:text-slate-300">Admin Login</Link>
            <span>•</span>
            <span>Security Hashed</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;