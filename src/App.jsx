import React from "react"
import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Services from "./components/Services"
import CallToAction from "./components/CallToAction"
import Footer from "./components/Footer"
import ServicesPage from "./pages/Services"
import PortfolioPage from "./pages/Portfolio"
import AboutPage from "./pages/About"
import BlogPage from "./pages/Blog"
import BlogPostPage from "./pages/BlogPostPage";
import ContactPage from "./pages/Contact"
import HowWeWorkPage from "./pages/HowWeWork"
import AdminPage from "./pages/Admin"

const App = () => {
  return (
    <div className="overflow-hidden bg-[#030303] min-h-screen text-slate-100 selection:bg-indigo-600/30 selection:text-indigo-200">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Services />
              <CallToAction />
            </>
          }
        />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/client-portfolio" element={<PortfolioPage />} />
        <Route path="/how-we-work" element={<HowWeWorkPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogPostPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
