import React from "react";

const ServicesHero = () => {
  return (
    <section className="relative w-full h-[85vh] flex items-center bg-gray-900 text-white overflow-hidden">
      
      {/* Grid Layout: Text & Image */}
      <div className="relative max-w-7xl mx-auto px-8 lg:px-12 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        
        {/* Left Side: Text Content */}
        <div className="max-w-lg">
          <h1 className="text-6xl font-extrabold leading-tight tracking-tight">
            Transform Your Space with <span className="text-[#6a4dd5]">Expert Cleaning</span>

          </h1>
          <p className="mt-4 text-lg text-gray-300 leading-relaxed">
  <strong>Neaten</strong> has been delivering <strong>top-tier cleaning services</strong> <s> </s>
  across <strong>Alberta</strong>, offering <strong>eco-friendly solutions</strong> <s> </s>
  for homes and businesses.
</p>
<p className="mt-3 text-gray-400 leading-relaxed">
  From <strong>commercial maintenance</strong> to <strong>residential deep cleaning</strong>, our trained 
  professionals ensure a <strong>spotless, sanitized, and refreshing environment</strong>.
</p>

        </div>

        {/* Right Side: Large Image */}
        <div className="hidden md:flex justify-center">
          <img 
            src="servicehero.jpg"  // Ensure this image exists in public/assets
            alt="Professional Cleaning Services"
            className="w-[550px] h-auto rounded-xl shadow-xl object-cover"
          />
        </div>

      </div>

    </section>
  );
};

export default ServicesHero;
