import { motion } from 'framer-motion';
import heroBg from '../assets/images/hero-bg.jpg';

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background with overlay */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `url(${heroBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-background"></div>
            </div>

            <div className="container relative z-10 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider text-primary bg-primary/10 rounded-full uppercase">
                        Gestão Financeira Inteligente
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 max-w-4xl text-main"
                >
                    Tire o dono da burocracia. <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-300% animate-gradient">
                        Foque no seu Produto.
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg md:text-xl text-main font-medium max-w-2xl mb-10 leading-relaxed drop-shadow-sm"
                >
                    Terceirização Administrativa, Financeira e Contratual de alta performance para você recuperar o seu tempo e escalar seu negócio.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-4"
                >
                    <a
                        href="https://wa.me/5516936182112?text=Quero%20meu%20primeiro%20m%C3%AAs%20gratuito"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary shadow-glow group"
                    >
                        Quero meu primeiro mês gratuito
                        <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                    <a
                        href="#how-it-works"
                        className="btn btn-secondary"
                    >
                        Conheça nossa metodologia
                    </a>
                </motion.div>

                {/* Floating Elements / Stats could go here later */}
            </div>
        </section>
    );
};
