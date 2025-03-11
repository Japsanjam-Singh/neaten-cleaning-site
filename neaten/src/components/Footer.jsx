const Footer = () => {
    return (
      <footer className="bg-[#F8F9FA] text-[#333333] py-8 border-t border-gray-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Left: Company Info */}
          <div>
            <h2 className="text-2xl font-semibold text-[#004B49]">Neaten</h2>
            <p className="mt-2 text-sm text-gray-600">
              Providing top-notch cleaning services across Alberta & British Columbia. 
              Professional, reliable, and eco-friendly solutions for your space.
            </p>
          </div>
  
          {/* Center: Quick Links */}
          <div className="flex flex-col space-y-2">
            <h3 className="text-lg font-semibold text-[#004B49]">Quick Links</h3>
            <a href="#" className="text-gray-600 hover:text-[#004B49] transition">Home</a>
            <a href="#" className="text-gray-600 hover:text-[#004B49] transition">Services</a>
            <a href="#" className="text-gray-600 hover:text-[#004B49] transition">About Us</a>
            <a href="#" className="text-gray-600 hover:text-[#004B49] transition">Contact</a>
          </div>
  
          {/* Right: Contact & Socials */}
          <div className="flex flex-col space-y-2">
            <h3 className="text-lg font-semibold text-[#004B49]">Contact Us</h3>
            <p className="text-gray-600">📍 Calgary, Alberta</p>
            <p className="text-gray-600">📧 info@neaten.com</p>
            <p className="text-gray-600">📞 +1 (123) 456-7890</p>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="text-gray-600 hover:text-[#004B49] transition">🌐 Facebook</a>
              <a href="#" className="text-gray-600 hover:text-[#004B49] transition">🐦 Twitter</a>
              <a href="#" className="text-gray-600 hover:text-[#004B49] transition">📸 Instagram</a>
            </div>
          </div>
  
        </div>
  
        {/* Bottom Section */}
        <div className="mt-6 border-t border-gray-300 pt-4 text-center text-gray-500 text-sm">
          <p>© 2025 Neaten. All rights reserved.</p>
          <div className="mt-2">
            <a href="#" className="hover:text-[#004B49] transition">Privacy Policy</a> | 
            <a href="#" className="hover:text-[#004B49] transition"> Terms & Conditions</a>
          </div>
        </div>
      </footer>
    )
  }
  
  export default Footer
  