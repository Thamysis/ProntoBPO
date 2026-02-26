import { useState } from 'react';
import { Instagram, Linkedin, Mail } from 'lucide-react';
import logoImg from '../assets/images/WithTextBackgroundGrey.svg';
import { LegalModal } from './LegalModal'; // Ensure this matches file location

export const Footer = () => {
    const [modalType, setModalType] = useState<'terms' | 'privacy' | null>(null);

    const closeModal = () => setModalType(null);

    const termsContent = (
        <div className="space-y-4">
            <div>
                <h3 className="text-lg font-bold mb-2">1. Aceitação</h3>
                <p>Ao acessar e usar este site, você aceita e concorda em estar vinculado pelos termos e disposições deste acordo.</p>
            </div>
            <div>
                <h3 className="text-lg font-bold mb-2">2. Serviços</h3>
                <p>A Pronto B.P.O. oferece serviços de Terceirização de Processos de Negócios (BPO) financeiro, administrativo e de recursos humanos. Os detalhes específicos de cada serviço são definidos em contrato separado.</p>
            </div>
            <div>
                <h3 className="text-lg font-bold mb-2">3. Uso do Site</h3>
                <p>Este site destina-se a fornecer informações sobre nossos serviços. Você concorda em não usar o site para fins ilegais ou proibidos.</p>
            </div>
            <div>
                <h3 className="text-lg font-bold mb-2">4. Propriedade Intelectual</h3>
                <p>Todo o conteúdo deste site, incluindo textos, gráficos, logotipos e imagens, é propriedade da Pronto B.P.O. e está protegido por leis de direitos autorais.</p>
            </div>
            <div>
                <h3 className="text-lg font-bold mb-2">5. Limitação de Responsabilidade</h3>
                <p>A Pronto B.P.O. não será responsável por quaisquer danos diretos, indiretos, incidentais ou consequentes decorrentes do uso ou incapacidade de usar nosso site.</p>
            </div>
        </div>
    );

    const privacyContent = (
        <div className="space-y-4">
            <p className="italic mb-4">Sua privacidade é importante para nós. É política da Pronto B.P.O. respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar neste site.</p>
            <div>
                <h3 className="text-lg font-bold mb-2">1. Coleta de Informações</h3>
                <p>Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço (ex: nome e telefone para contato via WhatsApp). Fazemos isso por meios justos e legais, com o seu conhecimento e consentimento.</p>
            </div>
            <div>
                <h3 className="text-lg font-bold mb-2">2. Uso de Informações</h3>
                <p>Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis para evitar perdas e roubos.</p>
            </div>
            <div>
                <h3 className="text-lg font-bold mb-2">3. Compartilhamento</h3>
                <p>Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.</p>
            </div>
            <div>
                <h3 className="text-lg font-bold mb-2">4. Cookies</h3>
                <p>Nosso site pode usar cookies para melhorar a experiência do usuário. Você é livre para recusar nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.</p>
            </div>
        </div>
    );

    return (
        <footer className="bg-slate-900 text-slate-300 py-12 md:py-16">
            <div className="container">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
                    <div className="flex flex-col items-center md:items-start gap-4">
                        <img src={logoImg} alt="Pronto B.P.O" className="h-28 w-auto opacity-90 object-contain" />
                        <p className="text-sm max-w-xs text-center md:text-left text-slate-400">
                            Especializada na terceirização de tarefas administrativas, financeiras, contratuais e processuais.
                        </p>
                    </div>

                    <div className="flex gap-6">
                        <SocialLink href="https://instagram.com/prontobpobr" icon={<Instagram size={20} />} />
                        <SocialLink href="https://wa.me/5519987315837" icon={<Linkedin size={20} />} />
                        <SocialLink href="mailto:prontobpo.br@gmail.com" icon={<Mail size={20} />} />
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
                    <p className="text-slate-500">
                        © {new Date().getFullYear()} Pronto B.P.O. Todos os direitos reservados.
                    </p>
                    <div className="flex gap-6">
                        <button onClick={() => setModalType('terms')} className="hover:text-white transition-colors">Termos de Uso</button>
                        <button onClick={() => setModalType('privacy')} className="hover:text-white transition-colors">Política de Privacidade</button>
                    </div>
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

const SocialLink = ({ href, icon }: { href: string, icon: React.ReactNode }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
    >
        {icon}
    </a>
);
