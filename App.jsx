import React, { useState } from 'react';

const EmergencyRecovery = () => {
    const [showCookie, setShowCookie] = useState(true);
    const [formData, setFormData] = useState({ 
        name: '', 
        phone: '', 
        location: '' 
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
            const whatsappMessage = `New Callback Request:%0A%0AName: ${formData.name}%0APhone: ${formData.phone}%0ALocation: ${formData.location}`;
            window.open(`https://wa.me/447455310863?text=${whatsappMessage}`, '_blank');
            
            // Email Notification (using mailto as fallback)
            const emailSubject = 'New Callback Request - Emergency Recovery';
            const emailBody = `Name: ${formData.name}%0APhone: ${formData.phone}%0ALocation: ${formData.location}`;
            window.open(`mailto:jhafeez2005@gmail.com?subject=${emailSubject}&body=${emailBody}`);
            
            alert('Callback request sent! Our team will contact you within 10 minutes.');
            setFormData({ name: '', phone: '', location: '' });
            
        } catch (err) {
            console.error(err);
            alert('Request submitted! We will contact you shortly.');
        }
    };

    return (
        <div className="min-h-screen">
            {/* Header */}
            <header className="bg-gradient-to-r from-blue-900 to-blue-700 text-white p-6 shadow-lg">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-3xl md:text-4xl font-bold">
                        <i className="fas fa-ambulance mr-3"></i>
                        UK Emergency Vehicle Recovery
                    </h1>
                    <p className="mt-2 text-lg">24/7 Fast & Reliable Breakdown Assistance</p>
                    <div className="mt-4 flex flex-wrap gap-4">
                        <a href="tel:+447455310863" className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg flex items-center transition">
                            <i className="fas fa-phone mr-2"></i> Call Now: +44 7455 310863
                        </a>
                        <a href="https://wa.me/447455310863" target="_blank" rel="noopener noreferrer" className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg flex items-center transition">
                            <i className="fab fa-whatsapp mr-2"></i> WhatsApp Us
                        </a>
                    </div>
                </div>
            </header>

            <main className="max-w-6xl mx-auto p-4 md:p-6">
                {/* Emergency Alert */}
                <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
                    <div className="flex items-center">
                        <i className="fas fa-exclamation-triangle text-red-500 text-2xl mr-3"></i>
                        <div>
                            <h3 className="font-bold text-lg">Immediate Assistance Required?</h3>
                            <p>If your vehicle has broken down or you need emergency roadside recovery, call us now for immediate help.</p>
                        </div>
                    </div>
                </div>

                {/* Services */}
                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">
                        <i className="fas fa-tools mr-2"></i>Our Services
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {['Emergency Breakdown Recovery', 'Accident Recovery', 'Motorway Assistance', 'Flat Tyre & Jump Start', 'Vehicle Transport', 'Fuel Delivery'].map((service, idx) => (
                            <div key={idx} className="bg-white p-4 rounded-lg shadow hover:shadow-md transition">
                                <i className="fas fa-check-circle text-green-500 mr-2"></i>
                                {service}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Callback Form */}
                <section className="bg-white rounded-xl shadow-lg p-6 mb-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">
                        <i className="fas fa-phone-volume mr-2"></i>Request a Callback
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-gray-700 mb-2">Your Name *</label>
                            <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Enter your full name" />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-2">Phone Number *</label>
                            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="+44 7455 310863" />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-2">Breakdown Location *</label>
                            <input type="text" name="location" value={formData.location} onChange={handleChange} required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Where are you located?" />
                        </div>
                        <button type="submit" className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-4 rounded-lg text-lg transition flex items-center justify-center">
                            <i className="fas fa-paper-plane mr-2"></i> Submit Callback Request
                        </button>
                    </form>
                    <p className="text-gray-600 text-sm mt-4">
                        <i className="fas fa-shield-alt mr-1"></i> Your information is secure. We'll contact you within 10-15 minutes.
                    </p>
                </section>

                {/* Privacy & Disclaimer */}
                <section className="bg-gray-100 rounded-xl p-6 mb-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                        <i className="fas fa-file-contract mr-2"></i>Privacy Policy & Disclaimer
                    </h2>
                    <div className="space-y-4 text-gray-700">
                        <p><strong>Privacy Policy:</strong> We are committed to protecting your personal data. Information you provide is used solely to deliver emergency vehicle recovery services. We do not sell or share your information with third parties.</p>
                        <p><strong>Data Protection:</strong> We comply with UK GDPR regulations. You may request data deletion by emailing jhafeez2005@gmail.com.</p>
                        <p><strong>Disclaimer:</strong> Response times may vary based on location and traffic conditions. Our 24/7 service covers most UK areas.</p>
                        <p><strong>Cookies:</strong> We use only essential cookies for website functionality. No tracking cookies are used.</p>
                    </div>
                </section>

                {/* Contact Info */}
                <section className="bg-gradient-to-r from-blue-800 to-blue-900 text-white rounded-xl p-6">
                    <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="font-bold text-lg mb-2"><i className="fas fa-phone mr-2"></i>Phone</h3>
                            <p className="text-xl">+44 7455 310863</p>
                            <p className="text-sm opacity-90">24/7 Emergency Line</p>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg mb-2"><i className="fas fa-envelope mr-2"></i>Email</h3>
                            <p>jhafeez2005@gmail.com</p>
                            <p className="text-sm opacity-90">For non-urgent inquiries</p>
                        </div>
                    </div>
                </section>
            </main>

            {/* Cookie Notice */}
            {showCookie && (
                <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50">
                    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
                        <div className="mb-3 md:mb-0">
                            <p className="flex items-center">
                                <i className="fas fa-cookie-bite mr-2"></i>
                                This website uses essential cookies for functionality. No tracking is used.
                            </p>
                        </div>
                        <button onClick={() => setShowCookie(false)} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">
                            I Understand
                        </button>
                    </div>
                </div>
            )}

            {/* Footer */}
            <footer className="bg-gray-800 text-gray-300 p-6">
                <div className="max-w-6xl mx-auto text-center">
                    <p className="mb-2">© {new Date().getFullYear()} UK Emergency Vehicle Recovery. All rights reserved.</p>
                    <p className="text-sm">Registered in England & Wales | 24/7 Breakdown Assistance</p>
                </div>
            </footer>
        </div>
    );
};

export default EmergencyRecovery;
