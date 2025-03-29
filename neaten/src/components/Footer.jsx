import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-[#F8F9FA] text-[#333333] py-8 border-t border-gray-300">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                
                {/* Left: Company Info */}
                <div>
                    <h2 className="text-2xl font-semibold text-[#004B49]">Neaten</h2>
                    <p className="mt-2 text-sm text-gray-600">
                        Providing top-notch cleaning services exclusively across Alberta. Professional, reliable, and eco-friendly solutions for your space.
                    </p>
                </div>

                {/* Center: Quick Links */}
                <div className="flex flex-col space-y-2">
                    <h3 className="text-lg font-semibold text-[#004B49]">Quick Links</h3>
                    <Link to="/" className="text-gray-600 hover:text-[#004B49] transition">Home</Link>
                    <Link to="/services" className="text-gray-600 hover:text-[#004B49] transition">Services</Link>
                    <Link to="/about" className="text-gray-600 hover:text-[#004B49] transition">About Us</Link>
                    <Link to="/contact" className="text-gray-600 hover:text-[#004B49] transition">Contact</Link>
                </div>

                {/* Right: Contact Info */}
                <div className="flex flex-col space-y-2">
                    <h3 className="text-lg font-semibold text-[#004B49]">Contact Us</h3>
                    <p className="text-gray-600">📍 Calgary, Alberta</p>
                    <p className="text-gray-600">
                        📧 <a href="mailto:neaten.inc@gmail.com" className="hover:text-[#004B49] transition">neaten.inc@gmail.com</a>
                    </p>
                    <p className="text-gray-600">📞 +1 (236) 550-0090</p>
                </div>

            </div>

            {/* Bottom Section */}
            <div className="mt-6 border-t border-gray-300 pt-4 text-center text-gray-500 text-sm">
                <p>© 2025 Neaten. All rights reserved.</p>
               
            </div>
        </footer>
    );
};

export default Footer;
