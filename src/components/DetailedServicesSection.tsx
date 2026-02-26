import { CheckCircle2, DollarSign, FileText, Users, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

export const DetailedServicesSection = () => {
    return (
        <section id="detailed-services" className="section-padding bg-background">
            <div className="container">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-sm font-bold tracking-wider text-primary uppercase mb-3"
                    >
                        O Que Entregamos
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-4xl font-bold text-main"
                    >
                        Detalhes do nosso escopo de trabalho
                    </motion.p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {/* Financeiro */}
                    <ServiceCard
                        icon={<DollarSign size={28} />}
                        title="BPO Financeiro"
                        items={[
                            "Controle de entradas e saídas",
                            "Conciliação bancária documentada",
                            "Gestão de contas e análise de taxas",
                            "Categorização centralizada",
                            "Emissão de notas e boletos",
                            "Relatórios e Dashboards (KPIs)",
                            "Sistemas de cobrança validados"
                        ]}
                        color="primary"
                    />

                    {/* Administrativo */}
                    <ServiceCard
                        icon={<FileText size={28} />}
                        title="Administrativo Processual"
                        items={[
                            "Elaboração de contratos (PJ)",
                            "Formalização e envio em até 1h",
                            "Criação de modelos de documentos",
                            "Mapeamento de processos",
                            "Gestão de arquivos corporativos",
                            "Configuração (Monday/ClickUp/Trello)"
                        ]}
                        color="secondary"
                    />

                    {/* RH / NPS */}
                    <ServiceCard
                        icon={<Users size={28} />}
                        title="Gestão de Pessoas"
                        items={[
                            "Auxílio em contratação e demissão",
                            "Organização de documentos de RH",
                            "Implantação de pesquisas de NPS",
                            "Gestão do clima organizacional",
                            "Processos de Onboarding"
                        ]}
                        color="accent"
                    />

                    {/* Estratégico */}
                    <ServiceCard
                        icon={<BarChart3 size={28} />}
                        title="Interface Estratégica"
                        items={[
                            "Conexão direta com contabilidade",
                            "Relatórios financeiros objetivos",
                            "Análise de redução de custos",
                            "Controle de receita por canal",
                            "Planejamento orçamentário"
                        ]}
                        color="primary"
                    />
                </motion.div>
            </div>
        </section>
    );
};

const ServiceCard = ({ icon, title, items, color }: { icon: React.ReactNode, title: string, items: string[], color: 'primary' | 'secondary' | 'accent' }) => {
    const colorClasses = {
        primary: { bg: 'bg-primary/10', text: 'text-primary' },
        secondary: { bg: 'bg-secondary/10', text: 'text-secondary' },
        accent: { bg: 'bg-accent/10', text: 'text-accent' }
    };

    return (
        <motion.div
            variants={itemVariants}
            className="bg-white rounded-2xl p-6 border border-slate-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
            <div className={`w-12 h-12 ${colorClasses[color].bg} ${colorClasses[color].text} rounded-lg flex items-center justify-center mb-6`}>
                {icon}
            </div>
            <h3 className="text-xl font-bold text-main mb-6 pb-4 border-b border-slate-100">
                {title}
            </h3>
            <ul className="space-y-3">
                {items.map((item, index) => (
                    <li key={index} className="flex items-start gap-2.5 text-muted text-sm">
                        <CheckCircle2 size={16} className={`shrink-0 mt-0.5 ${colorClasses[color].text}`} />
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </motion.div>
    );
};

