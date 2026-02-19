import React, { useEffect, useCallback, useRef, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion, useInView, useSpring, useMotionValue, useTransform } from 'framer-motion';
import { ArrowLeft, ArrowRight, Check, ChevronRight } from 'lucide-react';
import serviceDetails from '../data/serviceDetails';
import Navbar from './Navbar';
import Footer from './Footer';
import BackToTop from './BackToTop';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
        opacity: 1, y: 0,
        transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
    }),
};

/* ── Animated Counter ── */
const AnimatedCounter = ({ value, className }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });
    const [display, setDisplay] = useState('0');

    useEffect(() => {
        if (!isInView) return;
        // Extract numeric part and suffix
        const match = value.match(/^([<>~]?)([\d.]+)(.*)$/);
        if (!match) { setDisplay(value); return; }
        const [, prefix, numStr, suffix] = match;
        const target = parseFloat(numStr);
        const isDecimal = numStr.includes('.');
        const duration = 1500;
        const startTime = performance.now();

        const animate = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = eased * target;
            setDisplay(prefix + (isDecimal ? current.toFixed(numStr.split('.')[1]?.length || 1) : Math.round(current)) + suffix);
            if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
    }, [isInView, value]);

    return <div ref={ref} className={className}>{display}</div>;
};

/* ── 3D Process Card ── */
const ProcessCard3D = ({ children, className }) => {
    const cardRef = useRef(null);
    const [hovering, setHovering] = useState(false);
    const rotateX = useMotionValue(0);
    const rotateY = useMotionValue(0);
    const glareX = useMotionValue(50);
    const glareY = useMotionValue(50);

    const springRotateX = useSpring(rotateX, { stiffness: 200, damping: 20 });
    const springRotateY = useSpring(rotateY, { stiffness: 200, damping: 20 });
    const shadowY = useTransform(springRotateX, [-15, 0, 15], [20, 10, 20]);
    const shadowBlur = useTransform(springRotateX, [-15, 0, 15], [30, 15, 30]);

    const handleMouseMove = (e) => {
        const rect = cardRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        rotateX.set((y - 0.5) * -20);
        rotateY.set((x - 0.5) * 20);
        glareX.set(x * 100);
        glareY.set(y * 100);
    };

    const handleMouseLeave = () => {
        setHovering(false);
        rotateX.set(0);
        rotateY.set(0);
        glareX.set(50);
        glareY.set(50);
    };

    return (
        <motion.div
            ref={cardRef}
            onMouseEnter={() => setHovering(true)}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                perspective: 800,
                rotateX: springRotateX,
                rotateY: springRotateY,
                transformStyle: 'preserve-3d',
            }}
            className={className}
        >
            {children}
            {/* Glare overlay */}
            <motion.div
                className="absolute inset-0 rounded-2xl pointer-events-none z-20"
                style={{
                    background: useTransform(
                        [glareX, glareY],
                        ([gx, gy]) => `radial-gradient(circle at ${gx}% ${gy}%, rgba(255,255,255,0.15) 0%, transparent 60%)`
                    ),
                    opacity: hovering ? 1 : 0,
                    transition: 'opacity 0.3s',
                }}
            />
        </motion.div>
    );
};

