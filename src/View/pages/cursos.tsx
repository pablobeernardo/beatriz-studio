import { ServicesSection, TitleMe, CourseList, CourseItem, CourseTitle, CourseDescription } from "../style/style";
import curso1 from '../../assets/curso1.jpg';
import curso2 from '../../assets/curso2.jpg';

export default function Cursos() {
    return (
        <ServicesSection id='Cursos'>
            <TitleMe>Nossos Cursos</TitleMe>
            <CourseList>
                <CourseItem>
                    <img src={curso2} alt="Manicure" />
                    <CourseTitle>Curso de Nail Designer Iniciante</CourseTitle>
                    <CourseDescription>
                        Aprenda desde as técnicas básicas até as mais avançadas de nail art. Este curso é perfeito para quem está começando e deseja se tornar um profissional qualificado.
                    </CourseDescription>
                </CourseItem>
                <CourseItem>
                    <img src={curso1} alt="Manicure" />
                    <CourseTitle>Curso Avançado de Nail Art</CourseTitle>
                    <CourseDescription>
                        Este curso é projetado para aprimorar suas habilidades de design e estimular sua criatividade. Você aprenderá a criar nail arts únicas e personalizadas para suas clientes.
                    </CourseDescription>
                </CourseItem>
            </CourseList>
        </ServicesSection>

    )
}