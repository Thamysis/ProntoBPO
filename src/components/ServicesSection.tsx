import { TrendingUp, FileText, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

export const ServicesSection = () => {
    return (
        <section id="services" className="section-padding bg-white">
            <div className="container">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-sm font-bold tracking-wider text-primary uppercase mb-3"
                    >
                        Nossos Pilares
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-4xl font-bold text-main"
                    >
                        O Que Podemos Fazer Por Você?
                    </motion.h3>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {/* Financial Card */}
                    <motion.div variants={itemVariants} className="p-8 bg-white rounded-2xl border border-slate-100 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                        <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
                            <TrendingUp size={28} />
                        </div>
                        <h4 className="text-xl font-bold mb-4 text-main">Serviços Financeiros</h4>
                        <ul className="space-y-3 text-muted">
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2"></span>
                                Categorização e Conciliação Bancária
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2"></span>
                                Gestão de Contas e Fluxo de Caixa
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2"></span>
                                Emissão de Notas e Sistemas de Cobrança
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2"></span>
                                Relatórios e Dashboards com Indicadores
                            </li>
                        </ul>
                    </motion.div>

                    {/* Admin/Processual Card */}
                    <motion.div variants={itemVariants} className="p-8 bg-white rounded-2xl border border-slate-100 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                        <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6 text-secondary group-hover:scale-110 transition-transform duration-300">
                            <FileText size={28} />
                        </div>
                        <h4 className="text-xl font-bold mb-4 text-main">Administrativo Processual</h4>
                        <ul className="space-y-3 text-muted">
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></span>
                                Redação e Envio de Contratos em 1h
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></span>
                                Mapeamento e Gestão de Processos
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></span>
                                Configuração de Monday, ClickUp e Trello
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></span>
                                Auxílio RH e Implantação de NPS
                            </li>
                        </ul>
                    </motion.div>

                    {/* Specialized Support Card */}
                    <motion.div variants={itemVariants} className="p-8 bg-white rounded-2xl border border-slate-100 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                        <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 text-accent group-hover:scale-110 transition-transform duration-300">
                            <MessageCircle size={28} />
                        </div>
                        <h4 className="text-xl font-bold mb-4 text-main">Diferenciais</h4>
                        <ul className="space-y-3 text-muted">
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2"></span>
                                Interface Direta com sua Contabilidade
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2"></span>
                                Primeito Mês Totalmente Gratuito
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2"></span>
                                Foco Total em Desonerar o Empresário
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2"></span>
                                Relatórios Objetivos e Personalizados
                            </li>
                        </ul>
                    </motion.div>
                </motion.div>

                <div className="text-center mt-12">
                    <a href="#detailed-services" className="btn btn-secondary">Ver todos os serviços detalhados</a>
                </div>
            </div>
        </section>
    );
};
