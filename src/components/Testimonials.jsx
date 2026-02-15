import React from 'react';
import { Star, Quote } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Testimonials = () => {
    const testimonials = [
        {
            name: "Sarah Mitchell",
            role: "CEO",
            company: "TechFlow Innovations",
            content: "DevSolutions completely modernized our digital infrastructure. Their AI-driven solutions reduced our operational costs by 40%, and the team consistently delivered ahead of schedule. An exceptional technology partner.",
            rating: 5,
            avatar: "SM"
        },
        {
            name: "James Okonkwo",
            role: "CTO",
            company: "FinServe Africa",
            content: "We required a secure, scalable platform for our fintech application. DevSolutions exceeded every benchmark. Transaction throughput improved 3x, and we have maintained a flawless security record since launch.",
            rating: 5,
            avatar: "JO"
        },
        {
            name: "Elena Rodriguez",
            role: "Operations Director",
            company: "GlobalRetail Co",
            content: "From concept to production deployment in just 8 weeks. Their cloud architecture expertise accelerated our timeline significantly, and their ongoing support continues to be invaluable. Highly recommended for enterprise-grade projects.",
            rating: 5,
            avatar: "ER"
        }
    ];

    return (
        <section id="testimonials" className="py-24 px-6 md:px-12 lg:px-48 bg-white dark:bg-slate-950 transition-colors duration-300">
            <div className="w-full mx-auto">
                <AnimatedSection>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Client Testimonials</h2>
                        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                            Trusted by industry leaders. Here is what our clients have to say about working with us
                        </p>
                    </div>
                </AnimatedSection>

                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 justify-center">
                    {testimonials.map((testimonial, index) => (
                        <AnimatedSection key={index} delay={index * 0.15}>
                            <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 hover:border-cyan-200 dark:hover:border-cyan-800 transition-all duration-300 h-full flex flex-col relative group">
                                {/* Quote icon */}
                                <div className="absolute top-6 right-6 text-cyan-100 dark:text-slate-800 group-hover:text-cyan-200 dark:group-hover:text-slate-700 transition-colors">
                                    <Quote className="w-12 h-12" />
                                </div>

                                {/* Stars */}
                                <div className="flex gap-1 mb-6">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                                    ))}
                                </div>

                                {/* Content */}
                                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8 flex-1 relative z-10">
                                    "{testimonial.content}"
                                </p>

                                {/* Author */}
                                <div className="flex items-center gap-4 pt-6 border-t border-slate-100 dark:border-slate-800">
                                    <div className="w-12 h-12 rounded-full bg-cyan-600 flex items-center justify-center text-white font-bold text-sm shadow-lg">
                                        {testimonial.avatar}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 dark:text-white">{testimonial.name}</h4>
                                        <p className="text-sm text-slate-500 dark:text-slate-400">{testimonial.role}, {testimonial.company}</p>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
