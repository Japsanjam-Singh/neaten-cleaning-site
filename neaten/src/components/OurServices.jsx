import { Brush, Building2, Sparkles, Factory, Home, SprayCan } from "lucide-react"

const OurServices = () => {
    return (
        <section className="w-full py-16 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                
                {/* Section Heading */}
                <div className="mb-12">
                    <h2 className="text-4xl font-bold text-[#004B49]">
                        Our Services
                    </h2>
                    <p className="mt-3 text-gray-600 max-w-3xl">
                        Neaten provides expert cleaning services for both commercial and residential spaces.
                        Whether it's deep cleaning, floor care, or post-construction cleanup, our team ensures
                        a pristine environment every time.
                    </p>
                </div>

                {/* Services List (More Natural Layout) */}
                <div className="flex flex-col lg:flex-row gap-12">
                    
                    {/* Left Side Services */}
                    <div className="space-y-8 w-full lg:w-1/2">
                        
                        {/* Service 1 */}
                        <div className="flex items-start space-x-5">
                            <Building2 className="h-10 w-10 text-[#004B49]" />
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800">Commercial Cleaning</h3>
                                <p className="text-gray-600">
                                    Professional janitorial & office cleaning to maintain a hygienic workspace.
                                </p>
                            </div>
                        </div>

                        {/* Service 2 */}
                        <div className="flex items-start space-x-5">
                            <Home className="h-10 w-10 text-[#004B49]" />
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800">Residential Cleaning</h3>
                                <p className="text-gray-600">
                                    Comprehensive home cleaning for a spotless and fresh living space.
                                </p>
                            </div>
                        </div>

                        {/* Service 3 */}
                        <div className="flex items-start space-x-5">
                            <Factory className="h-10 w-10 text-[#004B49]" />
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800">Post-Construction Cleaning</h3>
                                <p className="text-gray-600">
                                    Thorough cleanup after renovations or construction work.
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* Right Side Services */}
                    <div className="space-y-8 w-full lg:w-1/2">
                        
                        {/* Service 4 */}
                        <div className="flex items-start space-x-5">
                            <Sparkles className="h-10 w-10 text-[#004B49]" />
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800">Carpet & Floor Care</h3>
                                <p className="text-gray-600">
                                    Specialized cleaning for carpets, tiles, and hardwood floors.
                                </p>
                            </div>
                        </div>

                        {/* Service 5 */}
                        <div className="flex items-start space-x-5">
                            <Brush className="h-10 w-10 text-[#004B49]" />
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800">Move-In/Move-Out Cleaning</h3>
                                <p className="text-gray-600">
                                    Ensure a spotless space before moving in or after leaving.
                                </p>
                            </div>
                        </div>

                        {/* Service 6 */}
                        <div className="flex items-start space-x-5">
                            <SprayCan className="h-10 w-10 text-[#004B49]" />
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800">Disinfection & Sanitization</h3>
                                <p className="text-gray-600">
                                    Effective sanitization for a germ-free environment.
                                </p>
                            </div>
                        </div>

                    </div>

                </div>

                {/* CTA Button */}
                <div className="mt-12">
                    <a href="#" className="bg-[#004B49] text-white px-6 py-3 rounded-md hover:bg-[#02665E] transition">
                        View All Services
                    </a>
                </div>

            </div>
        </section>
    )
}

export default OurServices
