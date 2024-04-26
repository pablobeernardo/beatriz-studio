import { Carousel } from "react-responsive-carousel";
import { ServicesSection, TitleMe, Service } from "../style/style";
import unha2 from '../../assets/unha2.jpg';
import unha3 from '../../assets/unha3.jpg';
import unha4 from '../../assets/unha4.jpg';
import unha5 from '../../assets/unha5.jpg';
import unha7 from '../../assets/unha7.jpg';
import unha8 from '../../assets/unha8.jpg';

export default function Servicos() {
    return(
        <ServicesSection id='Servicos'>
        <TitleMe>Nossos Serviços</TitleMe>
        <Carousel
          showArrows={false}
          infiniteLoop={true}
          showThumbs={true}
          showStatus={false}
          autoPlay={true}
          interval={2000}
        >
          <Service>
            <img src={unha2} alt="Manicure" />
            <TitleMe>Manicure e Pedicure</TitleMe>
            <p>Tratamento completo para suas unhas e mãos.</p>
          </Service>
          <Service>
            <img src={unha3} alt="Manicure" />
            <TitleMe>Manicure e Pedicure</TitleMe>
            <p>Tratamento completo para suas unhas e mãos.</p>
          </Service>
          <Service>
            <img src={unha4} alt="Manicure" />
            <TitleMe>Manicure e Pedicure</TitleMe>
            <p>Tratamento completo para suas unhas e mãos.</p>
          </Service>
          <Service>
            <img src={unha5} alt="Manicure" />
            <TitleMe>Manicure e Pedicure</TitleMe>
            <p>Tratamento completo para suas unhas e mãos.</p>
          </Service>
          <Service>
            <img src={unha7} alt="Manicure" />
            <TitleMe>Manicure e Pedicure</TitleMe>
            <p>Tratamento completo para suas unhas e mãos.</p>
          </Service>
          <Service>
            <img src={unha8} alt="Manicure" />
            <TitleMe>Manicure e Pedicure</TitleMe>
            <p>Tratamento completo para suas unhas e mãos.</p>
          </Service>
        </Carousel>
      </ServicesSection>
    )
}