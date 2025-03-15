import {
    AboutMeSection,
    TitleMe,
    MissionValuesSection,
    MissionValuesCard,
    MissionValuesDescription,
    ImageCard,
    DescriptionMe
} from "../style/style";
import experienciaImg from '../../assets/curso1.jpg';  
import missionImg from '../../assets/valor2.png';     

export default function Sobre() {
    return (
        <AboutMeSection id='Sobre'>
            <MissionValuesSection>
                <MissionValuesCard>
                    <MissionValuesDescription>
                        <TitleMe>Minha História</TitleMe>
                        <DescriptionMe>
                            Olá! Sou Beatriz, uma entusiasta apaixonada pelo mundo do design de unhas. Com anos de experiência como Nail Designer, minha jornada começou com uma paixão por cores, texturas e formas. Desde então, tenho refinado minhas técnicas para proporcionar a você uma experiência única, que vai além da manicure.
                            Com mais de 5 anos de atuação no mercado de design de unhas, participei de diversos cursos e eventos, sempre buscando o aperfeiçoamento contínuo. Minha experiência inclui atender clientes com diferentes necessidades e preferências, personalizando o serviço conforme seu estilo e personalidade.
                        </DescriptionMe>
                    </MissionValuesDescription>
                    <ImageCard src={experienciaImg} alt="Minha História" />
                </MissionValuesCard>
            </MissionValuesSection>

            <MissionValuesSection>
                <MissionValuesCard>
                    <MissionValuesDescription>
                        <TitleMe>Missão e Valores</TitleMe>
                        <DescriptionMe>
                            Minha missão é proporcionar uma experiência transformadora e única, onde cada cliente se sinta especial e confiante. Quero que cada visita seja uma oportunidade de criar algo exclusivo e belo.
                            Trabalho com dedicação, ética e respeito. Acredito que cada cliente merece um atendimento personalizado, e cada detalhe importa. A confiança e a satisfação de quem me escolhe é o que me motiva a continuar evoluindo na profissão.
                        </DescriptionMe>
                    </MissionValuesDescription>
                    <ImageCard src={missionImg} alt="Missão e Valores" />
                </MissionValuesCard>
            </MissionValuesSection>

        </AboutMeSection>
    );
}
