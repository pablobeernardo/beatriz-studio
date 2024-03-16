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
  background-color: rgb(43,41,42);
  padding: 20px;

  img {
    max-width: 100%;
    width: 400px;
    height: 400px;
    
  }

  @media (max-width: 768px) {
    padding: 10px;
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
  margin-top: 40px;
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


export const ServicesSection = styled.section`
  margin-top: 40px;

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

export const Service = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 40px;
  animation: ${slideIn} 1s ease; 


  h3 {
    margin-top: 0;
  }

  p {
    color: #777;
  }

  img {
    max-width: 25%;
    border-radius: 8px;
    margin-right: 8px;
  }

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const Carousel = styled(Slider)`
  .slick-prev,
  .slick-next {
    background-color: rgba(0, 0, 0, 0.3);
    color: #fff;
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    transition: background-color 0.3s ease;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, 0.5);
    }
  }

  .slick-prev {
    left: -20px;
  }
  
  .slick-next {
    right: -20px;
  }

  .slick-dots {
    bottom: 10px;

    li {
      button {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: rgba(0, 0, 0, 0.3);
        transition: background-color 0.3s ease;

        &:hover {
          background-color: rgba(0, 0, 0, 0.5);
        }
      }
    }
  }
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
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #f5f5f5;

  @media (max-width: 768px) {
    padding: 10px;
  }
  `;

export const NavList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const NavItem = styled.li`
  margin: 0 20px;
  @media (max-width: 768px) {
    margin: 0 10px;
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

