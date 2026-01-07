import React from 'react';
import { motion } from 'framer-motion';
import heroBg from '../assets/hero_bg.png';

const HeroBackground = () => {
    return (
        <div className="absolute inset-0 overflow-hidden -z-10">
            <div className="absolute inset-0 bg-slate-900">
                {/* Background Image */}
                <img
                    src={heroBg}
                    alt="Digital Network Background"
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                />

                {/* Overlay Gradients for Depth */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-transparent to-slate-900/60"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 via-transparent to-slate-900/60"></div>

                {/* Animated Gradients */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] animate-pulse mix-blend-screen" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px] animate-pulse mix-blend-screen" style={{ animationDelay: '2s' }} />
            </div>

            {/* Floating Elements */}
            <motion.div
                className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full"
                animate={{
                    y: [0, -20, 0],
                    opacity: [0.5, 1, 0.5],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <motion.div
                className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-cyan-400 rounded-full"
                animate={{
                    y: [0, 30, 0],
                    opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                }}
            />
        </div>
    );
};

export default HeroBackground;
