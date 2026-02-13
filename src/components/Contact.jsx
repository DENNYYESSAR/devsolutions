import React, { useState } from 'react';
import { Mail, Phone, MapPin, Check, Send, Loader2 } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const WEB3FORMS_ACCESS_KEY = '4d6d9166-e75f-4f71-99a4-0381af232341';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' });
    const [formStatus, setFormStatus] = useState(''); // '', 'sending', 'success', 'error'

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormStatus('sending');

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    access_key: WEB3FORMS_ACCESS_KEY,
                    subject: `New Contact Form Submission from ${formData.name}`,
                    from_name: formData.name,
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    service: formData.service,
                    message: formData.message,
                }),
            });

            const result = await response.json();

            if (result.success) {
                setFormStatus('success');
                setTimeout(() => {
                    setFormStatus('');
                    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
                }, 3000);
            } else {
                setFormStatus('error');
                setTimeout(() => setFormStatus(''), 4000);
            }
        } catch (error) {
            console.error('Form submission error:', error);
            setFormStatus('error');
            setTimeout(() => setFormStatus(''), 4000);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" className="py-24 px-2 lg:px-1 bg-slate-50 dark:bg-slate-900 relative overflow-hidden transition-colors duration-300">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/50 dark:bg-blue-900/10 skew-x-12 transform translate-x-1/4"></div>

            <div className="max-w-screen-2xl mx-auto relative z-10">
                <AnimatedSection>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Get in Touch</h2>
                        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400">Share your project requirements and our team will respond with a tailored solution within 24 hours</p>
                    </div>
                </AnimatedSection>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
                    <AnimatedSection delay={0.2} className="w-full">
                        <div className="bg-white dark:bg-slate-800 p-8 md:p-10 rounded-3xl shadow-lg border border-slate-100 dark:border-slate-700">
                            <h3 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white">Request a Consultation</h3>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Your Name"
                                            required
                                            className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900 outline-none transition-all dark:text-white"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Your Email"
                                            required
                                            className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900 outline-none transition-all dark:text-white"
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Phone</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="Phone Number"
                                            className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900 outline-none transition-all dark:text-white"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Service Interest</label>
                                        <select
                                            name="service"
                                            value={formData.service}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900 outline-none transition-all dark:text-white"
                                        >
                                            <option value="">Select a Service</option>
                                            <option value="web">Web Development</option>
                                            <option value="database">Database Solutions</option>
                                            <option value="cloud">Cloud & DevOps</option>
                                            <option value="security">Cybersecurity</option>
                                            <option value="ai">AI & Machine Learning</option>
                                            <option value="api">API Development</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell us about your project..."
                                        rows="4"
                                        required
                                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900 outline-none transition-all resize-none dark:text-white"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    disabled={formStatus === 'sending'}
                                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                                >
                                    {formStatus === 'sending' ? (
                                        <>
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-5 h-5" />
                                            Send Message
                                        </>
                                    )}
                                </button>
                                {formStatus === 'success' && (
                                    <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-4 rounded-xl flex items-center gap-3 animate-fade-in">
                                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                                            <Check className="w-4 h-4 text-green-600" />
                                        </div>
                                        Your message has been received. Our team will respond within 24 hours.
                                    </div>
                                )}
                                {formStatus === 'error' && (
                                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-4 rounded-xl flex items-center gap-3 animate-fade-in">
                                        <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                                            <Mail className="w-4 h-4 text-red-600" />
                                        </div>
                                        We encountered an issue processing your request. Please try again or contact us directly via email.
                                    </div>
                                )}
                            </form>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection delay={0.4} className="flex flex-col gap-6">
                        <div className="bg-white dark:bg-slate-800 p-8 md:p-10 rounded-3xl shadow-lg border border-slate-100 dark:border-slate-700">
                            <h3 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white">Contact Information</h3>
                            <div className="space-y-8">
                                <div className="flex items-start space-x-6">
                                    <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center text-blue-600 dark:text-blue-400 flex-shrink-0">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Our Location</h4>
                                        <p className="text-slate-600 dark:text-slate-400">Nairobi, Kenya</p>
                                        <p className="text-slate-400 text-sm mt-1">Serving Clients Globally</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-6">
                                    <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center text-blue-600 dark:text-blue-400 flex-shrink-0">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Phone Number</h4>
                                        <p className="text-slate-600 dark:text-slate-400">+254 703 627-369</p>
                                        <p className="text-slate-400 text-sm mt-1">24/7 Availability</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-6">
                                    <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center text-blue-600 dark:text-blue-400 flex-shrink-0">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Email Address</h4>
                                        <p className="text-slate-600 dark:text-slate-400">info@dev-solutions.software</p>
                                        <p className="text-slate-400 text-sm mt-1">24/7 Support for Clients</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-blue-600 to-cyan-500 p-8 rounded-3xl text-white shadow-xl shadow-blue-500/20 relative overflow-hidden flex-1 flex flex-col justify-center">
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold mb-4">Let's Build Something Great</h3>
                                <p className="mb-6 opacity-90 text-sm leading-relaxed">Receive expert guidance tailored to your specific business objectives, at no cost.</p>
                                <div className="space-y-2">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                                            <Check className="w-3 h-3" />
                                        </div>
                                        <span className="text-sm">Complimentary consultation</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                                            <Check className="w-3 h-3" />
                                        </div>
                                        <span className="text-sm">Comprehensive proposal</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                                            <Check className="w-3 h-3" />
                                        </div>
                                        <span className="text-sm">Transparent pricing</span>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -bottom-24 -right-24 w-56 h-56 bg-white/10 rounded-full blur-3xl"></div>
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
};

export default Contact;
