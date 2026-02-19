import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Code, Database, Cloud, Shield, LineChart, Cog, Check, ArrowUpRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import serviceWebDev from '../assets/service_web_dev.png';
import serviceDatabase from '../assets/service_database.png';
import serviceCloud from '../assets/service_cloud.png';
import serviceSecurity from '../assets/service_security.png';
import serviceAiMl from '../assets/service_ai_ml.jpg';
import serviceApi from '../assets/service_api.svg';

const Tilt3DCard = ({ children }) => {
    const cardRef = useRef(null);
    const [transform, setTransform] = useState('');
    const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

    const handleMouseMove = (e) => {
        const card = cardRef.current;
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -12;
        const rotateY = ((x - centerX) / centerX) * 12;

        setTransform(`perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);
        setGlare({ x: (x / rect.width) * 100, y: (y / rect.height) * 100, opacity: 0.15 });
    };

    const handleMouseLeave = () => {
        setTransform('perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
        setGlare({ x: 50, y: 50, opacity: 0 });
    };

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ transform, transition: 'transform 0.15s ease-out', transformStyle: 'preserve-3d', willChange: 'transform' }}
            className="h-full"
        >
            <div className="relative h-full">
                {children}
                {/* Spotlight glare overlay */}
                <div
                    className="pointer-events-none absolute inset-0 rounded-2xl z-30"
                    style={{
                        background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,${glare.opacity}) 0%, transparent 60%)`,
                        transition: 'opacity 0.15s ease-out',
                    }}
                />
            </div>
        </div>
    );
};

const Services = () => {
    const services = [
        {
            icon: <Code className="w-8 h-8" />,
            title: "Full-Stack Web Development",
            slug: "web-development",
            description: "High-performance web applications with responsive design, optimized load times, and conversion-focused architecture. From single-page apps to complex platforms, every solution is built to scale.",
            features: ["Responsive Design", "Optimized Performance", "Conversion-Focused"],
            image: serviceWebDev
        },
        {
            icon: <Database className="w-8 h-8" />,
            title: "Database Solutions",
            slug: "database-solutions",
            description: "Robust database architectures designed to ensure data integrity, high availability, and optimal query performance across your entire infrastructure.",
            features: ["High Availability", "Optimized Queries", "Data Integrity"],
            image: serviceDatabase
        },
        {
            icon: <Cloud className="w-8 h-8" />,
            title: "Cloud & DevOps",
            slug: "cloud-devops",
            description: "Scalable cloud infrastructure with automated CI/CD pipelines, container orchestration, and cost-optimized resource management tailored to your workload.",
            features: ["Cost Optimization", "Auto-Scaling", "99.9% Uptime"],
            image: serviceCloud
        },
        {
            icon: <Shield className="w-8 h-8" />,
            title: "Cybersecurity & Pentesting",
            slug: "cybersecurity",
            description: "Comprehensive security assessments, vulnerability analysis, and penetration testing to identify and mitigate risks before they impact your organization.",
            features: ["Vulnerability Assessment", "Threat Mitigation", "Compliance Assurance"],
            image: serviceSecurity
        },
        {
            icon: <LineChart className="w-8 h-8" />,
            title: "AI/ML Solutions",
            slug: "ai-ml-solutions",
            description: "Intelligent systems that transform raw data into strategic insights, enabling predictive analytics, process automation, and data-driven decision making.",
            features: ["Predictive Analytics", "Process Automation", "Strategic Insights"],
            image: serviceAiMl
        },
        {
            icon: <Cog className="w-8 h-8" />,
            title: "API Development & Automation",
            slug: "api-development",
            description: "Robust APIs and workflow automation systems that connect your tools, eliminate manual processes, and enable seamless data flow across your organization.",
            features: ["Workflow Automation", "Error Reduction", "System Integration"],
            image: serviceApi
        }
    ];

    return (
        <section id="services" className="py-24 px-6 md:px-12 lg:px-48 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
            <div className="w-full mx-auto">
                <AnimatedSection>
                    <div className="text-center mb-20">
                        <h2 className="font-heading text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">Our Expertise</h2>
                        <p className="font-body text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            Real solutions that drive actual results, helping you save time, reduce costs, and grow your business with technology tailored to your needs.
                        </p>
                    </div>
                </AnimatedSection>

                <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <AnimatedSection key={index} delay={index * 0.1}>
                            <Link to={`/services/${service.slug}`} className="block h-full">
                            <Tilt3DCard>
                            <div className="group h-full bg-white dark:bg-slate-800 rounded-2xl shadow-sm hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 border border-slate-100 dark:border-slate-700 hover:border-cyan-200 dark:hover:border-cyan-900 relative overflow-hidden flex flex-col cursor-pointer">
                                <div className="h-48 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        loading="lazy"
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute bottom-4 left-6 w-12 h-12 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-xl flex items-center justify-center text-blue-600 shadow-lg z-20" style={{ transform: 'translateZ(30px)' }}>
                                        {service.icon}
                                    </div>
                                </div>

                                <div className="p-8 pt-6 flex-1 flex flex-col">
                                    <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center justify-between" style={{ transform: 'translateZ(20px)' }}>
                                        {service.title}
                                        <ArrowUpRight className="w-5 h-5 text-slate-300 group-hover:text-blue-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all opacity-0 group-hover:opacity-100" />
                                    </h3>
                                    <p className="font-body text-slate-600 dark:text-slate-400 mb-8 leading-relaxed flex-1">{service.description}</p>

                                    <ul className="space-y-3 pt-6 border-t border-slate-50 dark:border-slate-700">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center text-sm font-medium font-body text-slate-600 dark:text-slate-400">
                                                <div className="w-6 h-6 rounded-full bg-cyan-50 dark:bg-cyan-900/20 flex items-center justify-center mr-3 flex-shrink-0">
                                                    <Check className="w-3.5 h-3.5 text-cyan-600" />
                                                </div>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="mt-6 pt-4 border-t border-slate-50 dark:border-slate-700">
                                        <span className="font-display text-sm font-bold text-cyan-600 dark:text-cyan-400 group-hover:underline inline-flex items-center gap-1">
                                            Learn More <ArrowUpRight className="w-3.5 h-3.5" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                            </Tilt3DCard>
                            </Link>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
