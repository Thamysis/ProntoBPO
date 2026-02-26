import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import videoThumb from '../assets/images/hero-bg.jpg'; // Using an existing image as thumbnail for now

export const VideoSection = () => {
    return (
        <section id="presentation" className="section-padding bg-white overflow-hidden">
            <div className="container">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-sm font-bold tracking-wider text-secondary uppercase mb-3"
                    >
                        Conheça a Pronto BPO
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold text-main"
                    >
                        Como transformamos sua empresa
                    </motion.h3>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative max-w-5xl mx-auto rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white group"
                >
                    {/* Video Placeholder / Thumbnail */}
                    <div className="aspect-video relative">
                        <img
                            src={videoThumb}
                            alt="Apresentação Pronto BPO"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors duration-500"></div>

                        {/* Play Button Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="w-20 h-20 md:w-28 md:h-28 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/50 shadow-2xl group-hover:bg-primary group-hover:border-primary transition-all duration-300"
                            >
                                <Play size={40} fill="currentColor" className="ml-2" />
                            </motion.button>
                        </div>
                    </div>

                    {/* Content Overlay (Bottom) */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                        <p className="text-lg font-medium">Assista ao vídeo e entenda como nossa metodologia de BPO pode recuperar seu tempo e aumentar seus ganhos.</p>
                    </div>
                </motion.div>

                <div className="mt-12 text-center">
                    <p className="text-muted text-lg max-w-2xl mx-auto">
                        Uma operação transparente, segura e totalmente focada no resultado do seu negócio.
                        <strong> Descubra o que é ter um braço direito de verdade.</strong>
                    </p>
                </div>
            </div>
        </section>
    );
};
