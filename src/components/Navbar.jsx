import React, { useState, useEffect } from "react"
import { Menu, X, ChevronDown, Lock } from "lucide-react"
import { Link, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  const navItems = [
    { name: "Home", link: "/" },
    {
      name: "About Agency",
      link: "/about",
      submenu: [
        { name: "Our Profile", link: "/about" },
        { name: "Client Work", link: "/client-portfolio" },
        { name: "Execution Model", link: "/how-we-work" },
      ],
    },
    { name: "Capabilities", link: "/services" },
    { name: "Insights", link: "/blog" },
  ]

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-[#070709]/90 backdrop-blur-md border-b border-white/5 py-4" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-1.5">
              <span className="font-display text-white text-xl sm:text-2xl font-bold tracking-widest uppercase">
                WIDE TAKE<span className="text-[#818cf8]">.</span>
              </span>
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.link}
                  className={`text-xs font-medium uppercase tracking-widest transition-colors flex items-center gap-1 ${
                    location.pathname === item.link ? "text-[#818cf8]" : "text-[#9a9ab0] hover:text-white"
                  }`}
                >
                  {item.name}
                  {item.submenu && <ChevronDown className="h-3 w-3 transition-transform group-hover:rotate-180" />}
                </Link>
                {item.submenu && (
                  <div className="absolute left-0 mt-3 w-48 rounded-xl bg-[#0f0f13] border border-white/5 p-2 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="py-1 space-y-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.link}
                          className={`block px-4 py-2 text-[10px] font-bold uppercase tracking-widest rounded-lg transition-all ${
                            location.pathname === subItem.link 
                              ? "bg-white/5 text-[#818cf8]" 
                              : "text-[#9a9ab0] hover:text-white hover:bg-white/5"
                          }`}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            <div className="h-3.5 w-px bg-white/10" />

            <Link
              to="/admin"
              className="p-1.5 text-[#9a9ab0] hover:text-[#818cf8] rounded-full transition-all"
              title="Admin Lead Center"
            >
              <Lock className="h-4 w-4" />
            </Link>

            <Link
              to="/contact"
              className="btn-indigo px-6 py-2.5 rounded-lg text-[10px]"
            >
              Get in Touch
            </Link>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <Link
              to="/admin"
              className="p-1.5 text-[#9a9ab0] hover:text-[#818cf8] rounded-full transition-all"
            >
              <Lock className="h-4 w-4" />
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#9a9ab0] hover:text-white p-2 focus:outline-none"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#070709] border-b border-white/5 mt-4"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navItems.map((item) => (
                <React.Fragment key={item.name}>
                  <Link
                    to={item.link}
                    className={`block px-3 py-2 text-xs font-bold uppercase tracking-widest rounded-lg ${
                      location.pathname === item.link ? "bg-white/5 text-[#818cf8]" : "text-slate-300 hover:bg-white/5"
                    }`}
                  >
                    {item.name}
                  </Link>
                  {item.submenu &&
                    item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.link}
                        className={`block px-6 py-1.5 text-[10px] font-bold uppercase tracking-widest text-[#9a9ab0] hover:text-white ${
                          location.pathname === subItem.link ? "text-[#818cf8]" : ""
                        }`}
                      >
                        • {subItem.name}
                      </Link>
                    ))}
                </React.Fragment>
              ))}
              <div className="pt-4 border-t border-white/5">
                <Link
                  to="/contact"
                  className="block w-full text-center btn-indigo text-[10px] py-3 rounded-lg"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
