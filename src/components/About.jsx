import React from 'react';
import { Check, Shield, Users, Zap, Globe, Cpu } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const About = () => {
    const whyChooseUs = [
        { icon: <Cpu className="w-6 h-6" />, title: "Results You Can Trust", desc: "Join hundreds of businesses who've achieved measurable growth with our proven solutions. Your success is our track record." },
        { icon: <Globe className="w-6 h-6" />, title: "One Partner, Complete Solutions", desc: "Stop juggling multiple vendors. Get everything you need—from idea to launch to ongoing support—from a single trusted team." },
        { icon: <Users className="w-6 h-6" />, title: "Smarter Decisions, Faster Growth", desc: "Make confident business decisions backed by AI-powered insights. Turn your data into your greatest competitive advantage." },
        { icon: <Zap className="w-6 h-6" />, title: "Grow Without Limits", desc: "Your success shouldn't be limited by technology. Our solutions grow with you, handling any spike in demand effortlessly." },
        { icon: <Shield className="w-6 h-6" />, title: "Your Data, Always Protected", desc: "Rest easy knowing your customers' data and your business are protected by enterprise-grade security at every level." },
        { icon: <Check className="w-6 h-6" />, title: "On Time, On Budget, Every Time", desc: "No surprises, no hidden costs. Get transparent communication and reliable delivery that respects your timeline and budget." }
    ];

    return (
        <section id="about" className="py-24 px-6 lg:px-4 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
                <AnimatedSection>
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">What You Get Working With Us</h2>
                        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            Experience the difference when technology works for you, not against you. Here's what our clients love most.
                        </p>
                    </div>
                </AnimatedSection>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {whyChooseUs.map((item, index) => (
                        <AnimatedSection key={index} delay={index * 0.1}>
                            <div className="group bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl hover:border-blue-200 dark:hover:border-blue-700 transition-all duration-300 relative overflow-hidden h-full">
                                <div className="absolute top-0 left-0 w-1 h-0 bg-gradient-to-b from-blue-500 to-cyan-400 group-hover:h-full transition-all duration-500"></div>

                                <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                    {item.icon}
                                </div>

                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">{item.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>


            </div>
        </section>
    );
};

export default About;
