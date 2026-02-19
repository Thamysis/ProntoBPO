import heroBg from '../assets/images/hero-bg.jpg';
import logoImg from '../assets/images/Logo.png';

export const Hero = () => {
    return (
        <section id="hero" style={styles.section}>
            <div className="container" style={styles.container}>
                <div style={styles.logoContainer}>
                    <img src={logoImg} alt="Pronto B.P.O Logo" style={styles.logo} />
                </div>
                <h1 style={styles.headline}>
                    Você já tirou o dono do operacional. <br />
                    <span className="text-primary">Agora, tire o dono do financeiro.</span>
                </h1>
                <p style={styles.subheadline}>
                    Na Pronto B.P.O, assumimos a burocracia para que você recupere o seu tempo e foque no que realmente importa: fazer sua empresa crescer.
                </p>
                <a
                    href="https://wa.me/5516936182112?text=Quero%20meu%20primeiro%20m%C3%AAs%20gratuito"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    style={styles.cta}
                >
                    Quero meu primeiro mês gratuito
                </a>
            </div>
        </section>
    );
};

const styles = {
    section: {
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: `linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(243, 229, 245, 0.9) 100%), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        textAlign: 'center' as const,
        padding: '2rem 0',
        position: 'relative' as const,
        overflow: 'hidden',
    },
    container: {
        maxWidth: '800px',
        display: 'flex',
        flexDirection: 'column' as const,
        alignItems: 'center',
        gap: '1rem',
        position: 'relative' as const,
        zIndex: 1,
    },
    badge: {
        textTransform: 'uppercase' as const,
        letterSpacing: '0.2em',
        fontSize: '0.875rem',
        fontWeight: 700,
        color: 'var(--color-primary)',
        marginBottom: '1rem',
        backgroundColor: 'white',
        padding: '0.5rem 1rem',
        borderRadius: '9999px',
        boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
    },
    headline: {
        fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
        fontWeight: 800,
        lineHeight: 1.1,
        color: 'var(--color-text-main)',
        letterSpacing: '-0.02em',
    },
    subheadline: {
        fontSize: '1.25rem',
        color: 'var(--color-text-muted)',
        maxWidth: '600px',
        lineHeight: 1.6,
    },
    cta: {
        fontSize: '1.125rem',
        padding: '1rem 2.5rem',
        borderRadius: '9999px',
        fontWeight: 600,
        boxShadow: '0 10px 15px -3px rgba(110, 0, 155, 0.2)',
    },
    logoContainer: {
        marginBottom: '0.5rem',
    },
    logo: {
        height: '120px',
        width: 'auto',
        maxWidth: '100%',
        objectFit: 'contain' as const,
    },
};
