import { CheckCircle2, DollarSign, FileText, Users, BarChart3 } from 'lucide-react';

export const DetailedServicesSection = () => {
    return (
        <section id="detailed-services" className="section-padding" style={{ backgroundColor: '#f8fafc', paddingTop: '2rem' }}>
            <div className="container">
                <div style={styles.header}>
                    <h2 style={styles.heading}>O Que Entregamos</h2>
                    <p style={styles.subHeading}>Detalhes do nosso escopo de trabalho</p>
                </div>

                <div style={styles.grid}>
                    {/* Financeiro */}
                    <div style={styles.card}>
                        <div style={styles.iconHeader}>
                            <DollarSign size={32} color="var(--color-primary)" />
                            <h3 style={styles.cardTitle}>BPO Financeiro</h3>
                        </div>
                        <ul style={styles.list}>
                            <ListItem>Gestão de contas a pagar e receber</ListItem>
                            <ListItem>Conciliação bancária diária</ListItem>
                            <ListItem>Emissão de notas fiscais e boletos</ListItem>
                            <ListItem>Gestão de fluxo de caixa</ListItem>
                            <ListItem>Relatórios financeiros mensais (DRE)</ListItem>
                            <ListItem>Agendamento de pagamentos</ListItem>
                        </ul>
                    </div>

                    {/* Administrativo */}
                    <div style={styles.card}>
                        <div style={styles.iconHeader}>
                            <FileText size={32} color="var(--color-primary)" />
                            <h3 style={styles.cardTitle}>Gestão Administrativa</h3>
                        </div>
                        <ul style={styles.list}>
                            <ListItem>Organização de documentos digitais</ListItem>
                            <ListItem>Gestão de contratos e fornecedores</ListItem>
                            <ListItem>Controle de certidões negativas</ListItem>
                            <ListItem>Compras e cotações de insumos</ListItem>
                            <ListItem>Suporte em rotinas burocráticas</ListItem>
                        </ul>
                    </div>

                    {/* RH / Pessoal */}
                    <div style={styles.card}>
                        <div style={styles.iconHeader}>
                            <Users size={32} color="var(--color-primary)" />
                            <h3 style={styles.cardTitle}>Departamento Pessoal</h3>
                        </div>
                        <ul style={styles.list}>
                            <ListItem>Intermediação com a contabilidade</ListItem>
                            <ListItem>Controle de ponto e banco de horas</ListItem>
                            <ListItem>Gestão de benefícios (VT, VR, Planos)</ListItem>
                            <ListItem>Onboarding de novos colaboradores</ListItem>
                            <ListItem>Organização de prontuários</ListItem>
                        </ul>
                    </div>

                    {/* Estratégico/Tech */}
                    <div style={styles.card}>
                        <div style={styles.iconHeader}>
                            <BarChart3 size={32} color="var(--color-primary)" />
                            <h3 style={styles.cardTitle}>Inteligência & Tech</h3>
                        </div>
                        <ul style={styles.list}>
                            <ListItem>Implantação de sistema financeiro</ListItem>
                            <ListItem>Automação de processos repetitivos</ListItem>
                            <ListItem>Dashboards de indicadores (KPIs)</ListItem>
                            <ListItem>Análise de redução de custos</ListItem>
                            <ListItem>Planejamento orçamentário anual</ListItem>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ListItem = ({ children }: { children: React.ReactNode }) => (
    <li style={styles.listItem}>
        <CheckCircle2 size={16} color="var(--color-accent)" style={{ minWidth: '16px', marginTop: '4px' }} />
        <span>{children}</span>
    </li>
);

const styles = {
    header: {
        textAlign: 'center' as const,
        marginBottom: '1.5rem',
    },
    heading: {
        fontSize: '1rem',
        textTransform: 'uppercase' as const,
        letterSpacing: '0.05em',
        color: 'var(--color-primary)',
        fontWeight: 600,
        marginBottom: '0.5rem',
    },
    subHeading: {
        fontSize: '2rem',
        fontWeight: 700,
        color: 'var(--color-text-main)',
    },
    grid: {
        display: 'flex',
        flexWrap: 'wrap' as const,
        justifyContent: 'center',
        gap: '2rem',
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 'var(--radius-lg)',
        padding: '2rem',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        border: '1px solid #e2e8f0',
        transition: 'transform 0.2s ease',
        flex: '1 1 450px', // Increased basis to force 2 per line on standard screens
        width: '100%',
    },
    iconHeader: {
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        marginBottom: '1.5rem',
        borderBottom: '2px solid #f1f5f9',
        paddingBottom: '1rem',
    },
    cardTitle: {
        fontSize: '1.25rem',
        fontWeight: 700,
        color: 'var(--color-text-main)',
    },
    list: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        display: 'flex',
        flexDirection: 'column' as const,
        gap: '0.75rem',
    },
    listItem: {
        display: 'flex',
        gap: '0.75rem',
        alignItems: 'flex-start',
        color: 'var(--color-text-muted)',
        fontSize: '0.95rem',
        lineHeight: 1.5,
    }
};
