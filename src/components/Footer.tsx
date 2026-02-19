import { useState } from 'react';
import logoImg from '../assets/images/Logo 2.png';
import { LegalModal } from './LegalModal'; // Ensure this matches file location

export const Footer = () => {
    const [modalType, setModalType] = useState<'terms' | 'privacy' | null>(null);

    const closeModal = () => setModalType(null);

    const termsContent = (
        <div>
            <h3>1. Aceitação</h3>
            <p>Ao acessar e usar este site, você aceita e concorda em estar vinculado pelos termos e disposições deste acordo.</p>
            <h3>2. Serviços</h3>
            <p>A Pronto B.P.O. oferece serviços de Terceirização de Processos de Negócios (BPO) financeiro, administrativo e de recursos humanos. Os detalhes específicos de cada serviço são definidos em contrato separado.</p>
            <h3>3. Uso do Site</h3>
            <p>Este site destina-se a fornecer informações sobre nossos serviços. Você concorda em não usar o site para fins ilegais ou proibidos.</p>
            <h3>4. Propriedade Intelectual</h3>
            <p>Todo o conteúdo deste site, incluindo textos, gráficos, logotipos e imagens, é propriedade da Pronto B.P.O. e está protegido por leis de direitos autorais.</p>
            <h3>5. Limitação de Responsabilidade</h3>
            <p>A Pronto B.P.O. não será responsável por quaisquer danos diretos, indiretos, incidentais ou consequentes decorrentes do uso ou incapacidade de usar nosso site.</p>
        </div>
    );

    const privacyContent = (
        <div>
            <p>Sua privacidade é importante para nós. É política da Pronto B.P.O. respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar neste site.</p>
            <h3>1. Coleta de Informações</h3>
            <p>Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço (ex: nome e telefone para contato via WhatsApp). Fazemos isso por meios justos e legais, com o seu conhecimento e consentimento.</p>
            <h3>2. Uso de Informações</h3>
            <p>Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis para evitar perdas e roubos.</p>
            <h3>3. Compartilhamento</h3>
            <p>Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.</p>
            <h3>4. Cookies</h3>
            <p>Nosso site pode usar cookies para melhorar a experiência do usuário. Você é livre para recusar nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.</p>
        </div>
    );

    return (
        <footer style={styles.footer}>
            <div className="container" style={styles.container}>
                <div>
                    <img src={logoImg} alt="Pronto B.P.O" style={styles.logo} />
                    <p style={styles.copyright}>© {new Date().getFullYear()} Pronto B.P.O. Todos os direitos reservados.</p>
                </div>
                <div style={styles.links}>
                    <button onClick={() => setModalType('terms')} style={styles.linkButton}>Termos de Uso</button>
                    <button onClick={() => setModalType('privacy')} style={styles.linkButton}>Política de Privacidade</button>
                </div>
            </div>

            <LegalModal
                isOpen={modalType === 'terms'}
                onClose={closeModal}
                title="Termos de Uso"
                content={termsContent}
            />
            <LegalModal
                isOpen={modalType === 'privacy'}
                onClose={closeModal}
                title="Política de Privacidade"
                content={privacyContent}
            />
        </footer>
    );
};

const styles = {
    footer: {
        backgroundColor: 'var(--color-primary)',
        color: '#f1f5f9',
        padding: '3rem 0',
    },
    container: {
        display: 'flex',
        flexDirection: 'row' as const, // Default for larger screens
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap' as const,
        gap: '2rem',
    },
    logo: {
        height: '60px',
        marginTop: '1rem',
        marginBottom: '1rem',
        borderRadius: '8px',
    },
    copyright: {
        fontSize: '0.875rem',
        color: '#94a3b8',
    },
    links: {
        display: 'flex',
        gap: '2rem',
    },
    linkButton: {
        color: '#cbd5e1',
        textDecoration: 'none',
        fontSize: '0.875rem',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: 0,
        fontFamily: 'inherit',
    }
};
