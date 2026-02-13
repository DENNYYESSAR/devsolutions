import React from 'react';
import { Code, Database, Cloud, Shield, LineChart, Cog, Check, ArrowUpRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import serviceWebDev from '../assets/service_web_dev.png';
import serviceDatabase from '../assets/service_database.png';
import serviceCloud from '../assets/service_cloud.png';
import serviceSecurity from '../assets/service_security.png';
import serviceAiMl from '../assets/service_ai_ml.jpg';
import serviceApi from '../assets/service_api.svg';

const Services = () => {
    const services = [
        {
            icon: <Code className="w-8 h-8" />,
            title: "Full-Stack Web Development",
            description: "We deliver high-performance web applications with responsive design, optimized load times, and conversion-focused architecture. From single-page apps to complex platforms, we build solutions that scale.",
            features: ["Responsive Design", "Optimized Performance", "Conversion-Focused"],
            image: serviceWebDev
        },
        {
            icon: <Database className="w-8 h-8" />,
            title: "Database Solutions",
            description: "We design and implement robust database architectures that ensure data integrity, high availability, and optimal query performance across your entire infrastructure.",
            features: ["High Availability", "Optimized Queries", "Data Integrity"],
            image: serviceDatabase
        },
        {
            icon: <Cloud className="w-8 h-8" />,
            title: "Cloud & DevOps",
            description: "We architect scalable cloud infrastructure with automated CI/CD pipelines, container orchestration, and cost-optimized resource management tailored to your workload.",
            features: ["Cost Optimization", "Auto-Scaling", "99.9% Uptime"],
            image: serviceCloud
        },
        {
            icon: <Shield className="w-8 h-8" />,
            title: "Cybersecurity & Pentesting",
            description: "We provide comprehensive security assessments, vulnerability analysis, and penetration testing to identify and mitigate risks before they impact your organization.",
            features: ["Vulnerability Assessment", "Threat Mitigation", "Compliance Assurance"],
            image: serviceSecurity
        },
        {
            icon: <LineChart className="w-8 h-8" />,
            title: "AI/ML Solutions",
            description: "We develop intelligent systems that transform raw data into strategic insights, enabling predictive analytics, process automation, and data-driven decision making.",
            features: ["Predictive Analytics", "Process Automation", "Strategic Insights"],
            image: serviceAiMl
        },
        {
            icon: <Cog className="w-8 h-8" />,
            title: "API Development & Automation",
            description: "We design and build robust APIs and workflow automation systems that connect your tools, eliminate manual processes, and enable seamless data flow across your organization.",
            features: ["Workflow Automation", "Error Reduction", "System Integration"],
            image: serviceApi
        }
    ];

    return (
        <section id="services" className="py-24 px-6 md:px-12 lg:px-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
            <div className="max-w-screen-2xl mx-auto">
                <AnimatedSection>
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">How We Help You Succeed</h2>
                        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            Real solutions that deliver real results—save time, cut costs, and grow your business with technology that works for you.
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
                                        loading="lazy"
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