const ServiceDetail = () => {
    const { slug } = useParams();
    const service = serviceDetails[slug];
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    const goToContact = useCallback((e) => {
        e.preventDefault();
        navigate('/');
        setTimeout(() => {
            const el = document.getElementById('contact');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    }, [navigate]);

    if (!service) {
        return (
            <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
                <Navbar />
                <div className="flex flex-col items-center justify-center min-h-screen px-6">
                    <h1 className="font-heading text-4xl font-bold text-slate-900 dark:text-white mb-4">Service Not Found</h1>
                    <p className="font-body text-slate-600 dark:text-slate-400 mb-8">The service you're looking for doesn't exist.</p>
                    <Link to="/" className="font-display px-6 py-3 bg-cyan-600 text-white rounded-xl font-bold hover:bg-cyan-700 transition-all">
                        <ArrowLeft className="w-4 h-4 inline mr-2" />Back to Home
                    </Link>
                </div>
                <Footer />
            </div>
        );
    }

    const slugs = Object.keys(serviceDetails);
    const currentIndex = slugs.indexOf(slug);
    const prevService = currentIndex > 0 ? serviceDetails[slugs[currentIndex - 1]] : null;
    const nextService = currentIndex < slugs.length - 1 ? serviceDetails[slugs[currentIndex + 1]] : null;

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
            <Navbar />

            {/* Hero Banner */}
            <section className="relative pt-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={service.heroImage}
                        alt={service.title}
                        className="w-full h-full object-cover"
                    />
                    {/* Light mode overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-slate-50/90 dark:hidden" />
                    {/* Dark mode overlay */}
                    <div className="absolute inset-0 hidden dark:block bg-gradient-to-b from-slate-900/90 via-slate-900/85 to-slate-950" />
                </div>

                <div className="relative z-10 px-6 md:px-12 lg:px-48 py-24 md:py-36">
                    <motion.div initial="hidden" animate="visible" variants={fadeUp}>
                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 text-cyan-700 hover:text-cyan-900 dark:text-cyan-400 dark:hover:text-cyan-300 font-display font-medium mb-8 transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4" /> Back to Home
                        </Link>
                    </motion.div>

                    <motion.h1
                        initial="hidden" animate="visible" custom={1} variants={fadeUp}
                        className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-6 max-w-4xl"
                    >
                        {service.title}
                    </motion.h1>

                    <motion.p
                        initial="hidden" animate="visible" custom={2} variants={fadeUp}
                        className="font-accent text-xl md:text-2xl text-slate-700 dark:text-cyan-200 max-w-2xl mb-12"
                    >
                        {service.tagline}
                    </motion.p>

                    {/* Highlight Stats */}
                    <motion.div
                        initial="hidden" animate="visible" custom={3} variants={fadeUp}
                        className="flex flex-wrap gap-6 md:gap-12"
                    >
                        {service.highlights.map((h, i) => (
                            <div key={i} className="text-center md:text-left">
                                <AnimatedCounter
                                    value={h.stat}
                                    className="font-display text-3xl md:text-4xl font-bold text-slate-900 dark:text-white"
                                />
                                <div className="font-body text-sm text-slate-600 dark:text-slate-300 mt-1">{h.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Overview */}
            <section className="px-6 md:px-12 lg:px-48 py-20">
                <motion.div
                    initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }} variants={fadeUp}
                    className="max-w-4xl"
                >
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">Overview</h2>
                    <p className="font-body text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
                        {service.overview}
                    </p>
                </motion.div>
            </section>

            {/* Detailed Sections with alternating images */}
            {service.sections.map((section, index) => (
                <section
                    key={index}
                    className={`px-6 md:px-12 lg:px-48 py-16 md:py-24 ${index % 2 === 0 ? 'bg-white dark:bg-slate-900' : 'bg-slate-50 dark:bg-slate-950'} transition-colors duration-300`}
                >
                    <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                        {/* Text */}
                        <motion.div
                            initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }}
                            custom={0} variants={fadeUp}
                            className={index % 2 !== 0 ? 'lg:order-2' : ''}
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <span className="font-display text-sm font-bold text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-900/20 px-3 py-1 rounded-full">
                                    0{index + 1}
                                </span>
                            </div>
                            <h3 className="font-heading text-2xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                                {section.heading}
                            </h3>
                            <p className="font-body text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                                {section.body}
                            </p>
                        </motion.div>

                        {/* Image */}
                        <motion.div
                            initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }}
                            custom={1} variants={fadeUp}
                            className={index % 2 !== 0 ? 'lg:order-1' : ''}
                        >
                            <div className="relative group">
                                <div className="absolute -inset-3 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <img
                                    src={section.image}
                                    alt={section.heading}
                                    loading="lazy"
                                    className="relative w-full h-64 md:h-80 object-cover rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700"
                                />
                            </div>
                        </motion.div>
                    </div>
                </section>
            ))}

            {/* Technologies Used */}
            <section className="px-6 md:px-12 lg:px-48 py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
                <motion.div
                    initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }} variants={fadeUp}
                >
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-10 text-center">
                        Technologies We Use
                    </h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {service.technologies.map((tech, idx) => (
                            <motion.span
                                key={idx}
                                initial="hidden" whileInView="visible" viewport={{ once: true }}
                                custom={idx * 0.5} variants={fadeUp}
                                className="font-display px-5 py-2.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-xl font-medium border border-slate-200 dark:border-slate-700 hover:border-cyan-400 dark:hover:border-cyan-600 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-300"
                            >
                                {tech}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* Our Process */}
            <section className="px-6 md:px-12 lg:px-48 py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
                <motion.div
                    initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }} variants={fadeUp}
                >
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 text-center">
                        Our Process
                    </h2>
                    <p className="font-body text-lg text-slate-600 dark:text-slate-400 text-center max-w-2xl mx-auto mb-14">
                        A structured, transparent approach that delivers consistent results
                    </p>

                    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
                        {service.process.map((p, idx) => (
                            <motion.div
                                key={idx}
                                initial="hidden" whileInView="visible" viewport={{ once: true }}
                                custom={idx} variants={fadeUp}
                            >
                                <ProcessCard3D
                                    className="relative bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-cyan-200 dark:hover:border-cyan-800 transition-all duration-300 group cursor-default overflow-hidden"
                                >
                                    <div className="font-display text-5xl font-black text-slate-100 dark:text-slate-800 group-hover:text-cyan-100 dark:group-hover:text-cyan-900/30 transition-colors absolute top-4 right-6">
                                        {String(idx + 1).padStart(2, '0')}
                                    </div>
                                    <div className="relative z-10">
                                        <h4 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                                            {p.step}
                                        </h4>
                                        <p className="font-body text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                                            {p.desc}
                                        </p>
                                    </div>
                                </ProcessCard3D>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* Navigation between services */}
            <section className="px-6 md:px-12 lg:px-48 py-12 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 transition-colors duration-300">
                <div className="flex justify-between items-center">
                    {prevService ? (
                        <Link
                            to={`/services/${prevService.slug}`}
                            className="group flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                        >
                            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                            <div>
                                <div className="font-body text-xs text-slate-400 uppercase tracking-wide">Previous</div>
                                <div className="font-display font-bold text-sm md:text-base">{prevService.title}</div>
                            </div>
                        </Link>
                    ) : <div />}

                    {nextService ? (
                        <Link
                            to={`/services/${nextService.slug}`}
                            className="group flex items-center gap-3 text-right text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                        >
                            <div>
                                <div className="font-body text-xs text-slate-400 uppercase tracking-wide">Next</div>
                                <div className="font-display font-bold text-sm md:text-base">{nextService.title}</div>
                            </div>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    ) : <div />}
                </div>
            </section>

            <BackToTop />
            <Footer />
        </div>
    );
};

export default ServiceDetail;
