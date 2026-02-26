import { motion } from 'framer-motion';
import aboutImg from '../assets/images/solution.jpg'; // Reusing solution image for consistency or change as needed

export const AboutSection = () => {
    return (
        <section id="about" className="section-padding bg-background overflow-hidden border-t border-slate-100">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="order-2 lg:order-1"
                    >
                        <h2 className="text-sm font-bold tracking-wider text-secondary uppercase mb-3">
                            Quem Somos?
                        </h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-main mb-6 leading-tight">
                            A Pronto BPO <br />
                            <span className="text-primary">Sua parceira em crescimento.</span>
                        </h3>

                        <div className="space-y-6 text-lg text-muted">
                            <p>
                                A Pronto BPO é especializada na terceirização de tarefas administrativas, financeiras e contratuais. Nosso foco é desonerar o empresário da burocracia interna para que ele foque no crescimento.
                            </p>
                            <p>
                                Nascemos da observação de clientes do sistema Indicador.app, percebendo que muitos gestores carecem de tempo e de pessoas de confiança para delegar demandas internas críticas.
                            </p>
                            <p>
                                Nossa missão é elevar o nível da gestão das pequenas e médias empresas brasileiras, trazendo processos de elite e transparência total para o dia a dia do empreendedor.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative order-1 lg:order-2"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                            <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                            <img
                                src={aboutImg}
                                alt="Time Pronto BPO operando em alta performance"
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-secondary/10 rounded-full blur-2xl -z-10"></div>
                        <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl -z-10"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
