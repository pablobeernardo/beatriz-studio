import React, { useEffect } from 'react';
import {
  Container,
  Header,
  Title,
  Subtitle,
  ServicesSection,
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
import logomarca from '../assets/capa.jpg';
import unha2 from '../assets/unha2.jpg';
import unha3 from '../assets/unha3.jpg';
import unha4 from '../assets/unha4.jpg';
import unha5 from '../assets/unha5.jpg';
import unha7 from '../assets/unha7.jpg';
import unha8 from '../assets/unha8.jpg';
import curso1 from '../assets/curso1.jpg';
import curso2 from '../assets/curso2.jpg';
import Navbar from './components/navbar';
import Sobre from './pages/sobre';
import Servicos from './pages/servicos';
import Loja from './pages/loja';
import Contato from './pages/contato';
import Studio from './pages/studio';
import Trabalhos from './pages/galeria';



export default function HomePage() {


  const handleOpenWhatsapp = () => {
    const phoneNumber = '+5524992737045';
    window.open(`https://wa.me/${phoneNumber}`);
  };

  return (
    <>
      <Navbar />
      <Container>
        <Header>
          <img src={logomarca} alt='logomarca' />
        </Header>
        <Sobre />
        <Studio />
        <Servicos />
        <Loja />
        <Trabalhos />
        <Contato handleOpenWhatsapp={handleOpenWhatsapp} />
      </Container>
    </>
  );
}