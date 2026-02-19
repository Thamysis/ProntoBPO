import solutionImg from '../assets/images/solution.jpg';

export const SolutionSection = () => {
    return (
        <section id="solution" className="section-padding" style={{ backgroundColor: 'var(--color-surface)' }}>
            <div className="container">
                <div style={styles.gridContainer}>
                    <div style={styles.imageContainer}>
                        <img
                            src={solutionImg}
                            alt="Equipe trabalhando em sintonia"
                            style={styles.image}
                        />
                    </div>
                    <div style={styles.content}>
                        <h2 style={styles.heading}>A Solução</h2>
                        <h3 style={styles.subHeading}>
                            Assumimos a rotina. <br />
                            <span className="text-primary">Devolvemos a liberdade.</span>
                        </h3>

                        <p style={styles.text}>
                            A Pronto B.P.O nasceu da experiência real com o sistema Indicador.app.
                            Percebemos que os donos de empresa queriam delegar as tarefas internas, mas não sabiam como.
                        </p>
                        <p style={styles.text}>
                            Nós somos a ponte. Assumimos toda a sua rotina administrativa e financeira de forma profissional,
                            organizada e 100% transparente. <br />
                            <strong>Você ganha clareza para decidir e fôlego para executar.</strong>
                        </p>
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
        textAlign: 'left' as const,
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
        marginBottom: '2rem',
        lineHeight: 1.2,
        color: '#1e293b',
    },
    text: {
        fontSize: '1.125rem',
        lineHeight: 1.7,
        color: '#475569',
        marginBottom: '1.5rem',
    },
    imageContainer: {
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        order: -1, // Ensure image is first on mobile if stacked, or left on desktop
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover' as const,
        display: 'block',
    }
};
