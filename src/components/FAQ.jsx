import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "How much does a typical project cost?",
            answer: "Every project is unique, and tailored quotes are provided based on your specific requirements. Our pricing is fully transparent with no hidden fees. Schedule a consultation and receive a detailed proposal within 48 hours."
        },
        {
            question: "How long does it take to build a website or app?",
            answer: "Delivery timelines are determined by project scope and complexity. A standard business website typically requires 2 to 4 weeks, while a full-stack application may take 6 to 12 weeks. Clear milestones are established upfront with consistent on-schedule delivery."
        },
        {
            question: "Do you offer ongoing support after launch?",
            answer: "Yes. Dedicated 24/7 support is available for all clients. Our maintenance packages include issue resolution, security patches, performance monitoring, and feature enhancements to ensure your product operates at peak performance."
        },
        {
            question: "What technologies do you specialize in?",
            answer: "Our team specializes in industry-leading technologies including React, Next.js, Node.js, Python, PostgreSQL, MongoDB, AWS, GCP, Docker, and Kubernetes. The optimal technology stack is selected for each project based on your specific requirements and long-term objectives."
        },
        {
            question: "Can you work with our existing systems?",
            answer: "Absolutely. System integration is a core specialty, covering your existing infrastructure, databases, and third-party services. Whether migrating legacy systems or extending current capabilities, a seamless transition with zero downtime is guaranteed."
        },
        {
            question: "How do you handle data security?",
            answer: "Security is integral to our development process. Industry best practices are followed, including AES-256 encryption at rest and TLS in transit, regular security audits, penetration testing, and full compliance with data protection regulations. Your data and your clients' data remain protected at all times."
        },
        {
            question: "What if I'm not satisfied with the work?",
            answer: "Client satisfaction is central to our process. Agile sprints with regular progress reviews ensure full visibility and continuous feedback. If any deliverable does not meet your standards, it gets refined until it does."
        },
        {
            question: "Do you work with startups or only established businesses?",
            answer: "Our team partners with organizations of all sizes, from early-stage startups to established enterprises. For startups, flexible engagement models and rapid MVP development help validate your concept and position you for investment."
        }
    ];

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-32 lg:py-40 px-2 bg-white dark:bg-slate-950 transition-colors duration-300">
            <div className="max-w-5xl mx-auto">
                <AnimatedSection>
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 text-blue-600 dark:text-blue-400 mb-4 text-sm font-medium">
                            <HelpCircle className="w-4 h-4 mr-2" />
                            Got Questions?
                        </div>
                        <h2 className="font-heading text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Frequently Asked Questions</h2>
                        <p className="font-body text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                            Everything you need to know before getting started
                        </p>
                    </div>
                </AnimatedSection>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <AnimatedSection key={index} delay={index * 0.05}>
                            <div
                                className={`bg-slate-50 dark:bg-slate-900 rounded-2xl border transition-all duration-300 ${
                                    openIndex === index
                                        ? 'border-blue-200 dark:border-blue-800 shadow-lg shadow-blue-500/5'
                                        : 'border-slate-100 dark:border-slate-800 hover:border-blue-100 dark:hover:border-slate-700'
                                }`}
                            >
                                <button
                                    onClick={() => toggle(index)}
                                    className="w-full flex items-center justify-between p-6 text-left gap-4"
                                >
                                    <span className={`font-display text-lg font-semibold transition-colors ${
                                        openIndex === index
                                            ? 'text-blue-600 dark:text-blue-400'
                                            : 'text-slate-900 dark:text-white'
                                    }`}>
                                        {faq.question}
                                    </span>
                                    <ChevronDown
                                        className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
                                            openIndex === index
                                                ? 'rotate-180 text-blue-600 dark:text-blue-400'
                                                : 'text-slate-400'
                                        }`}
                                    />
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-300 ${
                                        openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'
                                    }`}
                                >
                                    <p className="font-body px-6 text-slate-600 dark:text-slate-400 leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
