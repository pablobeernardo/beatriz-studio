import { useState } from "react";
import {
  ServicesSection,
  TitleMe,
  ServiceCard,
  ServiceImage,
  ButtonWhatsapp,
  ServiceGrid,
  DescriptionMe
} from "../style/style";

import unha2 from '../../assets/along.png';
import unha3 from '../../assets/esmalt.png';
import unha4 from '../../assets/mani.png';
import unha5 from '../../assets/pedi.png';
import AgendamentoModal from "../components/modal-agendamento";

export default function Servicos() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [servicoSelecionado, setServicoSelecionado] = useState("");

  const services = [
    {
      title: "Alongamento",
      description: "Alongamento de unhas com técnicas modernas e durabilidade.",
      image: unha2,
    },
    {
      title: "Esmaltação em Gel",
      description: "Esmaltação com gel para unhas perfeitas e duradouras.",
      image: unha3,
    },
    {
      title: "Manicure Tradicional",
      description: "Cuidados e embelezamento para suas unhas de forma clássica.",
      image: unha4,
    },
    {
      title: "Pedicure Tradicional",
      description: "Cuidamos dos seus pés com o tradicional e clássica pedicure.",
      image: unha5,
    },
  ];

  const abrirModal = (tituloServico: string) => {
    setServicoSelecionado(tituloServico);
    setModalIsOpen(true);
  };

  return (
    <>
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
                <ButtonWhatsapp onClick={() => abrirModal(service.title)}>
                  Agendar Agora
                </ButtonWhatsapp>
              </DescriptionMe>
            </ServiceCard>
          ))}
        </ServiceGrid>
      </ServicesSection>
      <AgendamentoModal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        servico={servicoSelecionado}
      />
    </>
  );
}
