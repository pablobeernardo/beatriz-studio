import React, { useEffect } from 'react';
import {
  Container,
  Header,
  Title,
  Subtitle,
  ServicesSection,
  Service,
  ContactSection,
  ContactButton,
  Footer,
  InstagramSection,
  InstagramLink,
  AboutMeSection,
  DescriptionMe,
  TitleMe,
  NavItem,
  NavLink,
  NavList,
  NavbarContainer,
  CourseDescription,
  CourseItem,
  CourseList,
  CourseTitle,
} from "./style/style";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import logomarca from '../assets/loo2.jpg';
import unha2 from '../assets/unha2.jpg';
import unha3 from '../assets/unha3.jpg';
import unha4 from '../assets/unha4.jpg';
import unha5 from '../assets/unha5.jpg';
import unha7 from '../assets/unha7.jpg';
import unha8 from '../assets/unha8.jpg';
import curso1 from '../assets/curso1.jpg';
import curso2 from '../assets/curso2.jpg';



export default function HomePage() {
 

  const handleOpenWhatsapp = () => {
    const phoneNumber = '+5524992737045';
    window.open(`https://wa.me/${phoneNumber}`);
  };

  return (
    <Container>
      <NavbarContainer>
        <NavList>
          <NavItem>
            <NavLink to="Sobre" smooth={true} duration={500} className="nav-link">
              Quem Sou Eu
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="Servicos" smooth={true} duration={500} className="nav-link">
              Serviços
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="Loja" smooth={true} duration={500} className="nav-link">
              Loja
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
      <Header>
        <img src={logomarca} alt='logomarca' />
        <Title>Beatriz Studio</Title>
        <Subtitle>Nail Designer</Subtitle>
      </Header>
      <AboutMeSection id='Sobre'>
        <TitleMe>Quem Sou Eu</TitleMe>
        <DescriptionMe>
          Olá! Sou Beatriz, uma entusiasta apaixonada pelo mundo do design de unhas. Com anos de experiência como Nail Designer, mergulhei de cabeça na arte de transformar unhas em telas elegantes e expressivas. Minha jornada começou com uma paixão por cores, texturas e formas, e desde então venho refinando minhas técnicas para oferecer a você um serviço de manicure único.
          <br />
          <br />
          Meu objetivo é criar um espaço onde cada cliente possa se sentir verdadeiramente especial. Não se trata apenas de unhas, mas de proporcionar uma experiência que eleve sua autoestima e estilo. Minhas criações vão além do esmalte e se tornam verdadeiras declarações artísticas. Trabalho com dedicação para transformar sua visita em momentos de puro encantamento.
          <br />
          <br />
          A cada pincelada, busco capturar a essência e personalidade de cada cliente. Cada detalhe é uma oportunidade de expressão criativa, e eu adoro explorar novas tendências e técnicas para garantir que você saia com unhas que são uma extensão autêntica de quem você é.
          <br />
          <br />
          Convido você a agendar um horário e mergulhar no mundo do design de unhas comigo. Vamos juntas transformar suas unhas em uma tela em branco para a criatividade e a beleza!
        </DescriptionMe>
      </AboutMeSection>

      <ServicesSection id='Servicos'>
        <TitleMe>Nossos Serviços</TitleMe>
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={5000}
        >
          <Service>
            <img src={unha2} alt="Manicure" />
            <img src={unha3} alt="Manicure" />
            <img src={unha4} alt="Manicure" />
            <TitleMe>Manicure e Pedicure</TitleMe>
            <p>Tratamento completo para suas unhas e mãos.</p>
          </Service>
          <Service>
            <img src={unha5} alt="Manicure" />
            <img src={unha7} alt="Manicure" />
            <img src={unha8} alt="Manicure" />
            <TitleMe>Manicure e Pedicure</TitleMe>
            <p>Tratamento completo para suas unhas e mãos.</p>
          </Service>
        </Carousel>
      </ServicesSection>

      <ContactButton style={{ marginTop: '23px' }} onClick={handleOpenWhatsapp}>Agendar horário</ContactButton>

      <ServicesSection id='Cursos'>
        <TitleMe>Nossos Cursos</TitleMe>
        <CourseList>
          <CourseItem>
            <img src={curso2} alt="Manicure" />
            <CourseTitle>Curso de Nail Designer Iniciante</CourseTitle>
            <CourseDescription>
              Aprenda desde as técnicas básicas até as mais avançadas de nail art. Este curso é perfeito para quem está começando e deseja se tornar um profissional qualificado.
            </CourseDescription>
          </CourseItem>
          <CourseItem>
            <img src={curso1} alt="Manicure" />
            <CourseTitle>Curso Avançado de Nail Art</CourseTitle>
            <CourseDescription>
              Este curso é projetado para aprimorar suas habilidades de design e estimular sua criatividade. Você aprenderá a criar nail arts únicas e personalizadas para suas clientes.
            </CourseDescription>
          </CourseItem>
        </CourseList>
      </ServicesSection>

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
        <ContactButton onClick={handleOpenWhatsapp}>Agendar Agora</ContactButton>
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
    </Container>
  );
}