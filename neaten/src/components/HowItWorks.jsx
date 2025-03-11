import { ClipboardCheck, UserCheck, Sparkles, ShieldCheck } from "lucide-react"

const HowItWorks = () => {
    return (
        <section className="w-full py-16 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                
                {/* Section Heading with More Engaging Tagline */}
                <div className="mb-12">
                    <h2 className="text-4xl font-bold text-[#004B49]">
                        Your Cleaning Journey, Simplified
                    </h2>
                    <p className="mt-3 text-gray-600 max-w-3xl">
                        Our process is designed to make getting a spotless space fast, easy, and stress-free.  
                        Here’s how Neaten gets your home or office perfectly clean.
                    </p>
                </div>

                {/* Steps Grid with Alternating Image-Text Blocks */}
                <div className="space-y-12">
                    
                    {/* Step 1 - Request a Quote */}
                    <div className="flex flex-col lg:flex-row items-center gap-10">
                        <img src="/step1.jpg" alt="Request a Quote" className="w-full lg:w-1/2 h-64 object-cover rounded-lg shadow-lg" />
                        <div className="w-full lg:w-1/2">
                            <ClipboardCheck className="h-12 w-12 text-[#004B49] mb-3" />
                            <h3 className="text-2xl font-semibold text-gray-800">Request a Quote</h3>
                            <p className="text-gray-600">
                                Simply fill out our form or give  us a quick call to get a custom cleaning quote.
                            </p>
                        </div>
                    </div>

                    {/* Step 2 - Get Matched */}
                    <div className="flex flex-col lg:flex-row-reverse items-center gap-10">
                        <img src="/step2.jpg" alt="Get Matched" className="w-full lg:w-1/2 h-64 object-cover rounded-lg shadow-lg" />
                        <div className="w-full lg:w-1/2">
                            <UserCheck className="h-12 w-12 text-[#004B49] mb-3" />
                            <h3 className="text-2xl font-semibold text-gray-800">Get Matched</h3>
                            <p className="text-gray-600">
                                Our system connects you with a certified Neaten cleaning expert for your specific needs.
                            </p>
                        </div>
                    </div>

                    {/* Step 3 - Cleaning Service */}
                    <div className="flex flex-col lg:flex-row items-center gap-10">
                        <img src="/step3.jpg" alt="Cleaning Service" className="w-full lg:w-1/2 h-64 object-cover rounded-lg shadow-lg" />
                        <div className="w-full lg:w-1/2">
                            <Sparkles className="h-12 w-12 text-[#004B49] mb-3" />
                            <h3 className="text-2xl font-semibold text-gray-800">We Clean, You Relax</h3>
                            <p className="text-gray-600">
                                Our professional cleaners arrive on time and handle everything with top-quality service.
                            </p>
                        </div>
                    </div>

                    {/* Step 4 - Spotless Space */}
                    <div className="flex flex-col lg:flex-row-reverse items-center gap-10">
                        <img src="/step4.jpg" alt="Enjoy a Spotless Space" className="w-full lg:w-1/2 h-64 object-cover rounded-lg shadow-lg" />
                        <div className="w-full lg:w-1/2">
                            <ShieldCheck className="h-12 w-12 text-[#004B49] mb-3" />
                            <h3 className="text-2xl font-semibold text-gray-800">Enjoy Your Spotless Space</h3>
                            <p className="text-gray-600">
                                Relax knowing your home or office is clean, sanitized, and fresh—guaranteed.
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default HowItWorks
