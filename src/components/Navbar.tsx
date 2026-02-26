import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../assets/images/WithTextPurple.svg';

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-4 shadow-lg' : 'bg-transparent py-6'
                }`}
        >
            <div className="container flex items-center justify-between">
                <a href="#" className="flex items-center gap-2">
                    <img src={logoImg} alt="Pronto BPO" className="h-32 w-auto object-contain -my-12 -ml-12 scale-[2.2] origin-left" />
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Serviços</a>
                    <a href="#methodology" className="text-sm font-medium hover:text-primary transition-colors">Como Funciona</a>
                    <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">Sobre Nós</a>
                    <a
                        href="https://wa.me/5519987315837?text=Ol%C3%A1%2C%20queria%20saber%20mais%20sobre%20a%20Pronto%20BPO"
                        className="btn btn-primary text-sm px-6 py-2"
                    >
                        Fale Conosco
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-main"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-surface/95 backdrop-blur-md border-b border-slate-200 overflow-hidden"
                    >
                        <div className="container flex flex-col gap-4 py-6">
                            <a
                                href="#services"
                                className="text-base font-medium text-main hover:text-primary"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Serviços
                            </a>
                            <a
                                href="#methodology"
                                className="text-base font-medium text-main hover:text-primary"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Como Funciona
                            </a>
                            <a
                                href="#about"
                                className="text-base font-medium text-main hover:text-primary"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Sobre Nós
                            </a>
                            <a
                                href="https://wa.me/5519987315837?text=Ol%C3%A1%2C%20queria%20saber%20mais%20sobre%20a%20Pronto%20BPO"
                                className="btn btn-primary w-full justify-center"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Fale Conosco
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};
