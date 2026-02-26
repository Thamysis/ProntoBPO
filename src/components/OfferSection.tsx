import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const OfferSection = () => {
    return (
        <section id="offer" className="section-padding bg-background">
            <div className="container">
                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-sm font-bold tracking-wider text-secondary uppercase mb-3"
                    >
                        Planos e Investimento
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="inline-block px-4 py-1 mb-4 text-xs font-bold bg-pink-500 text-white rounded-full animate-pulse"
                    >
                        PROMOÇÃO DE CARNAVAL 🎉
                    </motion.div>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-3xl md:text-5xl font-bold text-main"
                    >
                        Escolha o plano ideal para você
                    </motion.h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <PricingCard
                        title="Bronze"
                        price="1.497"
                        originalPrice="2.000"
                        features={[
                            "Serviços financeiros essenciais",
                            "Atendimento via WhatsApp",
                            "Reuniões agendadas",
                            "Primeiro mês GRÁTIS"
                        ]}
                    />
                    <PricingCard
                        title="Prata"
                        price="2.497"
                        originalPrice="3.000"
                        popular
                        features={[
                            "Tudo do Bronze",
                            "Serviços administrativo-processuais",
                            "Sistema financeiro e precificação",
                            "Primeiro mês GRÁTIS"
                        ]}
                    />
                    <PricingCard
                        title="Ouro"
                        price="4.497"
                        originalPrice="5.000"
                        features={[
                            "Tudo do Prata",
                            "Plano personalizado",
                            "Demandas administrativas específicas",
                            "Suporte prioritário"
                        ]}
                    />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="relative max-w-4xl mx-auto bg-white rounded-[2.5rem] p-8 md:p-16 shadow-2xl border border-slate-100 overflow-hidden text-center"
                >
                    {/* Decorative Background Elements */}
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-secondary to-primary"></div>

                    <div className="relative z-10">
                        <h2 className="text-sm font-bold tracking-wider text-secondary uppercase mb-4">
                            A Oferta Irresistível
                        </h2>
                        <h3 className="text-3xl md:text-5xl font-bold text-main mb-6 leading-tight">
                            Risco Zero. <br />
                            <span className="text-primary">Investimento Inicial Zero.</span>
                        </h3>

                        <p className="text-lg text-muted mb-10 max-w-2xl mx-auto leading-relaxed">
                            Sabemos da importância da confiança quando o assunto é o seu financeiro.
                            Por isso, o primeiro mês é por nossa conta (com contrato de confidencialidade).
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 max-w-3xl mx-auto">
                            <FeatureItem text="Contrato de Confidencialidade" />
                            <FeatureItem text="Primeiro Mês Totalmente Gratuito" highlight />
                            <FeatureItem text="Reunião de Feedback" />
                            <FeatureItem text="Nota: Promoção até 28/02/2026" />
                        </div>

                        <div className="space-y-6">
                            <p className="text-xl font-bold text-main">
                                Pronto para sair do operacional e assumir o comando?
                            </p>

                            <motion.a
                                href="https://wa.me/5519987315837?text=Quero%20aproveitar%20a%20promo%C3%A7%C3%A3o%20de%20Carnaval"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center justify-center gap-2 btn btn-primary text-lg px-8 py-4 shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 transition-all"
                            >
                                <span>QUERO MEU MÊS GRATUITO AGORA</span>
                                <ArrowRight size={20} />
                            </motion.a>

                            <p className="text-sm text-muted">
                                Fale com um especialista e garanta sua implementação.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const PricingCard = ({ title, price, originalPrice, features, popular = false }: { title: string, price: string, originalPrice: string, features: string[], popular?: boolean }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`relative p-8 rounded-3xl border ${popular ? 'border-primary bg-white shadow-2xl scale-105 z-10' : 'border-slate-100 bg-white/50 shadow-lg'} transition-all`}
    >
        {popular && (
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full uppercase">
                Mais Popular
            </span>
        )}
        <h4 className="text-2xl font-bold text-main mb-2">{title}</h4>
        <div className="mb-6">
            <span className="text-sm text-muted line-through">R$ {originalPrice},00</span>
            <div className="flex items-baseline gap-1">
                <span className="text-sm font-bold text-main">R$</span>
                <span className="text-4xl font-bold text-main">{price}</span>
                <span className="text-sm text-muted">/mês</span>
            </div>
        </div>
        <ul className="space-y-4 mb-6">
            {features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-muted text-sm text-left">
                    <CheckCircle2 size={18} className="text-primary shrink-0" />
                    <span>{feature}</span>
                </li>
            ))}
        </ul>
        <a
            href={`https://wa.me/5519987315837?text=Tenho%20interesse%20no%20plano%20${title}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-full py-3 rounded-xl font-bold transition-all text-center block ${popular ? 'bg-primary text-white hover:bg-primary/90 shadow-glow' : 'bg-slate-100 text-main hover:bg-slate-200'}`}
        >
            Selecionar Plano
        </a>
    </motion.div>
);

const FeatureItem = ({ text, highlight = false }: { text: string, highlight?: boolean }) => (
    <div className={`flex items-center gap-3 p-4 rounded-xl text-left transition-all ${highlight ? 'bg-primary/5 border border-primary/10 shadow-sm' : 'bg-background border border-slate-100'}`}>
        <CheckCircle2 size={20} className={highlight ? 'text-primary' : 'text-secondary'} />
        <span className={`font-semibold ${highlight ? 'text-primary' : 'text-main'}`}>{text}</span>
    </div>
);

