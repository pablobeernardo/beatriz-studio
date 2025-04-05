import { useState } from 'react';
import { NavbarContainer, NavList, NavItem } from '../style/style';
import { Link as ScrollLink } from 'react-scroll'; // Importa o Link do react-scroll
import { Link as RouterLink } from 'react-router-dom'; // Importa o Link do react-router-dom

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <NavbarContainer>
            <button className="menu-toggle" onClick={toggleMenu}>
                &#9776;
            </button>
            <NavList className={isMenuOpen ? 'open' : ''}>
                <NavItem>
                    <ScrollLink to="Sobre" smooth={true} duration={500} onClick={() => setIsMenuOpen(false)}>
                        Início
                    </ScrollLink>
                </NavItem>
                <NavItem>
                    <ScrollLink to="Studio" smooth={true} duration={500} onClick={() => setIsMenuOpen(false)}>
                        Studio
                    </ScrollLink>
                </NavItem>
                <NavItem>
                    <ScrollLink to="Servicos" smooth={true} duration={500} onClick={() => setIsMenuOpen(false)}>
                        Serviços
                    </ScrollLink>
                </NavItem>
                <NavItem>
                    <ScrollLink to="Loja" smooth={true} duration={500} onClick={() => setIsMenuOpen(false)}>
                        Loja
                    </ScrollLink>
                </NavItem>
                <NavItem>
                    <ScrollLink to="Fotos" smooth={true} duration={500} onClick={() => setIsMenuOpen(false)}>
                        Fotos
                    </ScrollLink>
                </NavItem>
                <NavItem>
                    <ScrollLink to="Contato" smooth={true} duration={500} onClick={() => setIsMenuOpen(false)}>
                        Contato
                    </ScrollLink>
                </NavItem>

                {/* Aqui é o LOGIN que muda de página */}
                <NavItem>
                    <RouterLink
                        to="/login"
                        onClick={() => setIsMenuOpen(false)}
                        style={{ textDecoration: 'none', color: 'inherit' }} // Só pra manter o estilo igual
                        target='_blank'
                    >
                        Painel
                    </RouterLink>
                </NavItem>
            </NavList>
        </NavbarContainer>
    );
};

export default Navbar;
