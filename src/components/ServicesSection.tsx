import { TrendingUp, FileText, MessageCircle } from 'lucide-react';

export const ServicesSection = () => {
    return (
        <section id="services" className="section-padding">
            <div className="container">
                <div className="text-center" style={{ marginBottom: '4rem' }}>
                    <h2 style={styles.heading}>Nossos Pilares</h2>
                    <h3 style={styles.subHeading}>O Que Podemos Fazer Por Você?</h3>
                </div>

                <div style={styles.grid}>
                    {/* Financial Card */}
                    <div style={styles.card}>
                        <div style={styles.iconContainer}>
                            <TrendingUp size={40} color="var(--color-primary)" />
                        </div>
                        <h4 style={styles.cardTitle}>Gestão Financeira Inteligente</h4>
                        <ul style={styles.list}>
                            <li>Conciliação bancária e fluxo de caixa</li>
                            <li>Gestão de contas e emissão de notas</li>
                            <li>Contato direto com sua contabilidade</li>
                            <li>Dashboards e indicadores de performance</li>
                        </ul>
                    </div>

                    {/* Admin Card */}
                    <div style={styles.card}>
                        <div style={styles.iconContainer}>
                            <FileText size={40} color="var(--color-primary)" />
                        </div>
                        <h4 style={styles.cardTitle}>Eficiência Administrativa</h4>
                        <ul style={styles.list}>
                            <li>Redação e envio de contratos em até 1h</li>
                            <li>Organização de processos e documentos</li>
                            <li>Apoio em contratações e demissões</li>
                            <li>Implementação de sistemas (Monday/ClickUp)</li>
                        </ul>
                    </div>

                    {/* Image Card */}
                    <div style={styles.card}>
                        <div style={styles.iconContainer}>
                            <MessageCircle size={40} color="var(--color-primary)" />
                        </div>
                        <h4 style={styles.cardTitle}>Gestão de Imagem e Experiência</h4>
                        <ul style={styles.list}>
                            <li>Cobrança ativa de tarefas da equipe</li>
                            <li>Implantação e análise de NPS (Satisfação)</li>
                            <li>Alinhamento de Redes Sociais e Google</li>
                            <li>Suporte 24H à sua disposição</li>
                        </ul>
                    </div>
                </div>

                <div className="text-center" style={{ marginTop: '1rem' }}>
                    <a href="#detailed-services" className="btn btn-secondary">Ver todos os serviços detalhados</a>
                </div>
            </div>
        </section>
    );
};

const styles = {
    heading: {
        fontSize: '1rem',
        textTransform: 'uppercase' as const,
        letterSpacing: '0.05em',
        color: 'var(--color-primary)',
        marginBottom: '1rem',
        fontWeight: 600,
    },
    subHeading: {
        fontSize: '2.5rem',
        fontWeight: 700,
        color: '#1e293b',
    },
    grid: {
        display: 'flex',
        flexWrap: 'wrap' as const,
        justifyContent: 'center',
        gap: '2rem',
    },
    card: {
        padding: '2rem',
        backgroundColor: 'white',
        borderRadius: 'var(--radius-lg)',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        border: '1px solid #e2e8f0',
        transition: 'transform 0.3s ease',
        display: 'flex',
        flexDirection: 'column' as const,
        alignItems: 'flex-start',
        flex: '1 1 300px',
        maxWidth: '400px',
        width: '100%',
    },
    iconContainer: {
        marginBottom: '1.5rem',
        padding: '1rem',
        backgroundColor: '#f3e5f5',
        borderRadius: '12px',
        display: 'inline-flex',
    },
    cardTitle: {
        fontSize: '1.5rem',
        fontWeight: 700,
        marginBottom: '1.5rem',
        color: 'var(--color-primary)',
        paddingBottom: '1rem',
        borderBottom: '2px solid var(--color-accent)',
        width: '100%',
    },
    list: {
        display: 'flex',
        flexDirection: 'column' as const,
        gap: '1rem',
        color: '#475569',
        width: '100%',
    }
};
