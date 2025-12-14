import React, { useState } from 'react';

const EmergencyRecovery = () => {
    const [formData, setFormData] = useState({ 
        name: '', 
        phone: '', 
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const text = `Name: ${formData.name}%0APhone: ${formData.phone}%0AMessage: ${formData.message}`;
        window.open(`https://wa.me/447455310863?text=${text}`, '_blank');
        alert('Request sent via WhatsApp! We will call you back.');
        setFormData({ name: '', phone: '', message: '' });
    };

    return (
        <div className="min-h-screen bg-white text-gray-800">
            {/* ----- HEADER ----- */}
            <header className="border-b">
                <div className="container mx-auto px-4 py-6 flex justify-between items-center">
                    <div>
                        <h1 className="text-2xl font-bold">Emergency Recovery <span className="text-blue-600">24/7</span></h1>
                        <p className="text-gray-600">Vehicle breakdown & recovery service</p>
                    </div>
                    <a href="tel:+447455310863" className="bg-red-600 text-white px-5 py-3 rounded font-medium hover:bg-red-700">
                        Call +44 7455 310863
                    </a>
                </div>
            </header>

            {/* ----- HERO SECTION ----- */}
            <section className="bg-gray-50 py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-6">Professional Vehicle Recovery Service</h2>
                    <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
                        Fast, reliable recovery for breakdowns and accidents. We cover all areas with 24/7 emergency response.
                    </p>
                    <a href="#contact" className="bg-blue-700 text-white px-8 py-4 rounded text-lg font-medium inline-block hover:bg-blue-800">
                        Get Help Now
                    </a>
                </div>
            </section>

            {/* ----- OUR APPROACH (EXACT TEXT FROM YOUR REFERENCE SITE) ----- */}
            <section className="py-16">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h2 className="text-3xl font-bold mb-10 text-center">Our approach to vehicle recovery</h2>
                    
                    <div className="bg-gray-50 p-8 rounded-lg border">
                        <p className="mb-6">
                            We do everything we can to address non-mechanical breakdowns on-site, such as jumpstarts and tire changes.
                        </p>
                        <p className="mb-6">
                            You will be in safe and capable hands while our technician examines the issue and assesses what can be done, answering any questions or concerns you may have.
                        </p>
                        <p>
                            No two collisions are the same, and over the years we have seen it all in and around the UK. We are as at home jumpstarting flat batteries on the hard shoulder of a motorway as we are towing a vehicle following a collision on a roundabout.
                        </p>
                    </div>

                    {/* Simple Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 text-center">
                        <div className="p-4">
                            <div className="text-3xl font-bold text-blue-700">24/7</div>
                            <div className="text-gray-600">Service</div>
                        </div>
                        <div className="p-4">
                            <div className="text-3xl font-bold text-blue-700">Quick</div>
                            <div className="text-gray-600">Response</div>
                        </div>
                        <div className="p-4">
                            <div className="text-3xl font-bold text-blue-700">UK</div>
                            <div className="text-gray-600">Wide</div>
                        </div>
                        <div className="p-4">
                            <div className="text-3xl font-bold text-blue-700">Expert</div>
                            <div className="text-gray-600">Technicians</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ----- SIMPLE CONTACT FORM ----- */}
            <section id="contact" className="py-16 bg-gray-100">
                <div className="container mx-auto px-4 max-w-2xl">
                    <h2 className="text-3xl font-bold mb-2 text-center">Contact Us</h2>
                    <p className="text-gray-600 mb-10 text-center">Send us a message and we'll get back to you immediately.</p>

                    <div className="bg-white p-8 rounded-lg shadow">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-6">
                                <label className="block mb-2">Your Name</label>
                                <input type="text" name="name" value={formData.name} onChange={handleChange} required 
                                    className="w-full p-3 border rounded" placeholder="John Smith" />
                            </div>
                            <div className="mb-6">
                                <label className="block mb-2">Phone Number</label>
                                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required 
                                    className="w-full p-3 border rounded" placeholder="+44 7455 310863" />
                            </div>
                            <div className="mb-6">
                                <label className="block mb-2">How can we help?</label>
                                <textarea name="message" value={formData.message} onChange={handleChange} rows="4"
                                    className="w-full p-3 border rounded" placeholder="Describe your issue or location..."></textarea>
                            </div>
                            <button type="submit" className="w-full bg-red-600 text-white py-3 rounded font-medium hover:bg-red-700">
                                Send Message via WhatsApp
                            </button>
                        </form>
                        
                        <div className="mt-10 pt-8 border-t text-center">
                            <p className="font-bold">Or contact us directly:</p>
                            <p className="mt-2">
                                <a href="tel:+447455310863" className="text-blue-600 hover:underline text-lg">📞 +44 7455 310863</a> | 
                                <a href="mailto:jhafeez2005@gmail.com" className="ml-4 text-blue-600 hover:underline">📧 jhafeez2005@gmail.com</a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ----- SIMPLE FOOTER ----- */}
            <footer className="bg-gray-800 text-white py-10">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-xl font-bold">Emergency Recovery 24/7</p>
                    <p className="mt-2 text-gray-300">Professional vehicle recovery services across the UK.</p>
                    <p className="mt-8 text-gray-400">© {new Date().getFullYear()} All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default EmergencyRecovery;
