import React from 'react';
import { ArrowRight, Code, Shield, Cloud, Brain } from 'lucide-react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import Typewriter from './Typewriter';
import Scene from './3d/Scene';

const Hero = () => {
    const floatingCards = [
        { icon: <Brain className="w-6 h-6 text-blue-400" />, label: "AI Powered", delay: 0, x: -20, y: -20 },
        { icon: <Shield className="w-6 h-6 text-cyan-400" />, label: "Secure", delay: 1, x: 20, y: 40 },
        { icon: <Cloud className="w-6 h-6 text-purple-400" />, label: "Scalable", delay: 2, x: -30, y: 60 },
    ];

    return (
        <section className="relative z-0 min-h-screen flex items-center pt-20 pb-16 lg:pb-0 overflow-hidden">
            <Scene />

            <div className="max-w-screen-2xl mx-auto px-6 lg:px-4 relative z-10 w-full">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* 3D Floating Visuals (First in DOM for mobile top placement) */}
                    <div className="relative h-[300px] md:h-[500px] lg:mt-0 perspective-1000 lg:order-2">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
                            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                            transition={{ duration: 1, ease: "out" }}
                            className="relative w-full h-full"
                        >
                            {/* Floating Cards */}
                            <div className="absolute inset-0 pointer-events-none">
                                {floatingCards.map((card, index) => (
                                    <motion.div
                                        key={index}
                                        className="absolute p-3 md:p-4 bg-white/40 dark:bg-slate-800/40 backdrop-blur-md rounded-2xl border border-white/30 dark:border-slate-700/30 shadow-xl flex items-center gap-2 md:gap-3 w-32 md:w-44 z-20"
                                        style={{
                                            top: index === 0 ? '35%' : index === 1 ? '55%' : '75%',
                                            left: index === 1 ? '50%' : '5%',
                                        }}
                                        animate={{
                                            y: [0, -15, 0],
                                            rotate: [0, 2, 0]
                                        }}
                                        transition={{
                                            duration: 4,
                                            delay: card.delay,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                    >
                                        <div className="p-1.5 md:p-2 bg-white/50 dark:bg-slate-700/50 rounded-lg">
                                            {React.cloneElement(card.icon, { className: "w-4 h-4 md:w-6 md:h-6" })}
                                        </div>
                                        <span className="font-semibold text-xs md:text-base text-slate-900 dark:text-white">{card.label}</span>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Code Snippet Decoration */}
                            <div className="absolute top-0 right-0 md:top-10 md:right-10 bg-white/40 dark:bg-slate-900/60 backdrop-blur-md p-3.5 md:p-5 rounded-lg border border-white/30 dark:border-slate-700 shadow-lg font-mono text-[11px] md:text-sm text-slate-700 dark:text-slate-300 transform rotate-3 z-10">
                                <div className="flex gap-1.5 mb-2 md:mb-3">
                                    <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-red-400"></div>
                                    <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-yellow-400"></div>
                                    <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-green-400"></div>
                                </div>
                                <div className="space-y-1">
                                    <p><span className="text-slate-400">// Your success, automated</span></p>
                                    <p><span className="text-purple-600 font-semibold">const</span> <span className="text-blue-600">growth</span> = <span className="text-amber-600">await</span> ai.optimize();</p>
                                    <p><span className="text-blue-600">revenue</span>.<span className="text-cyan-600">boost</span>(<span className="text-green-600">"+40%"</span>);</p>
                                    <p><span className="text-blue-600">costs</span>.<span className="text-cyan-600">reduce</span>(<span className="text-green-600">"-60%"</span>);</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Text Content */}
                    <div className="max-w-3xl relative lg:order-1">
                        <AnimatedSection>
                            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 text-blue-600 dark:text-blue-400 mb-6 backdrop-blur-md text-sm font-medium shadow-sm">
                                <span className="w-2 h-2 rounded-full bg-blue-500 mr-2 animate-pulse"></span>
                                Your Success, Powered by AI
                            </div>

                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-slate-900 dark:text-white tracking-tight">
                                Unlock Your <br />
                                <span className="text-blue-600">
                                    <Typewriter words={["Business Potential", "Competitive Edge", "Growth Strategy", "Digital Future"]} />
                                </span>
                            </h1>
                        </AnimatedSection>

                        <AnimatedSection delay={0.2}>
                            <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed max-w-lg font-medium">
                                Save time, reduce costs, and accelerate growth with smart technology solutions designed around your unique business needs.
                            </p>
                        </AnimatedSection>

                        <AnimatedSection delay={0.4}>
                            <div className="flex flex-row gap-3 md:gap-4">
                                <a href="#contact" className="group flex-1 sm:flex-none px-4 py-3 md:px-8 md:py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold flex items-center justify-center shadow-lg shadow-blue-600/20 transition-all duration-300 text-sm md:text-base">
                                    Get Your Free Consultation
                                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                </a>
                                <a href="#services" className="flex-1 sm:flex-none px-4 py-3 md:px-8 md:py-4 rounded-xl font-bold text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300 text-center text-sm md:text-base">
                                    See How We Help
                                </a>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection delay={0.6}>
                            <div className="flex flex-wrap gap-6 md:gap-10 mt-10 pt-8 border-t border-slate-200 dark:border-slate-800">
                                <div className="text-center">
                                    <div className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400">50+</div>
                                    <div className="text-xs md:text-sm text-slate-500 dark:text-slate-400 font-medium">Projects Delivered</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400">98%</div>
                                    <div className="text-xs md:text-sm text-slate-500 dark:text-slate-400 font-medium">Client Satisfaction</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400">24/7</div>
                                    <div className="text-xs md:text-sm text-slate-500 dark:text-slate-400 font-medium">Support Available</div>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
