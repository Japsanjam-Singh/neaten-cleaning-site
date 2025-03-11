import { ShieldCheck, Leaf, Clock, Star } from "lucide-react"

const WhyChooseUs = () => {
    return (
        <section className="w-full py-16 bg-[#F8F9FA]">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                
                {/* Left Side: Text & Features */}
                <div>
                    <h2 className="text-4xl font-bold text-[#004B49]">
                        Why Choose Neaten?
                    </h2>
                    <p className="mt-4 text-gray-600">
                        At Neaten, we are committed to providing high-quality, reliable, and eco-friendly 
                        cleaning services. Here's why our clients trust us:
                    </p>

                    {/* Feature List */}
                    <div className="mt-6 space-y-6">
                        {/* Feature 1 */}
                        <div className="flex items-center space-x-4">
                            <Leaf className="h-8 w-8 text-[#004B49]" />
                            <p className="text-gray-700 font-medium">
                                <span className="font-semibold">Eco-Friendly & Safe</span> – We use non-toxic, eco-friendly cleaning solutions.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="flex items-center space-x-4">
                            <ShieldCheck className="h-8 w-8 text-[#004B49]" />
                            <p className="text-gray-700 font-medium">
                                <span className="font-semibold">Certified & Trusted Team</span> – Trained professionals with years of experience.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="flex items-center space-x-4">
                            <Clock className="h-8 w-8 text-[#004B49]" />
                            <p className="text-gray-700 font-medium">
                                <span className="font-semibold">Flexible Scheduling</span> – We work around your schedule, offering 24/7 service.
                            </p>
                        </div>

                        {/* Feature 4 */}
                        <div className="flex items-center space-x-4">
                            <Star className="h-8 w-8 text-[#004B49]" />
                            <p className="text-gray-700 font-medium">
                                <span className="font-semibold">100% Satisfaction Guarantee</span> – We ensure top-quality service every time.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Side: Image */}
                <div>
                    <img 
                        src="/cleaning-team.jpg" 
                        alt="Professional Cleaning Team" 
                        className="w-full h-auto rounded-lg shadow-md"
                    />
                </div>

            </div>
        </section>
    )
}

export default WhyChooseUs
