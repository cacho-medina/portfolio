import { Container } from "react-bootstrap";
import Habilidades from "./Habilidades";
import Proyectos from "./Proyectos";

function Home() {
    return (
        <Container className="grow">
            <section
                className="vh-100 d-flex flex-column justify-content-center align-items-center"
                id="inicio"
            >
                <p className="text-pink m-0 aux">👋Hola, me llamo</p>
                <h1 className="m-0 title fw-bold">Joaquin Medina</h1>
                <h2 className="text-orange m-0 title text-center">
                    Frontend Developer
                </h2>
                {/* <a
                    href="https://drive.google.com/file/d/15lE_QYy68khI8P6H5FyPvTFso-ezGu31/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-danger"
                >
                    CV
                </a> */}
            </section>
            <section
                className="d-flex flex-column align-items-center"
                id="about"
            >
                <h2 className="subtitle d-inline-block border-pink">About</h2>
                <p className="my-4 about fw-medium px-1">
                    Soy Joaquin Medina, un entusiasta de la programación con una
                    sólida base en el desarrollo web. Mi pasión por la creación
                    de soluciones tecnológicas y mi compromiso con el
                    aprendizaje continuo me han llevado a explorar el fascinante
                    mundo del desarrollo de software, por lo cual, son elementos
                    clave que impulsan mi búsqueda de conocimiento y experiencia
                    en el campo. <br />
                    <br />
                    Soy Fullstack developer con orientacion al desarrollo
                    frontend. Poseo conocimientos solidos en Javascript, React,
                    Redux, Css y frameworks como Bootstrap y Tailwind, asi como
                    tambien tecnologias de backend como NodeJS, Express, Sql,
                    sistemas de bases de datos como Postgres o MySql y Sequelize
                    ORM. A lo largo de mi formacion adquiri conocimientos en
                    metodologias agiles, Git y herramientas para la organizacion
                    y gestion de proyectos como Trello. Mi nivel de Ingles es B2
                    (Upper Intermediate).
                </p>
            </section>
            <section
                className="d-flex flex-column align-items-center my-2"
                id="stack"
            >
                <Habilidades />
            </section>
            <section
                className="d-flex flex-column align-items-center my-4"
                id="proyectos"
            >
                <Proyectos />
            </section>
        </Container>
    );
}

export default Home;
