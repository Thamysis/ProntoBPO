export const OfferSection = () => {
    return (
        <section id="offer" className="section-padding" style={{ backgroundColor: '#fff' }}>
            <div className="container">
                <div style={styles.card}>
                    <div className="text-center">
                        <h2 style={styles.heading}>A Oferta Irresistível</h2>
                        <h3 style={styles.subHeading}>Risco Zero. Investimento Inicial Zero.</h3>
                        <p style={styles.text}>
                            Sabemos da importância da confiança quando o assunto é o seu financeiro.
                            Por isso, desenhamos uma linha do tempo onde o risco fica todo do nosso lado:
                        </p>
                    </div>

                    <div style={styles.features}>
                        <div style={styles.featureItem}>✅ Contrato de Confidencialidade</div>
                        <div style={styles.featureItem}>✅ Primeiro Mês Totalmente Gratuito</div>
                        <div style={styles.featureItem}>✅ Reunião de Feedback</div>
                        <div style={styles.featureItem}>✅ Ciclo de Implementação de 6 meses</div>
                    </div>

                    <div className="text-center" style={{ marginTop: '3rem' }}>
                        <p style={{ marginBottom: '1.5rem', fontSize: '1.25rem', fontWeight: 600 }}>
                            Pronto para sair do operacional e assumir o comando?
                        </p>
                        <a
                            href="https://wa.me/5516936182112?text=Quero%20meu%20primeiro%20m%C3%AAs%20gratuito%20agora"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                            style={styles.cta}
                        >
                            QUERO COMEÇAR MEU MÊS GRATUITO AGORA
                        </a>
                        <p style={{ marginTop: '1rem', color: '#64748b', fontSize: '0.875rem' }}>
                            Fale com um especialista e garanta sua implementação.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

const styles = {
    card: {
        backgroundColor: 'var(--color-surface)',
        borderRadius: '2rem',
        padding: '4rem 2rem',
        border: '1px solid #e2e8f0',
    },
    heading: {
        fontSize: '1rem',
        textTransform: 'uppercase' as const,
        letterSpacing: '0.05em',
        color: 'var(--color-accent)',
        marginBottom: '1rem',
        fontWeight: 600,
    },
    subHeading: {
        fontSize: 'clamp(2rem, 4vw, 3rem)',
        fontWeight: 700,
        marginBottom: '1.5rem',
        color: 'var(--color-text-main)',
    },
    text: {
        fontSize: '1.125rem',
        color: 'var(--color-text-muted)',
        maxWidth: '700px',
        margin: '0 auto 3rem',
        lineHeight: 1.6,
    },
    features: {
        display: 'flex',
        flexWrap: 'wrap' as const,
        justifyContent: 'center',
        gap: '1.5rem',
        maxWidth: '900px',
        margin: '0 auto',
    },
    featureItem: {
        backgroundColor: 'white',
        padding: '1.5rem',
        borderRadius: 'var(--radius-md)',
        boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
        fontWeight: 600,
        color: 'var(--color-text-main)',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        flex: '1 1 350px',
        width: '100%',
    },
    cta: {
        fontSize: '1.25rem',
        padding: '1.25rem 2.5rem',
        backgroundColor: 'var(--color-accent)',
    }
};
