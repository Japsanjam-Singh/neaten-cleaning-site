const HeroSection = () => {
    return (
        <section className="relative w-full h-[95vh] flex items-center overflow-hidden">
          
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src="/cleaning.jpg" 
              alt="Professional Cleaning" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* ✅ Left-to-Right Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent"></div>

          {/* Hero Content (Shifted More to the Left) */}
          <div className="relative max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 items-center">
            
            {/* Left Side: Headline + CTA (Moved More to the Left) */}
            <div className="text-white drop-shadow-lg md:max-w-[500px] lg:max-w-[600px]">
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
                Your Space, Our Expertise
              </h1>
              <p className="mt-4 text-lg text-gray-300">
                Trusted professional cleaning services for homes and businesses. 
                Eco-friendly, reliable, and 100% satisfaction guaranteed.
              </p>
              <div className="mt-6">
                <a href="#" className="bg-[#004B49] text-white px-6 py-3 rounded-md hover:bg-[#02665E] transition">
                  Get a Free Quote
                </a>
              </div>
            </div>

            {/* Right Side: Empty for Balance (Optional Future Image/Animation) */}
            <div className="hidden md:block"></div>

          </div>
        </section>
    )
}

export default HeroSection
