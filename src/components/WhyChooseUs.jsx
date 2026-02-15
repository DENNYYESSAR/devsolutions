import React from 'react';
import { Check, Shield, Users, Zap, Globe, Cpu } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const WhyChooseUs = () => {
    const whyChooseUs = [
        { icon: <Cpu className="w-6 h-6" />, title: "Proven Track Record", desc: "Our portfolio of successful projects speaks for itself. We deliver measurable results that drive real business growth for organizations across industries." },
        { icon: <Globe className="w-6 h-6" />, title: "End-to-End Solutions", desc: "From initial concept through development, deployment, and ongoing support, we serve as your single technology partner for the entire project lifecycle." },
        { icon: <Users className="w-6 h-6" />, title: "Data-Driven Strategy", desc: "We empower your decision-making with AI-powered analytics and actionable insights that turn your data into a measurable competitive advantage." },
        { icon: <Zap className="w-6 h-6" />, title: "Built to Scale", desc: "Our architectures are designed for growth. Whether you're handling 100 or 100,000 users, our solutions scale seamlessly to meet demand." },
        { icon: <Shield className="w-6 h-6" />, title: "Enterprise-Grade Security", desc: "We implement multi-layered security protocols, encryption standards, and compliance frameworks to safeguard your data at every level." },
        { icon: <Check className="w-6 h-6" />, title: "Transparent Delivery", desc: "We operate with full transparency on timelines, costs, and progress. You receive regular updates and clear communication at every milestone." }
    ];

    return (
        <section id="why-us" className="py-24 px-6 md:px-12 lg:px-48 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
            <div className="w-full mx-auto">
                <AnimatedSection>
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Why Partner With Us</h2>
                        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                            We combine technical expertise with a client-first approach to deliver solutions that consistently exceed expectations.
                        </p>
                    </div>
                </AnimatedSection>

                <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                    {whyChooseUs.map((item, index) => (
                        <AnimatedSection key={index} delay={index * 0.1}>
                            <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-3xl border border-slate-100 dark:border-slate-700 hover:border-cyan-200 dark:hover:border-cyan-700 transition-all duration-300 h-full relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-1 h-0 bg-cyan-600 group-hover:h-full transition-all duration-500"></div>

                                <div className="w-12 h-12 bg-cyan-50 dark:bg-cyan-900/20 rounded-xl flex items-center justify-center text-cyan-600 dark:text-cyan-400 mb-6 group-hover:bg-cyan-600 group-hover:text-white transition-colors duration-300">
                                    {item.icon}
                                </div>

                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">{item.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>


            </div>
        </section>
    );
};

export default WhyChooseUs;
