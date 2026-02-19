import problemImg from '../assets/images/problem.jpg';

export const ProblemSection = () => {
    return (
        <section id="problem" className="section-padding" style={{ backgroundColor: '#fff' }}>
            <div className="container">
                <div style={styles.gridContainer}>
                    <div style={styles.content}>
                        <h2 style={styles.heading}>A Agonia</h2>
                        <h3 style={styles.subHeading}>
                            O seu maior gargalo não é a falta de dinheiro. <br />
                            <span className="text-accent">É a falta de tempo.</span>
                        </h3>

                        <div style={styles.textGrid}>
                            <p className="text-muted">
                                Você sabe que a gestão interna é a base de tudo — das vendas à entrega.
                                Mas cuidar dessa base "como se cuida de um bebê" exige um tempo que você simplesmente não tem.
                            </p>
                            <p className="text-muted">
                                Muitos empresários já entenderam que precisam delegar a operação técnica, mas continuam presos ao financeiro.
                                Enquanto você estiver mergulhado em planilhas e contas a pagar, sua empresa estará sem um estrategista no comando.
                            </p>
                        </div>
                    </div>
                    <div style={styles.imageContainer}>
                        <img
                            src={problemImg}
                            alt="Mesa de escritório bagunçada representando caos financeiro"
                            style={styles.image}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const styles = {
    gridContainer: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: '4rem',
        alignItems: 'center',
    },
    content: {
        maxWidth: '100%',
    },
    heading: {
        fontSize: '1rem',
        textTransform: 'uppercase' as const,
        letterSpacing: '0.05em',
        color: 'var(--color-primary)',
        marginBottom: '1rem',
        fontWeight: 600,
    },
    subHeading: {
        fontSize: 'clamp(2rem, 4vw, 3rem)',
        fontWeight: 700,
        marginBottom: '2rem',
        lineHeight: 1.2,
        color: 'var(--color-text-main)',
    },
    textGrid: {
        display: 'flex',
        flexDirection: 'column' as const,
        gap: '1.5rem',
        fontSize: '1.125rem',
        lineHeight: 1.7,
        color: 'var(--color-text-muted)'
    },
    imageContainer: {
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover' as const,
        display: 'block',
    }
};
