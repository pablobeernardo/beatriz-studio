import { useState } from 'react';
import { NavbarContainer, NavList, NavItem, NavLink } from '../style/style';

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
                    <NavLink to="Sobre" smooth={true} duration={500} onClick={() => setIsMenuOpen(false)}>
                        Início
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="Studio" smooth={true} duration={500} onClick={() => setIsMenuOpen(false)}>
                        Studio
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="Servicos" smooth={true} duration={500} onClick={() => setIsMenuOpen(false)}>
                        Serviços
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="Loja" smooth={true} duration={500} onClick={() => setIsMenuOpen(false)}>
                        Loja
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="Fotos" smooth={true} duration={500} onClick={() => setIsMenuOpen(false)}>
                        Fotos
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="Contato" smooth={true} duration={500} onClick={() => setIsMenuOpen(false)}>
                        Contato
                    </NavLink>
                </NavItem>
            </NavList>
        </NavbarContainer>
    );
};

export default Navbar;
