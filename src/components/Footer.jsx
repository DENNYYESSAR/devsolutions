import React from 'react';
import { Code, Github, Linkedin, Twitter, ArrowRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white pt-20 pb-10 border-t border-slate-200 dark:border-slate-900 transition-colors duration-300">
            <div className="max-w-screen-2xl mx-auto px-6 lg:px-4">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center space-x-2 mb-6">
                            <img src="/logo.png" alt="DevSolutions Logo" className="w-10 h-10 object-contain" />
                            <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">DevSolutions</span>
                        </div>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                            Helping businesses like yours save time, cut costs, and grow faster with smart technology solutions.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://github.com/DENNYYESSAR" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all duration-300">
                                <Github className="w-5 h-5" />
                            </a>
                            <a href="https://www.linkedin.com/in/dennis-okeri" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all duration-300">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="https://twitter.com/teratrone" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all duration-300">
                                <Twitter className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 text-lg">Services</h4>
                        <ul className="space-y-4 text-slate-600 dark:text-slate-400">
                            <li><a href="#services" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors flex items-center group"><ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />Web Development</a></li>
                            <li><a href="#services" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors flex items-center group"><ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />Cloud & DevOps</a></li>
                            <li><a href="#services" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors flex items-center group"><ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />Cybersecurity</a></li>
                            <li><a href="#services" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors flex items-center group"><ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />AI & Machine Learning</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 text-lg">Company</h4>
                        <ul className="space-y-4 text-slate-600 dark:text-slate-400">
                            <li><a href="#why-us" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors flex items-center group"><ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />Why Us</a></li>
                            <li><a href="#technologies" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors flex items-center group"><ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />Technologies</a></li>
                            <li><a href="#contact" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors flex items-center group"><ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />Contact</a></li>
                            <li><a href="#" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors flex items-center group"><ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />Careers</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 text-lg">Contact</h4>
                        <ul className="space-y-4 text-slate-600 dark:text-slate-400">
                            <li>Nairobi, Kenya</li>
                            <li>+254 703 627-369</li>
                            <li>dennisokeri5@gmail.com</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-200 dark:border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-400 dark:text-slate-500 text-sm">
                    <p>© 2026 DevSolutions. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
