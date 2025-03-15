import { ServicesSection, TitleMe, GalleriaFotosContainer, GalleryItem, GalleryImage, GalleryDescription, ButtonWhatsapp, DescriptionMe } from "../style/style";
import unha1 from '../../assets/antes1.png';
import unha2 from '../../assets/depois1.png';
import unha3 from '../../assets/antes2.png';
import unha4 from '../../assets/depois2.png';
import unha5 from '../../assets/antes3.png';
import unha6 from '../../assets/depois3.png';
import unha7 from '../../assets/antes4.png';
import unha8 from '../../assets/depois4.png';

export default function Trabalhos() {
    const works = [
        {
            beforeImage: unha1,
            afterImage: unha2,
            description: "Adorei o trabalho, sempre impecável.",
            cliente:"Fulana da Silva"
        },
        {
            beforeImage: unha3,
            afterImage: unha4,
            description: "Sempre inovando e excelente trabalho",
            cliente:"Ciclana Pereira"
        },
        {
            beforeImage: unha5,
            afterImage: unha6,
            description: "Adorei o trabalho, sempre impecável.",
            cliente:"Fulana da Silva"
        },
        {
            beforeImage: unha7,
            afterImage: unha8,
            description: "Sempre inovando e excelente trabalho",
            cliente:"Ciclana Pereira"
        }
    ];

    return (
        <ServicesSection id="Fotos">
            <TitleMe>Clientes</TitleMe>
            <DescriptionMe>
                Resultado de alguns dos nossos trabalhos e depoimentos de nossas clientes
            </DescriptionMe>
            <GalleriaFotosContainer>
                {works.map((work, index) => (
                    <GalleryItem key={index}>
                        <div className="image-wrapper">
                            <GalleryImage className="before" src={work.beforeImage} alt="Antes" />
                            <GalleryImage className="after" src={work.afterImage} alt="Depois" />
                        </div>
                        <GalleryDescription className="description">{work.description}</GalleryDescription>
                        <GalleryDescription className="cliente">{work.cliente}</GalleryDescription>
                    </GalleryItem>
                ))}
            </GalleriaFotosContainer>
        </ServicesSection>
    );
}
