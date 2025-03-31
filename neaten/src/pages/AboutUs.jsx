import React from "react";
import { CheckCircle, ShieldCheck, Leaf, Users , Handshake , Award} from "lucide-react"; 
import { Quote, Phone, Mail, Calendar } from "lucide-react";

const AboutUs = () => {
  return (
    <>
  <section className="w-full py-24 bg-gray-100 text-gray-900">
  <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
    
    {/* Left Side - Content */}
    <div>
      <p className="text-lg uppercase font-medium text-[#6a4dd5] tracking-widest">
        Trusted Experts in Cleaning Excellence
      </p>
      <h2 className="mt-3 text-5xl font-extrabold text-gray-800 leading-snug">
        Professional Cleaning, Built on <span className="text-[#7d5af0]">Trust & Quality</span>
      </h2>
      <p className="mt-6 text-lg text-gray-700 leading-relaxed">
        <strong>Neaten</strong> was founded in <strong>2021 in British Columbia</strong> and, focusing solely on 
        providing the best services, is now <strong>exclusively operating in Alberta</strong>. Our goal is to provide  
        <strong> eco-friendly, high-quality</strong> cleaning services that ensure every space is 
        <strong> pristine and hygienic</strong>.
      </p>
      <p className="mt-4 text-gray-700 leading-relaxed">
        Our team of trained professionals ensures that <strong>every job is done right</strong>, using
        <strong> safe and effective cleaning solutions</strong>. From residential homes to large-scale 
        commercial buildings, we are committed to delivering <strong>excellence in every clean</strong>.
      </p>
    </div>

    {/* Right Side - Image */}
    <div className="flex justify-end">
      <img 
        src="/professional-team.jpg"  
        alt="Neaten Cleaning Team"
        className="w-[480px] h-auto rounded-xl shadow-xl object-cover"
      />
    </div>

  </div>
</section>


{/* //! WHY CHOOSE US? */}
<section className="w-full py-24 bg-white text-gray-900">
  <div className="max-w-7xl mx-auto px-6 lg:px-12">
    
    {/* ✅ Section Heading */}
    <h2 className="text-5xl font-extrabold text-gray-800 leading-snug text-left border-l-4 border-[#6a4dd5] pl-6">
      Why <span className="text-[#6a4dd5]">Choose Neaten?</span>
    </h2>
    <p className="mt-4 text-lg text-gray-700 max-w-3xl leading-relaxed">
      We believe in delivering exceptional cleaning services with a commitment 
      to quality, safety, and sustainability. Our team ensures that every job 
      is completed with precision and care.
    </p>

    {/* 🌟 Four Key Differentiators */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-12">
      
      {/* 🔹 Expertise & Experience */}
      <div className="flex items-start space-x-4">
        <ShieldCheck className="text-[#6a4dd5] w-10 h-10" />
        <div>
          <h3 className="text-xl font-semibold">Proven Expertise</h3>
          <p className="text-gray-600">Years of experience in both residential & commercial cleaning.</p>
        </div>
      </div>

      {/* 🔹 Eco-Friendly Approach */}
      <div className="flex items-start space-x-4">
        <Leaf className="text-[#6a4dd5] w-10 h-10" />
        <div>
          <h3 className="text-xl font-semibold">Eco-Friendly Solutions</h3>
          <p className="text-gray-600">We use non-toxic, sustainable products for a safer clean.</p>
        </div>
      </div>

      {/* 🔹 Trusted & Reliable */}
      <div className="flex items-start space-x-4">
        <CheckCircle className="text-[#6a4dd5] w-10 h-10" />
        <div>
          <h3 className="text-xl font-semibold">100% Satisfaction</h3>
          <p className="text-gray-600">We guarantee top-tier service with every clean.</p>
        </div>
      </div>

      {/* 🔹 Professional Team */}
      <div className="flex items-start space-x-4">
        <Users className="text-[#6a4dd5] w-10 h-10" />
        <div>
          <h3 className="text-xl font-semibold">Trained Professionals</h3>
          <p className="text-gray-600">Our team is certified, background-checked, and highly skilled.</p>
        </div>
      </div>

    </div>
  </div>
</section>


<section className="w-full py-24 bg-gray-50 text-gray-900">
  <div className="max-w-7xl mx-auto px-6 lg:px-12">
    
    {/* ✅ Section Heading */}
    <h2 className="text-5xl font-extrabold text-gray-800 leading-snug text-left border-l-4 border-[#6a4dd5] pl-6">
      Our <span className="text-[#6a4dd5]">Mission & Values</span>
    </h2>
    <p className="mt-4 text-lg text-gray-700 max-w-3xl leading-relaxed">
      At Neaten, we are dedicated to delivering exceptional cleaning services with 
      integrity, professionalism, and eco-conscious solutions. Our mission is to create 
      healthier environments for homes and businesses.
    </p>

    {/* 🌟 Core Values Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-12">
      
      {/* 🔹 Customer Commitment */}
      <div className="flex items-start space-x-4">
        <Handshake className="text-[#6a4dd5] w-10 h-10" />
        <div>
          <h3 className="text-xl font-semibold">Customer-Centric</h3>
          <p className="text-gray-600">We prioritize customer satisfaction with personalized service and quality assurance.</p>
        </div>
      </div>

      {/* 🔹 Eco-Friendly Solutions */}
      <div className="flex items-start space-x-4">
        <Leaf className="text-[#6a4dd5] w-10 h-10" />
        <div>
          <h3 className="text-xl font-semibold">Eco-Friendly Practices</h3>
          <p className="text-gray-600">We use sustainable, non-toxic cleaning products to protect both your health and the environment.</p>
        </div>
      </div>

      {/* 🔹 High Standards */}
      <div className="flex items-start space-x-4">
        <CheckCircle className="text-[#6a4dd5] w-10 h-10" />
        <div>
          <h3 className="text-xl font-semibold">Commitment to Quality</h3>
          <p className="text-gray-600">We uphold the highest standards to deliver spotless results every time.</p>
        </div>
      </div>

      {/* 🔹 Professional Excellence */}
      <div className="flex items-start space-x-4">
        <Award className="text-[#6a4dd5] w-10 h-10" />
        <div>
          <h3 className="text-xl font-semibold">Professionalism & Trust</h3>
          <p className="text-gray-600">Our certified and experienced team ensures reliability and professionalism in every service.</p>
        </div>
      </div>

    </div>
  </div>
</section>


   {/* Commitmnet SECTRION */}
<section className="w-full py-24 bg-gray-50 text-gray-900">
  <div className="max-w-7xl mx-auto px-6 lg:px-12">
    
    {/* ✅ Section Heading */}
    <h2 className="text-5xl font-extrabold text-gray-800 leading-snug border-l-4 border-[#6a4dd5] pl-6">
      A Cleaning Partner You Can <span className="text-[#6a4dd5]">Trust</span>
    </h2>
    <p className="mt-4 text-lg text-gray-700 max-w-3xl leading-relaxed">
      At Neaten, we take pride in building lasting relationships with our clients.  
      Our mission is not just to clean, but to provide comfort, health, and peace of mind in every space we touch.
    </p>

    {/* 🌟 Customer Trust & CTA */}
    <div className="mt-12 flex flex-col lg:flex-row justify-between items-center gap-10">
      
      {/* 💬 Customer Testimonial */}
      <div className="bg-white p-6 rounded-lg shadow-md max-w-md">
        <Quote className="text-[#6a4dd5] w-8 h-8 mb-4" />
        <p className="text-lg text-gray-700 italic">
          "Neaten transformed our workspace! The team is punctual, professional, and incredibly thorough.  
          We highly recommend their services!"
        </p>
        <h4 className="mt-4 text-[#6a4dd5] font-semibold">— Sarah M., Office Manager</h4>
      </div>

      {/* 📞 Contact CTA */}
      <div className="max-w-md">
        <h3 className="text-3xl font-bold text-gray-800">Ready for a Spotless Space?</h3>
        <p className="mt-2 text-lg text-gray-700">
          Get in touch with our expert team today and experience hassle-free, top-tier cleaning for your space.
        </p>
        <div className="mt-6 space-y-4">
          <a 
            href="tel:+12364560090"
            className="flex items-center space-x-3 text-[#6a4dd5] text-lg font-semibold hover:text-[#5336af] transition"
          >
            <Phone className="w-6 h-6" /> <span>+1 (236) 550-0090</span>
          </a>
          <a 
            href="mailto:Neaten.inc@gmail.com"
            className="flex items-center space-x-3 text-[#6a4dd5] text-lg font-semibold hover:text-[#5336af] transition"
          >
            <Mail className="w-6 h-6" /> <span>Neaten.inc@gmail.com</span>
          </a>
          <a 
            href="/contact"
            className="flex items-center space-x-3 text-[#6a4dd5] text-lg font-semibold hover:text-[#5336af] transition"
          >
            <Calendar className="w-6 h-6" /> <span>Schedule a Consultation</span>
          </a>
        </div>
      </div>

    </div>

  </div>
</section>

</>
  );
};

export default AboutUs;
