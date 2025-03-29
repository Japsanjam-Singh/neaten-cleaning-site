import { Link } from "react-router-dom";
import React from "react";

const ServicesOverview = () => {
  return (
    <section className="w-full py-20 bg-gray-100 text-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        
        {/* ✨ Tagline for the Section */}
        <p className="text-lg uppercase font-medium text-[#009688] tracking-widest">
          Tailored Cleaning Solutions for Every Space
        </p>

        {/* 🏆 Main Heading */}
        <h2 className="mt-2 text-5xl font-extrabold text-gray-800 leading-tight">
          Exceptional Cleaning Services You Can Trust
        </h2>

        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          We offer premium cleaning solutions for both businesses and homes, ensuring pristine and healthy spaces with our professional touch.
        </p>

        {/* 🏠 Service Category Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* 🏢 Commercial Cleaning */}

{/* 🏢 Commercial Cleaning */}
<div className="relative bg-white shadow-lg rounded-lg overflow-hidden group hover:shadow-2xl transition-all">
  <img
    src="/commercial.jpg" 
    alt="Commercial Cleaning"
    className="w-full h-64 object-cover group-hover:opacity-80 transition duration-300"
  />
  <div className="p-6">
    <h3 className="text-2xl font-bold text-gray-800 flex items-center">
      🏢 Commercial Cleaning
    </h3>
    <p className="mt-2 text-gray-600">
      Expert cleaning services for offices, businesses, and industrial spaces. From janitorial services to deep cleaning, we maintain spotless work environments.
    </p>
    
    {/* 🔗 Link to Commercial Services Page */}
    <Link
      to="/services/commercial"
      className="inline-block mt-4 bg-[#009688] text-white px-6 py-3 rounded-md hover:bg-[#00796B] transition-all font-medium shadow-lg"
    >
      Explore Commercial Services →
    </Link>
  </div>
</div>


          {/* 🏡 Residential Cleaning */}
          <div className="relative bg-white shadow-lg rounded-lg overflow-hidden group hover:shadow-2xl transition-all">
            <img
              src="/residential.jpg" 
              alt="Residential Cleaning"
              className="w-full h-64 object-cover group-hover:opacity-80 transition duration-300"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 flex items-center">
                🏡 Residential Cleaning
              </h3>
              <p className="mt-2 text-gray-600">
                Specialized home cleaning services to keep your living space fresh, clean, and inviting. From carpets to deep cleaning, we cover it all.
              </p>
              <Link
  to="/services/residential"
  className="inline-block mt-4 bg-[#009688] text-white px-6 py-3 rounded-md hover:bg-[#00796B] transition-all font-medium shadow-lg"
>
  Explore Residential Services →
</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
