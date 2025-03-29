import React from "react";
import { CheckCircle } from "lucide-react";

const ServicesSummary = () => {
  return (
    <section className="w-full py-16 bg-[#F2F6F5] text-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* 🏆 Section Header */}
        <div className="text-left border-l-4 border-[#00796B] pl-6 mb-10">
          <h2 className="text-4xl font-extrabold text-gray-900 leading-tight">
            A Commitment to <span className="text-[#00796B]">Excellence in Every Clean</span>
          </h2>
          <p className="mt-3 text-lg text-gray-700 max-w-3xl leading-relaxed">
            At <strong>Neaten</strong>, we deliver <strong>high-quality, tailored cleaning solutions</strong> 
            designed for both <strong>commercial and residential spaces</strong>. Whether you need a 
            <strong> one-time deep clean</strong> or <strong>routine maintenance</strong>, our expertise ensures 
            <strong>flawless results</strong> every time.
          </p>
        </div>

        {/* 🔹 Key Offerings - Aligned Professionally */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8">
          
          {[
            { title: "Commercial Expertise", desc: "Tailored cleaning for offices, retail spaces, and industrial buildings." },
            { title: "Eco-Friendly Solutions", desc: "We use non-toxic, sustainable cleaning products to ensure safety and effectiveness." },
            { title: "Deep Residential Cleaning", desc: "From carpets to kitchens, we provide thorough home cleaning solutions." },
            { title: "Move-In/Move-Out Services", desc: "Detailed cleaning to ensure fresh starts for new tenants or owners." },
            { title: "Post-Construction Cleaning", desc: "Removing debris, dust, and residues for a clean, move-in-ready space." },
            { title: "Sanitization & Disinfection", desc: "Comprehensive sanitization for workplaces and homes, ensuring a germ-free environment." }
          ].map((service, index) => (
            <div key={index} className="flex items-start space-x-4">
              <CheckCircle className="text-[#00796B] w-7 h-7 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
                <p className="text-gray-700 mt-1 leading-relaxed">{service.desc}</p>
              </div>
            </div>
          ))}
          
        </div>
      </div>
    </section>
  );
};

export default ServicesSummary;
