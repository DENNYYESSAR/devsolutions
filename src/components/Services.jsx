import React from 'react';
import { Code, Database, Cloud, Shield, LineChart, Cog, Check, ArrowUpRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import serviceWebDev from '../assets/service_web_dev.png';
import serviceDatabase from '../assets/service_database.png';
import serviceCloud from '../assets/service_cloud.png';
import serviceSecurity from '../assets/service_security.png';
import serviceAiMl from '../assets/service_ai_ml.jpg';

const Services = () => {
    const services = [
        {
            icon: <Code className="w-8 h-8" />,
            title: "Full-Stack Web Development",
            description: "Custom web applications built with React, Next.js, Vue.js, and TypeScript. Scalable backend solutions using Node.js and Python/Flask.",
            features: ["Responsive Design", "Modern Frameworks", "Performance Optimized"],
            image: serviceWebDev
        },
        {
            icon: <Database className="w-8 h-8" />,
            title: "Database Solutions",
            description: "Expert database architecture and management with PostgreSQL, MySQL, and MongoDB. Optimized for performance and scalability.",
            features: ["Data Modeling", "Query Optimization", "Migration Services"],
            image: serviceDatabase
        },
        {
            icon: <Cloud className="w-8 h-8" />,
            title: "Cloud & DevOps",
            description: "Complete cloud infrastructure deployment on AWS, GCP, and Oracle Cloud. Docker containerization and CI/CD pipeline implementation.",
            features: ["Cloud Migration", "Automated Deployments", "Infrastructure as Code"],
            image: serviceCloud
        },
        {
            icon: <Shield className="w-8 h-8" />,
            title: "Cybersecurity & Pentesting",
            description: "Comprehensive security assessments and vulnerability testing. Protect your applications with industry-standard security practices.",
            features: ["Vulnerability Scanning", "Security Audits", "Compliance Testing"],
            image: serviceSecurity
        },
        {
            icon: <LineChart className="w-8 h-8" />,
            title: "AI/ML Solutions",
            description: "Advanced Artificial Intelligence and Machine Learning solutions. Predictive analytics, NLP models, and intelligent process automation.",
            features: ["Predictive Analytics", "NLP Integration", "Smart Automation"],
            image: serviceAiMl
        },
        {
            icon: <Cog className="w-8 h-8" />,
            title: "API Development & Automation",
            description: "RESTful and GraphQL API design with comprehensive documentation. Custom automation scripts to streamline your workflows.",
            features: ["API Design", "Integration Services", "Process Automation"],
            image: serviceWebDev // Reusing web dev image as fallback
        }
    ];

    return (
        <section id="services" className="py-24 px-6 lg:px-4 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
            <div className="max-w-screen-2xl mx-auto">
                <AnimatedSection>
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">Our Services</h2>
                        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            Comprehensive software development services tailored to your business needs, delivered with precision and excellence.
                        </p>
                    </div>
                </AnimatedSection>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <AnimatedSection key={index} delay={index * 0.1}>
                            <div className="group h-full bg-white dark:bg-slate-800 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-700 hover:border-blue-100 dark:hover:border-blue-900 relative overflow-hidden flex flex-col">
                                <div className="h-48 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute bottom-4 left-6 w-12 h-12 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-xl flex items-center justify-center text-blue-600 shadow-lg z-20">
                                        {service.icon}
                                    </div>
                                </div>

                                <div className="p-8 pt-6 flex-1 flex flex-col">
                                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center justify-between">
                                        {service.title}
                                        <ArrowUpRight className="w-5 h-5 text-slate-300 group-hover:text-blue-500 transition-colors opacity-0 group-hover:opacity-100" />
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed flex-1">{service.description}</p>

                                    <ul className="space-y-3 pt-6 border-t border-slate-50 dark:border-slate-700">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center text-sm font-medium text-slate-600 dark:text-slate-400">
                                                <div className="w-6 h-6 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center mr-3 flex-shrink-0">
                                                    <Check className="w-3.5 h-3.5 text-blue-600" />
                                                </div>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
