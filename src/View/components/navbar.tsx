import { NavbarContainer, NavList, NavItem, NavLink } from "../style/style";

export default function Navbar() {
    return (
        <NavbarContainer>
            <NavList>
                <NavItem>
                    <NavLink to="Sobre" smooth={true} duration={500} className="nav-link">
                        Início
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="Studio" smooth={true} duration={500} className="nav-link">
                        Studio
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="Servicos" smooth={true} duration={500} className="nav-link">
                        Serviços
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="Cursos" smooth={true} duration={500} className="nav-link">
                        Cursos
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="Contato" smooth={true} duration={500} className="nav-link">
                        Contato
                    </NavLink>
                </NavItem>
            </NavList>
        </NavbarContainer>
    )
}