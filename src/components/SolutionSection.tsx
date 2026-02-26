import { motion } from 'framer-motion';
import solutionImg from '../assets/images/solution.jpg';

export const SolutionSection = () => {
    return (
        <section id="solution" className="section-padding bg-white overflow-hidden">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                            <div className="absolute inset-0 bg-secondary/10 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                            <img
                                src={solutionImg}
                                alt="Equipe trabalhando em sintonia"
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        {/* Decorative pattern */}
                        <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl -z-10"></div>
                        <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/10 rounded-full blur-2xl -z-10"></div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-sm font-bold tracking-wider text-secondary uppercase mb-3">
                            A Solução
                        </h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-main mb-6 leading-tight">
                            Assumimos a rotina. <br />
                            <span className="text-primary">Devolvemos a liberdade.</span>
                        </h3>

                        <div className="space-y-6 text-lg text-muted">
                            <p>
                                Nós somos a ponte entre a desordem burocrática e a clareza estratégica. Assumimos toda a sua rotina administrativa e financeira de forma profissional, organizada e 100% transparente.
                            </p>
                            <p className="p-6 bg-surface border-l-4 border-primary rounded-r-lg italic shadow-sm">
                                <strong className="text-primary block mb-2 not-italic">Ganhe tempo, clareza e controle total.</strong>
                                Pare de apagar incêndios no financeiro e comece a olhar para os indicadores que realmente importam para o seu lucro.
                            </p>
                            <p>
                                Nossa implementação é rápida, segura e desenhada para não interromper o fluxo da sua empresa enquanto profissionalizamos sua operação.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

