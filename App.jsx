import React, { useState } from 'react';

const EmergencyRecovery = () => {
    const [showCookie, setShowCookie] = useState(true);
    const [formData, setFormData] = useState({ 
        name: '', 
        phone: '', 
        location: '',
        service: 'Breakdown Recovery' // Default service
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // WhatsApp Notification
            const whatsappMessage = `New Service Request:%0A%0AService: ${formData.service}%0AName: ${formData.name}%0APhone: ${formData.phone}%0ALocation: ${formData.location}`;
            window.open(`https://wa.me/447455310863?text=${whatsappMessage}`, '_blank');
            
            // Email Notification
            const emailSubject = `New ${formData.service} Request`;
            const emailBody = `Service: ${formData.service}%0AName: ${formData.name}%0APhone: ${formData.phone}%0ALocation: ${formData.location}`;
            window.open(`mailto:jhafeez2005@gmail.com?subject=${emailSubject}&body=${emailBody}`);
            
            alert('Request submitted successfully! We will contact you within 10-15 minutes.');
            setFormData({ name: '', phone: '', location: '', service: 'Breakdown Recovery' });
            
        } catch (err) {
            console.error(err);
            alert('Request submitted! Our team will contact you shortly.');
        }
    };

    // Services Data with icons
    const services = [
        { id: 1, name: '24/7 Breakdown Recovery', icon: '🚑', desc: 'Fast emergency vehicle recovery any time, day or night.' },
        { id: 2, name: 'Accident Recovery', icon: '🚗', desc: 'Professional recovery after road accidents and collisions.' },
        { id: 3, name: 'Jump Start Service', icon: '⚡', desc: 'Quick battery jump-start service at your location.' },
        { id: 4, name: 'Tyre Change', icon: '🛞', desc: 'On-site flat tyre change and repair service.' },
        { id: 5, name: 'Fuel Delivery', icon: '⛽', desc: 'Emergency fuel delivery if you run out on the road.' },
        { id: 6, name: 'Motorway Assistance', icon: '🛣️', desc: 'Specialized recovery service on motorways and highways.' },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* ===== HEADER / NAVBAR ===== */}
            <header className="sticky top-0 z-50 bg-white shadow-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        {/* Logo */}
                        <div className="flex items-center">
                            <div className="bg-blue-700 text-white p-2 rounded-lg mr-3">
                                <i className="fas fa-ambulance text-xl"></i>
                            </div>
                            <div>
                                <h1 className="text-xl font-bold text-gray-900">Emergency Recovery 24/7</h1>
                                <p className="text-sm text-gray-600">UK Wide Vehicle Assistance</p>
                            </div>
                        </div>

                        {/* Navigation Menu */}
                        <nav className="hidden md:flex space-x-8">
                            <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium">Home</a>
                            <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium">Services</a>
                            <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium">Our Approach</a>
                            <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</a>
                        </nav>

                        {/* Call Button */}
                        <a href="tel:+447455310863" className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg flex items-center transition">
                            <i className="fas fa-phone mr-2"></i> Call Now
                        </a>
                    </div>
                </div>
            </header>

            {/* ===== HERO SECTION (with background image) ===== */}
            <section id="home" className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white">
                {/* Background Image - You can change this URL */}
                <div 
                    className="absolute inset-0 bg-cover bg-center opacity-20"
                    style={{ backgroundImage: 'url("https://images.pexels.com/photos/6188338/pexels-photo-6188338.jpeg")' }}
                ></div>
                
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">24/7 Emergency Vehicle Recovery Across the UK</h1>
                        <p className="text-xl mb-8">Fast, reliable, and professional breakdown & accident recovery service. We're here when you need us most.</p>
                        
                        <div className="flex flex-wrap gap-4">
                            <a href="#contact" className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition">
                                <i className="fas fa-calendar-check mr-2"></i> Request Callback
                            </a>
                            <a href="https://wa.me/447455310863" target="_blank" rel="noopener noreferrer" className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition">
                                <i className="fab fa-whatsapp mr-2"></i> WhatsApp Us
                            </a>
                        </div>
                        
                        <div className="mt-10 p-4 bg-white bg-opacity-10 rounded-lg inline-block">
                            <p className="text-2xl font-bold"><i className="fas fa-phone-volume mr-2"></i> Emergency Line: <a href="tel:+447455310863" className="underline">+44 7455 310863</a></p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== SERVICES SECTION ===== */}
            <section id="services" className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Professional Services</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">Comprehensive vehicle recovery and roadside assistance solutions for any situation.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service) => (
                            <div key={service.id} className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                                <div className="text-4xl mb-4">{service.icon}</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                                <p className="text-gray-700">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== "OUR APPROACH" SECTION (like the website you sent) ===== */}
            <section id="about" className="py-16 bg-gray-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Approach to Vehicle Recovery</h2>
                        
                        <div className="mb-8">
                            <p className="text-gray-700 text-lg mb-4">
                                We do everything we can to address non-mechanical breakdowns on-site, such as jumpstarts and tire changes. 
                                Our goal is to get you back on the road safely and quickly.
                            </p>
                            <p className="text-gray-700 text-lg mb-4">
                                You will be in safe and capable hands while our technician examines the issue and assesses what can be done, 
                                answering any questions or concerns you may have throughout the process.
                            </p>
                            <p className="text-gray-700 text-lg">
                                No two situations are the same, and over the years we have seen it all across the UK. 
                                We are as comfortable jumpstarting flat batteries on the hard shoulder of a motorway as we are 
                                towing a vehicle following a collision on a roundabout.
                            </p>
                        </div>
                        
                        {/* Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-gray-200">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-blue-700">24/7</div>
                                <div className="text-gray-600">Availability</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-blue-700">30min</div>
                                <div className="text-gray-600">Avg. Response</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-blue-700">UK Wide</div>
                                <div className="text-gray-600">Coverage</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-blue-700">5000+</div>
                                <div className="text-gray-600">Recoveries</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== CONTACT / CALLBACK FORM SECTION ===== */}
            <section id="contact" className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h2>
                            <p className="text-gray-700 mb-8">Contact us anytime for emergency assistance or general inquiries.</p>
                            
                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                                        <i className="fas fa-phone text-blue-700 text-xl"></i>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg">Emergency Phone</h3>
                                        <p className="text-gray-700"><a href="tel:+447455310863" className="text-blue-600 hover:underline">+44 7455 310863</a></p>
                                        <p className="text-sm text-gray-500">24/7 operational line</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start">
                                    <div className="bg-green-100 p-3 rounded-lg mr-4">
                                        <i className="fab fa-whatsapp text-green-700 text-xl"></i>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg">WhatsApp</h3>
                                        <p className="text-gray-700"><a href="https://wa.me/447455310863" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">+44 7455 310863</a></p>
                                        <p className="text-sm text-gray-500">Fast messaging for assistance</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start">
                                    <div className="bg-red-100 p-3 rounded-lg mr-4">
                                        <i className="fas fa-envelope text-red-700 text-xl"></i>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg">Email</h3>
                                        <p className="text-gray-700"><a href="mailto:jhafeez2005@gmail.com" className="text-red-600 hover:underline">jhafeez2005@gmail.com</a></p>
                                        <p className="text-sm text-gray-500">For non-urgent inquiries</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Callback Form */}
                        <div className="bg-gray-50 rounded-xl p-8 shadow">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Request a Callback</h3>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-gray-700 mb-2">Select Service Needed *</label>
                                    <select name="service" value={formData.service} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" required>
                                        <option value="Breakdown Recovery">Breakdown Recovery</option>
                                        <option value="Accident Recovery">Accident Recovery</option>
                                        <option value="Jump Start">Jump Start Service</option>
                                        <option value="Tyre Change">Tyre Change</option>
                                        <option value="Fuel Delivery">Fuel Delivery</option>
                                        <option value="Motorway Assistance">Motorway Assistance</option>
                                    </select>
                                </div>
                                
                                <div>
                                    <label className="block text-gray-700 mb-2">Your Full Name *</label>
                                    <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Enter your name" />
                                </div>
                                
                                <div>
                                    <label className="block text-gray-700 mb-2">Phone Number *</label>
                                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="+44 7455 310863" />
                                </div>
                                
                                <div>
                                    <label className="block text-gray-700 mb-2">Location / Postcode *</label>
                                    <input type="text" name="location" value={formData.location} onChange={handleChange} required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Where do you need assistance?" />
                                </div>
                                
                                <button type="submit" className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-4 rounded-lg text-lg transition flex items-center justify-center">
                                    <i className="fas fa-paper-plane mr-2"></i> Send Request Now
                                </button>
                                
                                <p className="text-gray-600 text-sm text-center mt-4">
                                    <i className="fas fa-shield-alt mr-1"></i> We respect your privacy. Your information is secure and only used to provide assistance.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== FOOTER ===== */}
            <footer className="bg-gray-900 text-white pt-12 pb-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <div className="flex items-center mb-4">
                                <div className="bg-blue-600 p-2 rounded-lg mr-3">
                                    <i className="fas fa-ambulance"></i>
                                </div>
                                <h2 className="text-xl font-bold">Emergency Recovery 24/7</h2>
                            </div>
                            <p className="text-gray-400">Professional vehicle recovery and roadside assistance service across the United Kingdom.</p>
                        </div>
                        
                        <div>
                            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#home" className="hover:text-white">Home</a></li>
                                <li><a href="#services" className="hover:text-white">Our Services</a></li>
                                <li><a href="#about" className="hover:text-white">Our Approach</a></li>
                                <li><a href="#contact" className="hover:text-white">Contact Us</a></li>
                            </ul>
                        </div>
                        
                        <div>
                            <h3 className="text-lg font-bold mb-4">Our Services</h3>
                            <ul className="space-y-2 text-gray-400">
                                <li>Breakdown Recovery</li>
                                <li>Accident Recovery</li>
                                <li>Jump Start Service</li>
                                <li>Tyre Change</li>
                            </ul>
                        </div>
                        
                        <div>
                            <h3 className="text-lg font-bold mb-4">Legal</h3>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                                <li><a href="#" className="hover:text-white">Cookie Policy</a></li>
                                <li><a href="#" className="hover:text-white">Disclaimer</a></li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
                        <p>© {new Date().getFullYear()} Emergency Recovery 24/7. All rights reserved. | Registered in England & Wales</p>
                        <p className="mt-2 text-sm">24/7 UK Wide Emergency Vehicle Recovery Service</p>
                    </div>
                </div>
            </footer>

            {/* Cookie Notice */}
            {showCookie && (
                <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50">
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
                        <div className="mb-3 md:mb-0">
                            <p className="flex items-center">
                                <i className="fas fa-cookie-bite mr-2"></i>
                                This website uses essential cookies for functionality. By continuing to use this site, you agree to our use of cookies.
                            </p>
                        </div>
                        <div className="flex space-x-4">
                            <button onClick={() => setShowCookie(false)} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">
                                I Understand
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EmergencyRecovery;
