import React from "react";
import { useNavigate } from "react-router-dom";
import { Home, Sparkles, ShieldCheck, Leaf } from "lucide-react";

const ResidentialServices = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full text-gray-900 py-20 bg-white">
      
      {/* 🔥 Section Intro */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-left border-l-4 border-[#6a4dd5] pl-6 mb-12">
        <h1 className="text-5xl font-extrabold leading-tight text-black mb-4">
          Premium <span className="text-[#6a4dd5]">Residential Cleaning</span> for a Spotless Home
        </h1>
        <p className="text-lg text-gray-700 max-w-4xl leading-relaxed">
          A <strong>clean and healthy home</strong> is essential for your comfort and well-being. 
          Our professional cleaning services ensure your <strong>living space</strong> remains fresh, sanitized, and inviting.
        </p>
        <button
          onClick={() => navigate(-1)}
          className="mt-6 px-6 py-3 bg-[#6a4dd5] text-white font-semibold rounded-md hover:bg-[#5336af] transition-all"
        >
          ← Back to Services
        </button>
      </div>

      {/* 📌 Why Choose Us? */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        <div className="flex items-start space-x-4">
          <Home className="text-[#6a4dd5] w-10 h-10" />
          <div>
            <h3 className="text-xl font-semibold">Tailored for Homes</h3>
            <p className="text-gray-600">We provide personalized cleaning plans to meet the needs of every household.</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <Sparkles className="text-[#6a4dd5] w-10 h-10" />
          <div>
            <h3 className="text-xl font-semibold">Deep Cleaning Expertise</h3>
            <p className="text-gray-600">From routine cleaning to detailed deep cleaning, we leave no corner untouched.</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <ShieldCheck className="text-[#6a4dd5] w-10 h-10" />
          <div>
            <h3 className="text-xl font-semibold">Safe & Trusted</h3>
            <p className="text-gray-600">Fully vetted professionals using safe and effective cleaning methods.</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <Leaf className="text-[#6a4dd5] w-10 h-10" />
          <div>
            <h3 className="text-xl font-semibold">Eco-Friendly Approach</h3>
            <p className="text-gray-600">We use green-certified products to ensure a healthy and sustainable home environment.</p>
          </div>
        </div>
      </div>

      {/* 📌 Our Services Breakdown */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-20">
        <h2 className="text-4xl font-bold text-gray-900 border-b-4 border-[#6a4dd5] pb-2 mb-10">Residential Cleaning Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {[
            {
              title: "Carpet Cleaning",
              desc: "Deep steam cleaning, stain removal, and deodorization to restore freshness and softness.",
              img: "/carpet-cleaning.jpg",
            },
            {
              title: "Pressure Washing",
              desc: "Exterior cleaning for patios, driveways, and decks using high-pressure water jets.",
              img: "/pressure-washing.jpg",
            },
            {
              title: "Windows Cleaning",
              desc: "Professional interior and exterior window cleaning for crystal-clear visibility.",
              img: "/windows-cleaning.jpg",
            },
            {
              title: "Post-Construction Cleaning",
              desc: "Dust and debris removal after renovations to make your home move-in ready.",
              img: "/post-construction.jpg",
            },
            {
              title: "Move-In/Move-Out Cleaning",
              desc: "Comprehensive cleaning for a fresh start before moving in or after moving out.",
              img: "/move-in-out.jpg",
            }
          ].map((service, index) => (
            <div key={index} className="flex items-start space-x-6">
              <img 
                src={service.img} 
                alt={service.title} 
                className="w-36 h-36 rounded-lg object-cover shadow-md"
                style={{ minWidth: "144px", minHeight: "144px" }}
              />
              <div>
                <h3 className="text-2xl font-semibold text-gray-800">{service.title}</h3>
                <p className="mt-2 text-gray-600 leading-relaxed">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResidentialServices;
