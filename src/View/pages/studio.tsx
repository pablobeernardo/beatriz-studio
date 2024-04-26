import React, { useState } from 'react';
import { AboutMeSection, TitleMe, DescriptionMe, GalleryContainer, Modal, ModalContent, CloseButton, ModalImage, ImageContainer } from "../style/style";
import curso1 from '../../assets/curso1.jpg';
import curso2 from '../../assets/curso2.jpg';
import unha2 from '../../assets/unha2.jpg';
import unha3 from '../../assets/unha3.jpg';
import unha4 from '../../assets/unha4.jpg';
import unha5 from '../../assets/unha5.jpg';
import unha7 from '../../assets/unha7.jpg';
import unha8 from '../../assets/unha8.jpg';


export default function Studio() {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');
    const images:string[] = [curso1, curso2, unha2, unha3, unha4, unha5, unha7, unha8];

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
                O Studio Beatriz Nail Designer está localizado na Rua Presidente Vargas, 269, no centro da cidade. Estamos situados em uma região de fácil acesso, próxima a grandes lojas, restaurantes e em um importante polo comercial da cidade.                <br />
                <br />
                <br />
                Nosso Studio é um espaço seguro, aconchegante, disponhamos para você internet de alta velocidade, TV com as principais plataformas de streaming para você acompanhar seus seriados e filmes, coffe-break, WC e toda uma estrutura para executar um trabalho duradouro e impecável em suas unhas. Atualmente disponibilizamos 2 salas de atendimento para unhas, 1 para serviços de estética e 1 para cabelo.
                <br />
                <br />
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
