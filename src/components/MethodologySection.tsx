import { motion } from 'framer-motion';

export const MethodologySection = () => {
    return (
        <section id="methodology" className="section-padding bg-white">
            <div className="container">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-sm font-bold tracking-wider text-primary uppercase mb-3"
                    >
                        O Método
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-4xl font-bold text-main mb-4"
                    >
                        Etapas da Solução
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-muted"
                    >
                        Um caminho claro para a organização total:
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative max-w-5xl mx-auto">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative group p-8 bg-white rounded-2xl border border-slate-100 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                        >
                            <div className="w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 mx-auto group-hover:scale-110 transition-transform shadow-lg shadow-secondary/30">
                                {index + 1}
                            </div>
                            <h4 className="text-xl font-bold text-primary mb-4">
                                {step.title}
                            </h4>
                            <p className="text-muted leading-relaxed">
                                {step.desc}
                            </p>

                            {/* Connector Line (Desktop) */}
                            {index < steps.length - 1 && (
                                <div className="hidden md:block absolute top-16 left-[80%] w-[40%] h-0.5 bg-slate-100 -z-10"></div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const steps = [
    { title: "Diagnóstico Inicial", desc: "Coleta de acessos e início dos serviços manuais." },
    { title: "Organização de Rotina", desc: "Período de otimização de processos e relatórios." },
    { title: "Otimização Recorrente", desc: "Reunião de feedback e continuidade dos serviços." },
];
