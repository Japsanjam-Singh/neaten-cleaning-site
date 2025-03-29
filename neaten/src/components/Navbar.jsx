import { useState } from "react"
import { Link } from "react-router-dom"
import { Menu, X } from "lucide-react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-[#F8F9FA] text-[#333333] fixed w-full top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center h-16">
        
      <Link to="/" className="flex items-center">
  <img
    src="/logo_navbar.png"
    alt="Neaten Logo"
    className="h-20 w-auto object-contain"
  />
</Link>


        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 font-medium items-center">
          <Link to="/" className="hover:text-[#004B49] transition py-2">Home</Link>
          <Link to="/services" className="hover:text-[#004B49] transition py-2">Services</Link>
          <Link to="/about" className="hover:text-[#004B49] transition py-2">About Us</Link>
          <Link to="/contact" className="hover:text-[#004B49] transition py-2">Contact</Link>
          <Link to="/quote" className="bg-[#004B49] text-white px-5 py-2 rounded-md hover:bg-[#02665E] transition">
            Get a Quote
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden focus:outline-none" onClick={() => setIsOpen(true)}>
          <Menu className="h-6 w-6 text-[#004B49]" />
        </button>
      </div>

      {/* Mobile Sidebar */}
      {isOpen && (
        <>
          {/* Overlay */}
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setIsOpen(false)}></div>
          
          {/* Sidebar Menu */}
          <div className="fixed top-0 right-0 h-full w-64 bg-white text-[#004B49] shadow-lg transform transition-transform duration-300 z-50">
            <div className="flex justify-between items-center p-4 border-b">
              <span className="text-xl font-semibold">Neaten</span>
              <button onClick={() => setIsOpen(false)}>
                <X className="h-6 w-6 text-[#004B49]" />
              </button>
            </div>

            <div className="flex flex-col p-4 space-y-4 font-medium">
              <Link to="/" className="hover:text-[#02665E] transition py-2" onClick={() => setIsOpen(false)}>Home</Link>
              <Link to="/services" className="hover:text-[#02665E] transition py-2" onClick={() => setIsOpen(false)}>Services</Link>
              <Link to="/about" className="hover:text-[#02665E] transition py-2" onClick={() => setIsOpen(false)}>About Us</Link>
              <Link to="/contact" className="hover:text-[#02665E] transition py-2" onClick={() => setIsOpen(false)}>Contact</Link>
              <Link to="/quote" className="bg-[#004B49] text-white px-5 py-2 rounded-md text-center hover:bg-[#02665E] transition" onClick={() => setIsOpen(false)}>
                Get a Quote
              </Link>
            </div>
          </div>
        </>
      )}
    </nav>
  )
}

export default Navbar
