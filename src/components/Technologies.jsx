import React from 'react';
import { ChevronRight, Database, Globe, Lock, Server, Layers } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Technologies = () => {
    const technologies = [
        { category: "Frontend", icon: <Globe className="w-5 h-5" />, items: ["React", "Next.js", "Vue.js", "TypeScript"] },
        { category: "Backend", icon: <Server className="w-5 h-5" />, items: ["Node.js", "Python", "Flask", "Express"] },
        { category: "Database", icon: <Database className="w-5 h-5" />, items: ["PostgreSQL", "MongoDB", "MySQL"] },
        { category: "Cloud", icon: <Layers className="w-5 h-5" />, items: ["AWS", "GCP", "Docker", "Kubernetes"] },
        { category: "Security", icon: <Lock className="w-5 h-5" />, items: ["Metasploit", "Burp Suite", "Nmap", "Wireshark"] }
    ];

    return (
        <section id="technologies" className="py-24 px-6 lg:px-4 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 transition-colors duration-300">
            <div className="max-w-screen-2xl mx-auto">
                <AnimatedSection>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">Technology Stack</h2>
                        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            Leveraging modern technologies to build robust, scalable solutions
                        </p>
                    </div>
                </AnimatedSection>

                <div className="relative overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white dark:from-slate-900 to-transparent z-10"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white dark:from-slate-900 to-transparent z-10"></div>

                    <div className="flex animate-marquee hover:[animation-play-state:paused] w-max">
                        {[...technologies, ...technologies, ...technologies].map((tech, index) => (
                            <div key={index} className="px-4 flex-shrink-0 w-[300px] md:w-[350px]">
                                <div className="bg-slate-50 dark:bg-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-slate-200 dark:border-slate-700 hover:border-blue-500/50 hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 group h-full shadow-sm hover:shadow-xl">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="p-3 rounded-2xl bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                                            {tech.icon}
                                        </div>
                                        <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">{tech.category}</h3>
                                    </div>
                                    <ul className="space-y-4">
                                        {tech.items.map((item, idx) => (
                                            <li key={idx} className="flex items-center text-slate-600 dark:text-slate-300 font-medium group-hover:text-slate-900 dark:group-hover:text-slate-100 transition-colors">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-3 opacity-50 group-hover:opacity-100"></div>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Technologies;
