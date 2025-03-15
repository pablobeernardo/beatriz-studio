import { ServicesSection, TitleMe, ProductList, ProductItem, ProductTitle, ProductDescription, ProductImage, DescriptionMe } from "../style/style";
import produto1 from '../../assets/volia1.png';
import produto2 from '../../assets/volia2.png';
import produto3 from '../../assets/volia3.png';
import produto4 from '../../assets/volia4.png';
import produto5 from '../../assets/volia5.png';


export default function Loja() {
    const products = [
        {
            title: "Base Gel Volia",
            description: "Base gel de alta durabilidade, perfeita para uma aplicação profissional e resultados duradouros.",
            image: produto1
        },
        {
            title: "Esmalte Gel Volia",
            description: "Esmalte gel de cores vibrantes, com acabamento perfeito e secagem rápida.",
            image: produto2
        },
        {
            title: "Top Coat Volia",
            description: "Top coat de alto brilho para finalizar o seu trabalho com um acabamento impecável.",
            image: produto3
        },
        {
            title: "Ferramentas Volia",
            description: "Ferramentas de alta qualidade, como pincel, esmalte e cortador, para garantir a sua conforto e produtividade.",
            image: produto4
        },
        {
            title: "Maquiagem Volia",
            description: "Maquiagem natural e delicada, com um toque de elegância e um visual impressionante.",
            image: produto5
        }
    ];

    return (
        <ServicesSection id="Loja">
            <TitleMe>Loja</TitleMe>
            <DescriptionMe>
                Nossa loja oferece diversos produtos de qualidade para você que é uma Nail Designer. Confira nossos produtos e descubra o que mais se adequa à sua necessidade.
            </DescriptionMe>
            <ProductList>
                {products.map((product, index) => (
                    <ProductItem key={index}>
                        <ProductImage src={product.image} alt={product.title} />
                        <ProductTitle>{product.title}</ProductTitle>
                        <ProductDescription>{product.description}</ProductDescription>
                    </ProductItem>
                ))}
            </ProductList>
        </ServicesSection>
    );
}
