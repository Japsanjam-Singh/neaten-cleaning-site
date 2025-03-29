import React from "react";
import { useNavigate } from "react-router-dom";
import { Briefcase, Sparkles, Building, CheckCircle } from "lucide-react"; 

const CommercialServices = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full text-gray-900 pt-24 pb-20 bg-white">
      
{/* 🔥 Section Intro */}
<div className="max-w-7xl mx-auto px-6 lg:px-14 text-left border-l-4 border-[#00796B] pl-6 mb-12">
  <h1 className="text-5xl font-extrabold leading-tight text-gray-900 mb-4">
    Expert Cleaning for 
    <span className="text-[#009688]"> Commercial Spaces</span>
  </h1>
  <p className="text-lg text-gray-700 max-w-4xl leading-relaxed">
    A <strong className="text-gray-900">well-maintained workspace</strong> is key to  
    <strong className="text-[#00796B]"> productivity</strong> and  
    <strong className="text-[#009688]"> professionalism</strong>. 
    Our expert cleaning services ensure your  
    <strong className="text-gray-900"> business, office, or industrial space</strong> remains  
    <span className="text-gray-800 font-medium"> pristine, hygienic, and inviting</span>.
  </p>
  <button
    onClick={() => navigate(-1)}
    className="mt-6 px-6 py-3 bg-[#00796B] text-white font-semibold rounded-md hover:bg-[#005F56] transition-all shadow-md"
  >
    ← Back to Services
  </button>
</div>


      {/* 📌 Why Choose Us? */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        <div className="flex items-start space-x-4">
          <Briefcase className="text-[#00796B] w-10 h-10" />
          <div>
            <h3 className="text-xl font-semibold">Tailored for Businesses</h3>
            <p className="text-gray-600">Custom cleaning solutions designed for corporate environments.</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <Sparkles className="text-[#00796B] w-10 h-10" />
          <div>
            <h3 className="text-xl font-semibold">Advanced Sanitization</h3>
            <p className="text-gray-600">Using hospital-grade disinfectants, we ensure a germ-free workspace.</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <Building className="text-[#00796B] w-10 h-10" />
          <div>
            <h3 className="text-xl font-semibold">Certified Professionals</h3>
            <p className="text-gray-600">Our trained cleaning staff meet the highest industry standards.</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <CheckCircle className="text-[#00796B] w-10 h-10" />
          <div>
            <h3 className="text-xl font-semibold">Reliable & On-Time</h3>
            <p className="text-gray-600">We stick to schedules and deliver consistent, high-quality results.</p>
          </div>
        </div>
      </div>

      {/* 📌 Our Services Breakdown */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-20">
        <h2 className="text-4xl font-bold text-gray-900 border-b-4 border-[#00796B] pb-2 mb-10">Commercial Cleaning Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {[ 
            {
              title: "Janitorial Services",
              desc: "Daily office cleaning including dusting, waste management, and restroom sanitation for a professional workspace.",
              img: "/janitorial.jpg",
            },
            {
              title: "Carpet Cleaning",
              desc: "Deep cleaning of carpets using steam extraction, stain removal, and deodorization for a fresh feel.",
              img: "/carpet-cleaning.jpg",
            },
            {
              title: "Floor Care & Polishing",
              desc: "Hardwood, tile, and marble floor maintenance including polishing, buffing, and waxing.",
              img: "/floor-care.jpg",
            },
            {
              title: "Pressure Washing",
              desc: "High-pressure cleaning of exterior surfaces, parking lots, driveways, and sidewalks.",
              img: "/pressure-washing.jpg",
            },
            {
              title: "Post-Construction Cleaning",
              desc: "Removing dust, debris, and residues after renovations, leaving the space move-in ready.",
              img: "/post-construction.jpg",
            },
            {
              title: "Disinfection & Sanitization",
              desc: "Comprehensive disinfection services using eco-friendly sanitizers for a germ-free office.",
              img: "/disinfection.jpg",
            },
            {
              title: "Window Cleaning",
              desc: "Professional streak-free window cleaning for high-rise and commercial properties.",
              img: "/windows-cleaning.jpg",
            },
            {
              title: "Exterior Building Cleaning",
              desc: "Deep cleaning of building exteriors, including glass, concrete, and aluminum surfaces.",
              img: "/exterior-cleaning.jpg",
            },
            {
              title: "Move-In/Move-Out Cleaning",
              desc: "Thorough cleaning for businesses relocating, ensuring a fresh start in the new workspace.",
              img: "/move-in-out.jpg",
            },
          ].map((service, index) => (
            <div key={index} className="flex items-start space-x-6">
              <img 
                src={service.img} 
                alt={service.title} 
                className="w-36 h-36 rounded-lg object-cover shadow-md"
                style={{ minWidth: "144px", minHeight: "144px" }} // Ensures all images have same aspect ratio
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

export default CommercialServices;
