import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ContactSection, TitleMe, ContactButton, InstagramSection, InstagramLink, Footer } from "../style/style";

interface Props{
    handleOpenWhatsapp: () => void;

}

export default function Contato(props: Props) {
    return (
        <footer>
            <ContactSection id='Contato'>
                <TitleMe>Entre em Contato</TitleMe>
                <p>Rua Presidente Vargas, 269 - Centro - Três Rios - RJ</p>
                <a
                    href="https://goo.gl/maps/NHAb6i5cTyYKZzMM6"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none' }}
                >
                    Ver no Google Maps
                </a>
                <p>Agende um horário e realce a sua beleza.</p>
                <ContactButton onClick={props.handleOpenWhatsapp}>Agendar Agora</ContactButton>
            </ContactSection>

            <InstagramSection>
                <InstagramLink href="https://www.instagram.com/beatrizpereira.studio/?igshid=MzRlODBiNWFlZA%3D%3D&fbclid=IwAR2tOoGQD9JPflrO32gCq2tUZNyYw2pGTbmZRKYHCUqSdKJ5iG9Bv_Z3shY">
                    <FontAwesomeIcon icon={faInstagram} style={{ marginRight: '8px' }} />
                    Siga-nos no Instagram
                </InstagramLink>
            </InstagramSection>

            <Footer>
                <p>&copy; 2023 Studio de Nail Designer. Todos os direitos reservados.</p>
            </Footer>
        </footer>
    )
}