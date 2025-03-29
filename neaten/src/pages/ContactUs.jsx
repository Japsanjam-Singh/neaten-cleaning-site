import { Link } from 'react-router-dom';

function ContactUs() {
    return (
        <div className="bg-[#F8F9FA] min-h-screen pt-32 pb-20 px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    {/* Left Side - Textual Info */}
                    <div className="space-y-6">
                        <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight text-gray-900">
                            Talk Clean <br />
                            <span className="text-[#00A896]">With Neaten</span>
                        </h2>

                        <p className="text-gray-700 leading-relaxed">
                            At <strong>Neaten</strong>, cleaning is more than a checklist — it’s a commitment to trust, quality, and care.
                            We began our journey in British Columbia in 2021 and quickly expanded, but today we proudly operate and focus solely in <strong>Alberta</strong>,
                            serving both residential and commercial clients with tailored, high-standard cleaning solutions.
                        </p>

                        <p className="text-gray-700 leading-relaxed">
                            We work with homeowners, builders, property managers, and businesses who value a spotless finish and reliable service.
                            If you have questions about our services or want to discuss your specific needs, we’re here and happy to help.
                        </p>

                        <div className="space-y-2 mt-6">
                            <h3 className="text-xl font-semibold text-[#00A896]">Contact Details</h3>
                            <p className="text-gray-700"><strong>Email:</strong> neaten.inc@gmail.com</p>
                            <p className="text-gray-700"><strong>Phone:</strong> (236) 550-0090</p>
                            <p className="text-gray-700">
                                <strong>Office:</strong> 669 Savanna Blvd NE, Unit 408, Calgary, AB, Canada T3J 4B6
                            </p>
                        </div>

                        <div className="mt-8">
                            <p className="text-gray-800 text-base">
                                Ready to get started? Click below to request a free, no-obligation quote tailored to your space and needs.
                            </p>
                            <Link to="/quote">
                                <button className="mt-4 w-full sm:w-auto px-6 py-3 bg-[#00A896] text-white font-medium rounded-md hover:bg-[#00796B] transition">
                                    Request a Free Quote
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Right Side - Image */}
                    <div className="w-full">
                        <img
                            src="/pressure-washing.jpg"
                            alt="Neaten team at work"
                            className="w-full h-auto rounded-lg shadow-lg object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
