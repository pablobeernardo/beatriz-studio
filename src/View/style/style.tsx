import styled, { keyframes } from 'styled-components';
import Slider from 'react-slick';
import {Link as ScroolLink} from 'react-scroll';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideIn = keyframes`
  from {
    transform: translateX(-50px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;


export const Container = styled.div`
  font-family: Arial, sans-serif;
  text-align: center;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
    }
`;


export const Header = styled.header`
  padding: 20px;
  position: relative;
  margin-top: 20px;
  
  img {
    width: 100%;
    height: auto;
  }

  @media (max-width: 768px) {
    padding: 10px;

    /* Ajustando a altura para dispositivos móveis */
    padding-top: 70px; 
    
    img {
      max-width: 100%;
      height: auto; /* Isso garante que a imagem seja adaptada */
    }
  }
`;

export const Title = styled.h1`
  color: rgb(207,175,132);
  font-family: "Montserrat";
  margin: 0;
`;

export const Subtitle = styled.p`
  color: rgb(207,175,132);
  font-family: "Montserrat";
  margin-bottom: 1;
`;

export const AboutMeSection = styled.div`
  margin-top: 20px;
  text-align: center;
  
`;

export const TitleMe = styled.h2`
  font-size: 28px;
  color: rgb(207,175,132);
  margin-bottom: 20px;
  font-family: "Montserrat";
  animation: ${fadeIn} 1s ease; 


  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const DescriptionMe = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #555;
  animation: ${fadeIn} 1s ease; 
`;




export const InstagramSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const InstagramLink = styled.a`
  background-color: rgb(207,175,132);
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #e62068;
  }
`;



export const ContactSection = styled.section`
  margin-top: 40px;
  background-color: #f5f5f5;
  padding: 20px;

  @media (max-width: 768px) {
    margin-top: 20px;
    padding: 10px;
  }
`;

export const ContactButton = styled.button`
  width: 150px;
  height:40px;
  background-color: rgb(207,175,132);
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease; 
  font-size: 14px;

  &:hover {
    background-color: #ff5588; 
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
  }
`;


export const Footer = styled.footer`
  margin-top: 40px;
  color: #888;

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

export const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: center; 
  align-items: center;
  padding: 20px;
  background-color: #fff;
  z-index: 1000; 

  @media (max-width: 768px) {
    width:100%;
    position: fixed; 
    justify-content: left; 
    top: 0;

    }
  }

  .menu-toggle {
    display: none; 

    @media (max-width: 768px) {
      display: block;
      font-size: 30px;
      background: none;
      border: none;
      cursor: pointer;
    }
  }
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: flex-start;
  list-style: none;
  padding: 0;
  margin: 0;

  @media (max-width: 768px) {
    display: none; 
    flex-direction: column;
    width: 100%;
    background-color: #fff;
    position: absolute;
    top: 60px;
    left: 15;
    padding: 10px 0;
  }

  &.open {
    display: block;
  }
`;


export const NavItem = styled.li`
  margin: 0 20px;

  @media (max-width: 768px) {
    margin: 10px 0;
  }
`;

export const MenuToggle = styled.div`
  display: none;
  cursor: pointer;
  font-size: 24px;
  position: absolute;
  top: 20px;
  right: 20px;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const NavLink = styled(ScroolLink)`
position: relative;
text-decoration: none;
color: #555;
transition: color 0.3s ease-in-out;
cursor: pointer;

&.active {
  color: rgb(207, 175, 132);
}

&::after {
  content: "";
  position: absolute;
  bottom: -3px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: rgb(207, 175, 132);
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.3s ease-in-out;
}

&:hover::after {
  transform: scaleX(1);
}

@media (max-width: 768px) {
  font-size: 14px;
}

`;

export const CoursesSection = styled.section`
  background-color: #f9f9f9;
  padding: 30px 0;
  text-align: center;

  @media (max-width: 768px) {
    padding: 60px 0;
  }
`;


export const CourseList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: 0;

  img {
    max-width: 100%;
    width: 450px;
    border-radius: 8px;
  }

  @media (max-width: 768px) {
    padding: 10px;
    overflow-x: hidden;

  }

`;

export const CourseItem = styled.li`
  width: 100%;
  max-width: 400px;
  margin: 0 20px 30px;
  background-color: #fff;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;

  @media (max-width: 768px) {
    max-width: 100%;
    margin: 0 10px 20px;
  }
`;

export const CourseTitle = styled.h3`
  font-size: 20px;
  color: #555;
  margin-bottom: 10px;
  font-family: "Montserrat";

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const CourseDescription = styled.p`
  font-size: 16px;
  color: #777;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const GalleryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;

  @media (max-width: 768px) {
    gap: 10px;
    overflow-x: hidden;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  overflow: hidden;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
  }
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 10px;
  }
  
`;

