import { NavLink } from "react-router-dom";
import logo from "../assets/rudrawallart-logo.jpg"
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react"


export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  return (
    <>
      <nav className={`sticky top-0 z-50 bg-[#fdf6ec] shadow-md border-b border-[#e7d8b1] transition-all duration-300 $(scrolled ? " shadow-lg" : "shadow-none")`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          <img src={logo} alt="logo" className="h-10 object-contain rounded-full" />
          <div className="hidden md:flex space-x-8">
            <NavLink to='/' className={({ isActive }) => ` relative px-1 py-2 font-medium text-[#1c1c1c] hover:text-[#d97706] transition-colors duration-300 ${isActive ? "text-blue-300" : ""}`}>
              Home
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-400 transition-all duration-300" style={{ tr4ansformOrigin: "left" }}>

              </span>
            </NavLink>
            <NavLink to='/Service' className={({ isActive }) => ` relative px-1 py-2 font-medium text-[#1c1c1c] hover:text-[#d97706] transition-colors duration-300 ${isActive ? "text-blue-300" : ""}`}>
              Services
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-400 transition-all duration-300" style={{ tr4ansformOrigin: "left" }}>

              </span>
            </NavLink>
            <NavLink to='/mywork' className={({ isActive }) => ` relative px-1 py-2 font-medium text-[#1c1c1c] hover:text-[#d97706] transition-colors duration-300 ${isActive ? "text-blue-300" : ""}`}>
              MyWork
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-400 transition-all duration-300" style={{ tr4ansformOrigin: "left" }}>

              </span>
            </NavLink>
            <NavLink to='/contact' className={({ isActive }) => ` relative px-1 py-2 font-medium text-[#1c1c1c] hover:text-[#d97706] transition-colors duration-300 ${isActive ? "text-blue-300" : ""}`}>
              Contact
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-400 transition-all duration-300" style={{ tr4ansformOrigin: "left" }}>

              </span>
            </NavLink>


          </div>
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(true)} aria-label="Open Menu" className="text-[#1c1c1c">
              <Menu size={28} />
            </button>


          </div>

        </div>
        <div className={`fixed top-0 right-0 h-full w-[75%]  bg-[#fdf6ec] shadow-lg transition-transform duration-300 ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className="p-6 flex justify-end">
            <X size={28} onClick={() => setMenuOpen(false)} />
            <div className="flex flex-col gap-6 px-6">
              <NavLink to="/" onClick={() => setMenuOpen(false)} className={({ isActive }) => `${isActive ? "text-blue-300" : "text-gray-900"}`}>
                Home
              </NavLink>
              <NavLink to="/service" onClick={() => setMenuOpen(false)} className={({ isActive }) => `${isActive ? "text-blue-300" : "text-gray-900"}`}>
                Service
              </NavLink>

              <NavLink to="/mywork" onClick={() => setMenuOpen(false)} className={({ isActive }) => `${isActive ? "text-blue-300" : "text-gray-900"}`}>
                MyWork
              </NavLink>

              <NavLink to="/contact" onClick={() => setMenuOpen(false)} className={({ isActive }) => `${isActive ? "text-blue-300" : "text-gray-900"}`}>
                Contact
              </NavLink>


            </div>

          </div>
        </div>

      </nav>
    </>

  );
}