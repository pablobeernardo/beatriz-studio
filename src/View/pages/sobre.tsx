import { AboutMeSection, TitleMe, DescriptionMe, CourseList, CourseItem, CourseTitle, CourseDescription } from "../style/style";
import curso1 from '../../assets/curso1.jpg';
import curso2 from '../../assets/curso2.jpg';

export default function Sobre() {
    return (
        <AboutMeSection id='Sobre'>
            <TitleMe>Quem Sou Eu</TitleMe>
            <DescriptionMe>
                Olá! Sou Beatriz, uma entusiasta apaixonada pelo mundo do design de unhas. Com anos de experiência como Nail Designer, mergulhei de cabeça na arte de transformar unhas em telas elegantes e expressivas. Minha jornada começou com uma paixão por cores, texturas e formas, e desde então venho refinando minhas técnicas para oferecer a você um serviço de manicure único.
                <br />
                <br />
                Meu objetivo é criar um espaço onde cada cliente possa se sentir verdadeiramente especial. Não se trata apenas de unhas, mas de proporcionar uma experiência que eleve sua autoestima e estilo. Minhas criações vão além do esmalte e se tornam verdadeiras declarações artísticas. Trabalho com dedicação para transformar sua visita em momentos de puro encantamento.
                <br />
                <br />
                A cada pincelada, busco capturar a essência e personalidade de cada cliente. Cada detalhe é uma oportunidade de expressão criativa, e eu adoro explorar novas tendências e técnicas para garantir que você saia com unhas que são uma extensão autêntica de quem você é.
                <br />
                <br />
                Convido você a agendar um horário e mergulhar no mundo do design de unhas comigo. Vamos juntas transformar suas unhas em uma tela em branco para a criatividade e a beleza!
            </DescriptionMe>
            <CourseList>
                <CourseItem>
                    <img src={curso2} alt="Manicure" />
                    <CourseTitle>Nail Designer</CourseTitle>
                    <CourseDescription>
                        Formada em Estética e Cosmética, com especialização em Nail Art, sou apaixonada por unhas e design. Meu objetivo é proporcionar a você uma experiência única e personalizada, com unhas que refletem sua personalidade e estilo.
                    </CourseDescription>
                </CourseItem>
                <CourseItem>
                    <img src={curso1} alt="Manicure" />
                    <CourseTitle>Beatriz Pereira</CourseTitle>
                    <CourseDescription>
                        Sempre procurando inovar e aprimorar minhas habilidades, estou sempre em busca de novos cursos e tendências para oferecer a você o melhor em design de unhas. Agende um horário e descubra o que posso fazer por você!
                    </CourseDescription>
                </CourseItem>
            </CourseList>
        </AboutMeSection>
    )
}