export const ModalContent = styled.div`
  position: relative;
  max-width: 80%;
  max-height: 80%;
  overflow: hidden;

  @media(min-width: 768px) {
    overflow: auto;
  
`;

export const CloseButton = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  color: black;
  font-size: 30px;
  cursor: pointer;
  z-index: 1;
`;

export const ModalImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;

  @min-width (max-width: 768px) {
    width: 100%;
    object-fit: cover;
  }
`;

export const MissionValuesSection = styled.section`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  flex-wrap: wrap;
`;

export const MissionValuesCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 900px;
  margin: 20px;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease; 
  
  &:hover {
    transform: scale(1.05); 
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const MissionValuesDescription = styled.div`
  font-size: 16px;
  line-height: 1.5;
  flex: 1;
  padding: 20px;
  text-align: left;
  margin-right: 20px;
  
  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 20px; 
    text-align: center;
  }
`;

export const ImageCard = styled.img`
  width: 40%; /* Ajuste a largura da imagem para não ocupar muito espaço */
  height: auto;
  border-radius: 8px;
  transition: transform 0.3s ease; /* Animação suave ao passar o mouse */
  

  @media (max-width: 768px) {
    width: 80%; /* Ajuste a largura da imagem em telas menores */
    margin-bottom: 20px; /* Espaçamento abaixo da imagem */
  }
`;

export const ServicesSection = styled.section`
  margin-top: 40px;

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

export const ServiceCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 300px; /* Define a largura dos cards */

  @media (max-width: 768px) {
    width: 90%; /* Ajusta o tamanho para telas menores */
    margin: 15px auto; /* Garante espaçamento adequado no mobile */
  }
`;

export const ServiceImage = styled.img`
  width: 300px; /* Define uma largura fixa */
  height: 200px; /* Define uma altura fixa */
  object-fit: cover; /* Corta a imagem para preencher sem distorcer */
  border-radius: 8px;
  margin-bottom: 15px;
`;


export const ServiceDescription = styled.div`
  text-align: center;

  p {
    font-size: 14px;
    margin-bottom: 15px;
  }
`;

export const ButtonWhatsapp = styled.a`
  width: 150px;
  height:40px;
  background-color: rgb(207,175,132);
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease; 
  font-size: 14px;
  text-decoration: none;

  &:hover {
    background-color: #ff5588; 
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
  }
`;

export const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); /* Faz os cards se ajustarem automaticamente */
  gap: 20px; /* Espaçamento entre os cards */
  margin-top: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Cards empilhados em telas menores */
  }
`;

export const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); /* Cards de tamanhos ajustáveis */
  gap: 20px;
  margin-top: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Cards empilhados em telas menores */
  }
`;

export const ProductItem = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 15px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

`;

export const ProductImage = styled.img`
  width: 100%;
  max-width: 200px; /* Limita o tamanho da imagem */
  height: auto;
  border-radius: 8px;
  margin-bottom: 10px;

  &:hover {
    transform: scale(1.05); /* Aumenta o card ao passar o mouse */
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

export const ProductTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
  font-weight: bold;
`;

export const ProductDescription = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 15px;
`;

export const GalleriaFotosContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  padding: 20px;
  justify-items: center; /* Ajusta as colunas para ficarem centralizadas */
`;

export const GalleryItem = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  padding: 10px;
  background-color: #fff;
  
  &:hover {
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2); /* Sombras mais intensas ao passar o mouse */
  }

  .image-wrapper {
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    position: relative;
    width: 100%;
    height: 200px; /* Mantém o tamanho fixo */

  }

  .before, .after {
    width: 50%;
    height: auto;
    transition: transform 0.3s ease, opacity 0.3s ease;
    border-radius: 8px;
  }

  &:hover .before {
    transform: translateX(-100%); /* Imagem "antes" se move para a esquerda */
  }

  &:hover .after {
    transform: translateX(0); /* Imagem "depois" aparece */
  }
`;

export const GalleryDescription = styled.p`
  font-size: 14px;
  color: #333;
  text-align: center;
  margin: 10px 0;
  padding: 0 5px;
`;

export const GalleryImage = styled.img`
  width: 300px; /* Define uma largura fixa */
  height: 200px; /* Define uma altura fixa */
  object-fit: cover; /* Corta a imagem para preencher sem distorcer */
  transition: opacity 0.5s ease;
  border-radius: 8px;
  padding: 1px;
`;
