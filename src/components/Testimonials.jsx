import React from 'react';
import { Star, Quote } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Testimonials = () => {
    const testimonials = [
        {
            name: "Sarah Mitchell",
            role: "CEO",
            company: "TechFlow Innovations",
            content: "DevSolutions transformed our entire digital infrastructure. Their AI solutions cut our operational costs by 40% and the team delivered everything ahead of schedule. Truly exceptional partners.",
            rating: 5,
            avatar: "SM"
        },
        {
            name: "James Okonkwo",
            role: "CTO",
            company: "FinServe Africa",
            content: "We needed a secure, scalable platform for our fintech app. DevSolutions delivered beyond expectations—our transaction speed improved 3x and we haven't had a single security incident since launch.",
            rating: 5,
            avatar: "JO"
        },
        {
            name: "Elena Rodriguez",
            role: "Operations Director",
            company: "GlobalRetail Co",
            content: "From concept to deployment in just 8 weeks. Their cloud expertise saved us months of development time and their ongoing support has been invaluable. Highly recommend for any serious project.",
            rating: 5,
            avatar: "ER"
        }
    ];

    return (
        <section id="testimonials" className="py-24 px-6 lg:px-4 bg-white dark:bg-slate-950 transition-colors duration-300">
            <div className="max-w-screen-2xl mx-auto">
                <AnimatedSection>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">What Our Clients Say</h2>
                        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            Don't just take our word for it—hear from businesses we've helped succeed
                        </p>
                    </div>
                </AnimatedSection>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <AnimatedSection key={index} delay={index * 0.15}>
                            <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300 h-full flex flex-col relative group">
                                {/* Quote icon */}
                                <div className="absolute top-6 right-6 text-blue-100 dark:text-slate-800 group-hover:text-blue-200 dark:group-hover:text-slate-700 transition-colors">
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
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white font-bold text-sm shadow-lg">
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
