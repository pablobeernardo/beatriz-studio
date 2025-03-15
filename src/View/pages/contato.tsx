import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ContactSection, TitleMe, ContactButton, InstagramSection, InstagramLink, Footer, DescriptionMe } from "../style/style";

interface Props{
    handleOpenWhatsapp: () => void;

}

export default function Contato(props: Props) {
    return (
        <footer>
            <ContactSection id='Contato'>
                <TitleMe>Entre em Contato</TitleMe>
                <DescriptionMe>Galeria Martha Dutra, Praça São Sebastião - Três Rios, RJ, 25804-080</DescriptionMe>
                <a
                    href="https://maps.app.goo.gl/8WPaojMcKgxnfTnF9"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none' }}
                >
                    Ver no Google Maps
                </a>
                <DescriptionMe>Agende um horário e realce a sua beleza.</DescriptionMe>
                <ContactButton onClick={props.handleOpenWhatsapp}>Agendar Agora</ContactButton>
            </ContactSection>

            <InstagramSection>
                <InstagramLink href="https://www.instagram.com/beatrizpereira.studio/?igshid=MzRlODBiNWFlZA%3D%3D&fbclid=IwAR2tOoGQD9JPflrO32gCq2tUZNyYw2pGTbmZRKYHCUqSdKJ5iG9Bv_Z3shY">
                    <FontAwesomeIcon icon={faInstagram} style={{ marginRight: '8px' }} />
                    Siga-nos no Instagram
                </InstagramLink>
            </InstagramSection>

            <Footer>
                <DescriptionMe>&copy; 2025 Studio de Nail Designer. Todos os direitos reservados.</DescriptionMe>
            </Footer>
        </footer>
    )
}