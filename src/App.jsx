import React, { useState } from 'react';

const SuperProfessionalRecovery = () => {
    const [formData, setFormData] = useState({ 
        name: '', 
        phone: '', 
        location: '',
        service: 'general'
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const message = `New Callback Request:%0A%0AService: ${formData.service}%0AName: ${formData.name}%0APhone: ${formData.phone}%0ALocation: ${formData.location}`;
        window.open(`https://wa.me/447455310863?text=${message}`, '_blank');
        window.open(`mailto:jhafeez2005@gmail.com?subject=New Recovery Request&body=${message.replace(/%0A/g, '\n')}`);
        alert('Request sent! We will contact you shortly.');
        setFormData({ name: '', phone: '', location: '', service: 'general' });
    };

    return (
        <div className="font-sans text-gray-800">
            {/* ===== TOP BAR ===== */}
            <div className="bg-blue-800 text-white py-2 px-4 text-center text-sm">
                <span className="font-semibold">🚨 24/7 EMERGENCY LINE:</span> 
                <a href="tel:+447455310863" className="ml-2 underline font-bold">+44 7455 310863</a> 
                • Call us anytime, anywhere in the UK
            </div>

            {/* ===== MAIN HEADER / NAV ===== */}
            <header className="sticky top-0 z-50 bg-white shadow-lg">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex items-center">
                        <div className="bg-red-600 text-white p-3 rounded-lg">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                            </svg>
                        </div>
                        <div className="ml-4">
                            <h1 className="text-2xl font-bold text-gray-900">Emergency Recovery <span className="text-blue-700">24/7</span></h1>
                            <p className="text-sm text-gray-600">UK's Trusted Vehicle Breakdown & Recovery Service</p>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        <a href="#home" className="font-medium hover:text-red-600">Home</a>
                        <a href="#services" className="font-medium hover:text-red-600">Services</a>
                        <a href="#areas" className="font-medium hover:text-red-600">Coverage</a>
                        <a href="#contact" className="font-medium hover:text-red-600">Contact</a>
                    </nav>

                    {/* Call Button */}
                    <a href="tel:+447455310863" className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg shadow flex items-center transition">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                        </svg>
                        EMERGENCY CALL
                    </a>
                </div>
            </header>

            {/* ===== HERO SECTION (with Background Image) ===== */}
            <section id="home" className="relative bg-gray-900 text-white py-24">
                {/* Background Image - You can replace this URL */}
                <div className="absolute inset-0 z-0 opacity-40 bg-cover bg-center" style={{backgroundImage: 'url("https://images.pexels.com/photos/4489777/pexels-photo-4489777.jpeg?auto=compress&cs=tinysrgb&w=1600")'}}></div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">Fast & Reliable <span className="text-red-400">Vehicle Recovery</span> Across the UK</h2>
                    <p className="text-xl mb-10 max-w-3xl mx-auto">Our expert team provides 24/7 emergency roadside assistance, accident recovery, and professional vehicle transportation when you need it most.</p>
                    <div className="flex flex-col md:flex-row justify-center gap-6">
                        <a href="#contact" className="bg-red-600 hover:bg-red-700 text-white text-lg font-bold py-4 px-10 rounded-lg shadow-xl transition duration-300">GET IMMEDIATE HELP</a>
                        <a href="tel:+447455310863" className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-lg font-bold py-4 px-10 rounded-lg transition duration-300">CALL: +44 7455 310863</a>
                    </div>
                </div>
            </section>

            {/* ===== SERVICES SECTION (Like the reference site) ===== */}
            <section id="services" className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Professional Recovery Services</h2>
                        <p className="text-gray-600 text-lg max-w-3xl mx-auto">We handle all types of vehicle breakdowns and accidents with expertise and care, getting you back on the road safely.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {/* Service 1 */}
                        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow border-t-4 border-red-500">
                            <div className="text-red-500 text-4xl mb-4">🚑</div>
                            <h3 className="text-2xl font-bold mb-3">24/7 Emergency Breakdown</h3>
                            <p className="text-gray-700">Rapid response breakdown recovery service, 24 hours a day, 7 days a week. We reach you fast, no matter the time.</p>
                        </div>
                        {/* Service 2 */}
                        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow border-t-4 border-blue-500">
                            <div className="text-blue-500 text-4xl mb-4">🚗</div>
                            <h3 className="text-2xl font-bold mb-3">Accident & Collision Recovery</h3>
                            <p className="text-gray-700">Professional recovery and transport for vehicles involved in accidents. We handle the situation with sensitivity and efficiency.</p>
                        </div>
                        {/* Service 3 */}
                        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow border-t-4 border-green-500">
                            <div className="text-green-500 text-4xl mb-4">⚡</div>
                            <h3 className="text-2xl font-bold mb-3">Jump Start & Battery Service</h3>
                            <p className="text-gray-700">Flat battery? Our technicians will jump-start your vehicle on the spot or provide a battery replacement if needed.</p>
                        </div>
                        {/* Service 4 */}
                        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow border-t-4 border-yellow-500">
                            <div className="text-yellow-500 text-4xl mb-4">🛞</div>
                            <h3 className="text-2xl font-bold mb-3">Tyre Change & Repair</h3>
                            <p className="text-gray-700">On-the-spot tyre change or repair service. We carry common tyre sizes to get you moving quickly.</p>
                        </div>
                        {/* Service 5 */}
                        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow border-t-4 border-purple-500">
                            <div className="text-purple-500 text-4xl mb-4">⛽</div>
                            <h3 className="text-2xl font-bold mb-3">Fuel Delivery</h3>
                            <p className="text-gray-700">Run out of fuel? We'll deliver enough petrol or diesel to get you to the nearest service station.</p>
                        </div>
                        {/* Service 6 */}
                        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow border-t-4 border-indigo-500">
                            <div className="text-indigo-500 text-4xl mb-4">🛣️</div>
                            <h3 className="text-2xl font-bold mb-3">Motorway & Hard Shoulder Recovery</h3>
                            <p className="text-gray-700">Specialist service for breakdowns on motorways. We work closely with Highways England for safe, swift recovery.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== "OUR APPROACH" SECTION (Text from your reference site) ===== */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="bg-gradient-to-r from-blue-50 to-gray-100 p-10 md:p-14 rounded-3xl shadow-inner">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Approach to Vehicle Recovery</h2>
                        <div className="space-y-6 text-gray-700 text-lg">
                            <p>We do everything we can to address non-mechanical breakdowns on-site, such as jumpstarts and tire changes. Our first priority is your safety and getting you back on the road quickly.</p>
                            <p>You will be in safe and capable hands while our technician examines the issue and assesses what can be done, answering any questions or concerns you may have.</p>
                            <p className="font-semibold">No two collisions are the same, and over the years we have seen it all across the UK. We are as at home jumpstarting flat batteries on the hard shoulder of a motorway as we are towing a vehicle following a collision on a roundabout.</p>
                        </div>
                        <div className="mt-10 pt-8 border-t border-gray-300 flex justify-around text-center">
                            <div><div className="text-3xl font-bold text-blue-700">24/7</div><div className="text-sm">Availability</div></div>
                            <div><div className="text-3xl font-bold text-blue-700">30 Min*</div><div className="text-sm">Avg Response</div></div>
                            <div><div className="text-3xl font-bold text-blue-700">UK Wide</div><div className="text-sm">Coverage</div></div>
                            <div><div className="text-3xl font-bold text-blue-700">5000+</div><div className="text-sm">Recoveries</div></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== CONTACT / CALLBACK FORM ===== */}
            <section id="contact" className="py-20 bg-gray-100">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
                        <div className="md:flex">
                            {/* Contact Info Side */}
                            <div className="md:w-2/5 bg-gradient-to-b from-blue-800 to-blue-900 text-white p-10">
                                <h3 className="text-3xl font-bold mb-8">Get in Touch</h3>
                                <div className="space-y-8">
                                    <div className="flex items-start">
                                        <div className="bg-blue-600 p-3 rounded-lg mr-4">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-xl">Call Us Anytime</h4>
                                            <a href="tel:+447455310863" className="text-2xl font-bold block mt-1 hover:underline">+44 7455 310863</a>
                                            <p className="text-blue-200 mt-1">24/7 Emergency Line</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="bg-green-600 p-3 rounded-lg mr-4">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-xl">WhatsApp</h4>
                                            <a href="https://wa.me/447455310863" target="_blank" rel="noopener noreferrer" className="text-xl font-bold block mt-1 hover:underline">+44 7455 310863</a>
                                            <p className="text-blue-200 mt-1">Fast chat for assistance</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="bg-red-600 p-3 rounded-lg mr-4">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-xl">Email Us</h4>
                                            <a href="mailto:jhafeez2005@gmail.com" className="text-xl font-bold block mt-1 hover:underline">jhafeez2005@gmail.com</a>
                                            <p className="text-blue-200 mt-1">For detailed inquiries</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Form Side */}
                            <div className="md:w-3/5 p-10">
                                <h3 className="text-3xl font-bold text-gray-900 mb-2">Request a Callback</h3>
                                <p className="text-gray-600 mb-8">Fill out the form and we'll call you back immediately.</p>
                                <form onSubmit={handleSubmit}>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-gray-700 mb-2">Your Name *</label>
                                            <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>
                                        </div>
                                        <div>
                                            <label className="block text-gray-700 mb-2">Phone Number *</label>
                                            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="+44 7455 310863"/>
                                        </div>
                                        <div className="md:col-span-2">
                                            <label className="block text-gray-700 mb-2">Service Needed</label>
                                            <select name="service" value={formData.service} onChange={handleChange} className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                                                <option value="general">General Breakdown Recovery</option>
                                                <option value="accident">Accident Recovery</option>
                                                <option value="jumpstart">Jump Start</option>
                                                <option value="tyre">Tyre Change</option>
                                                <option value="fuel">Fuel Delivery</option>
                                                <option value="motorway">Motorway Recovery</option>
                                            </select>
                                        </div>
                                        <div className="md:col-span-2">
                                            <label className="block text-gray-700 mb-2">Location / Postcode *</label>
                                            <input type="text" name="location" value={formData.location} onChange={handleChange} required className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Where are you now?"/>
                                        </div>
                                    </div>
                                    <button type="submit" className="mt-8 w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-4 px-6 rounded-lg text-lg shadow-lg transition duration-300">
                                        SEND REQUEST FOR IMMEDIATE ASSISTANCE
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== FOOTER ===== */}
            <footer className="bg-gray-900 text-white py-12">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-8 md:mb-0">
                            <div className="text-2xl font-bold mb-2">Emergency Recovery <span className="text-red-400">24/7</span></div>
                            <p className="text-gray-400">Professional vehicle recovery & roadside assistance across the United Kingdom.</p>
                        </div>
                        <div className="text-center md:text-right">
                            <p className="text-xl font-bold"><a href="tel:+447455310863" className="hover:text-red-300">+44 7455 310863</a></p>
                            <p className="text-gray-400">24/7 Emergency Line</p>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 mt-10 pt-8 text-center text-gray-500 text-sm">
                        <p>© {new Date().getFullYear()} Emergency Recovery 24/7. All rights reserved. | A UK-based vehicle recovery service.</p>
                        <p className="mt-2">This is a professional website template for demonstration. Ensure you comply with all local business regulations.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default SuperProfessionalRecovery;
