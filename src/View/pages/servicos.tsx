import { ServicesSection, TitleMe, ServiceCard, ServiceImage, ServiceDescription, ButtonWhatsapp, ServiceGrid, DescriptionMe } from "../style/style";
import unha2 from '../../assets/along.png';
import unha3 from '../../assets/esmalt.png';
import unha4 from '../../assets/mani.png';
import unha5 from '../../assets/pedi.png';

export default function Servicos() {
  const services = [
    {
      title: "Alongamento",
      description: "Alongamento de unhas com técnicas modernas e durabilidade.",
      image: unha2,
      whatsappMessage: "Olá! Gostaria de saber o valor do serviço de alongamento de unhas."
    },
    {
      title: "Esmaltação em Gel",
      description: "Esmaltação com gel para unhas perfeitas e duradouras.",
      image: unha3,
      whatsappMessage: "Olá! Gostaria de saber o valor do serviço de esmaltação em gel."
    },
    {
      title: "Manicure Tradicional",
      description: "Cuidados e embelezamento para suas unhas de forma clássica.",
      image: unha4,
      whatsappMessage: "Olá! Gostaria de saber o valor do serviço de manicure tradicional."
    },
    {
      title: "Pedicure Tradicional",
      description: "Cuidamos dos seus pés com o tradicional e clássica pedicure.",
      image: unha5,
      whatsappMessage: "Olá! Gostaria de saber o valor do serviço de pedicure tradicional."
    },

  ];

  const generateWhatsappLink = (message: string) => {
    const whatsappBaseUrl = "https://wa.me/+55";
    const phoneNumber = "24992737045";
    return `${whatsappBaseUrl}${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <ServicesSection id="Servicos">
      <TitleMe>Nossos Serviços</TitleMe>
      <DescriptionMe>
        Conheça os melhores tratamentos para suas unhas e mãos, com produtos de alta qualidade, além de ter contato com nossos profissionais de beleza.
      </DescriptionMe>
      <ServiceGrid>
        {services.map(service => (
          <ServiceCard key={service.title}>
            <TitleMe>{service.title}</TitleMe>
            <ServiceImage src={service.image} alt={service.title} />
            <DescriptionMe>
              <p>{service.description}</p>
              <ButtonWhatsapp
                href={generateWhatsappLink(service.whatsappMessage)}
                target="_blank"
              >
                Consulte Valores
              </ButtonWhatsapp>
            </DescriptionMe>
          </ServiceCard>
        ))}
      </ServiceGrid>
    </ServicesSection>
  );
}
