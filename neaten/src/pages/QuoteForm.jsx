import React, { useState } from 'react';

function QuoteForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        typeOfCleaning: '',
        location: '',
        message: '',
        referral: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await fetch("http://localhost:5000/api/send", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });
    
            if (response.ok) {
                alert("Thank you! Your quote request has been submitted.");
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    typeOfCleaning: '',
                    location: '',
                    message: '',
                    referral: ''
                });
            } else {
                alert("Oops! Something went wrong. Please try again later.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Server error. Please try again later.");
        }
    };
    

    return (
        <div className="bg-[#F8F9FA] min-h-screen pt-32 px-4">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-semibold text-[#004B49] mb-10 text-center">
                    Get a Quote
                </h2>

                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your full name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-[#00A896] focus:ring-1"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="you@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-[#00A896] focus:ring-1"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                        <input
                            type="tel"
                            name="phone"
                            placeholder="(123) 456-7890"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-[#00A896] focus:ring-1"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Type of Cleaning</label>
                        <select
                            name="typeOfCleaning"
                            value={formData.typeOfCleaning}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-600 focus:outline-none focus:ring-[#00A896] focus:ring-1"
                        >
                            <option value="">Select a service</option>
                            <option value="commercial">Commercial</option>
                            <option value="residential">Residential</option>
                            <option value="carpet_cleaning">Carpet Cleaning</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                        <input
                            type="text"
                            name="location"
                            placeholder="Street, City, Province"
                            value={formData.location}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-[#00A896] focus:ring-1"
                        />
                    </div>
                    <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                        <textarea
                            name="message"
                            placeholder="Tell us more about your needs..."
                            value={formData.message}
                            onChange={handleChange}
                            rows="4"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-[#00A896] focus:ring-1"
                        ></textarea>
                    </div>
                    <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">How did you hear about us?</label>
                        <select
                            name="referral"
                            value={formData.referral}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-600 focus:outline-none focus:ring-[#00A896] focus:ring-1"
                        >
                            <option value="">Select one</option>
                            <option value="social_media">Social Media</option>
                            <option value="referral">Referral</option>
                            <option value="google">Google Search</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className="md:col-span-2 text-right">
                        <button
                            type="submit"
                            className="inline-block px-6 py-2 bg-[#00A896] text-white font-semibold rounded-md hover:bg-[#00796B] transition"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default QuoteForm;
