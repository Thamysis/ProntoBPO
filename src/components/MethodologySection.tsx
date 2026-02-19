export const MethodologySection = () => {
    return (
        <section id="methodology" className="section-padding" style={{ backgroundColor: 'var(--color-surface)' }}>
            <div className="container">
                <div className="text-center" style={{ marginBottom: '4rem' }}>
                    <h2 style={styles.heading}>O Método</h2>
                    <h3 style={styles.subHeading}>Etapas da Solução</h3>
                    <p style={styles.intro}>Um caminho claro para a organização total:</p>
                </div>

                <div style={styles.steps}>
                    {steps.map((step, index) => (
                        <div key={index} style={styles.stepCard}>
                            <div style={styles.stepNumber}>{index + 1}</div>
                            <h4 style={styles.stepTitle}>{step.title}</h4>
                            <p style={styles.stepDesc}>{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const steps = [
    { title: "Diagnóstico Inicial", desc: "Entendemos a saúde atual do seu negócio." },
    { title: "Organização de Rotina", desc: "Arrumamos a casa e definimos os fluxos." },
    { title: "Implantação de Processos", desc: "Criamos os controles que sua empresa precisa." },
    { title: "Acompanhamento Mensal", desc: "Execução precisa de todas as tarefas." },
    { title: "Relatórios e Feedbacks", desc: "Reuniões periódicas para você nunca perder o controle." },
];

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
        color: 'var(--color-text-main)',
        marginBottom: '1rem',
    },
    intro: {
        fontSize: '1.25rem',
        color: 'var(--color-text-muted)',
    },
    steps: {
        display: 'flex',
        flexWrap: 'wrap' as const,
        justifyContent: 'center',
        gap: '2rem',
    },
    stepCard: {
        backgroundColor: 'white',
        padding: '2rem',
        borderRadius: 'var(--radius-lg)',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
        display: 'flex',
        flexDirection: 'column' as const,
        alignItems: 'center',
        textAlign: 'center' as const,
        position: 'relative' as const,
        flex: '1 1 320px', // Increased from 250px to force wrap after 3 items
        maxWidth: '400px',
        width: '100%',
    },
    stepNumber: {
        width: '3rem',
        height: '3rem',
        backgroundColor: 'var(--color-secondary)',
        color: 'white',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.25rem',
        fontWeight: 700,
        marginBottom: '1.5rem',
    },
    stepTitle: {
        fontSize: '1.25rem',
        fontWeight: 700,
        marginBottom: '0.5rem',
        color: 'var(--color-primary)',
    },
    stepDesc: {
        color: 'var(--color-text-muted)',
        lineHeight: 1.5,
    }
};
