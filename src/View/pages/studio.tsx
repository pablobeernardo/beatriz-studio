import React, { useState } from 'react';
import { AboutMeSection, TitleMe, DescriptionMe, GalleryContainer, Modal, ModalContent, CloseButton, ModalImage, ImageContainer } from "../style/style";
import curso1 from '../../assets/curso1.jpg';
import curso2 from '../../assets/service3.png';
import unha2 from '../../assets/service2.png';
import unha3 from '../../assets/service1.png';


export default function Studio() {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');
    const images:string[] = [curso1, curso2, unha2, unha3];

    const openModal = (image:string) => {
        setSelectedImage(image);
        setModalOpen(true);
    };

    const closeModal = () => {
        setSelectedImage('');
        setModalOpen(false);
    };

    return (
        <AboutMeSection id='Studio'>
            <TitleMe>Nosso Studio</TitleMe>
            <DescriptionMe>
                Nosso Studio é um espaço aconchegante, disponhamos para você internet de alta velocidade, TV com as principais plataformas de streaming para você acompanhar seus seriados e filmes, coffe-break, WC e toda uma estrutura para executar um trabalho duradouro e impecável em suas unhas. Atualmente disponibilizamos 2 salas de atendimento para unhas, 1 para serviços de estética e 1 para cabelo.
            </DescriptionMe>
            <GalleryContainer>
                {images.map((image, index) => (
                    <ImageContainer key={index} onClick={() => openModal(image)}>
                        <img src={image} alt={`Image ${index}`} />
                    </ImageContainer>
                ))}
                {modalOpen && (
                    <Modal onClick={closeModal}>
                        <ModalContent>
                            <CloseButton onClick={closeModal}>&times;</CloseButton>
                            <ModalImage src={selectedImage} alt="Imagem em tamanho original" />
                        </ModalContent>
                    </Modal>
                )}
            </GalleryContainer>
        </AboutMeSection>
    )
}
