import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import Card from "react-bootstrap/Card";
import proyecto1 from "../assets/proyecto1.png";
import proyecto3 from "../assets/proyecto3.png";
import proyecto6 from "../assets/proyecto6.png";

function ItemProyecto({ proyecto }) {
    const { name, desc, repo, url, img } = proyecto;
    return (
        <Card className="col-12 col-sm-8 col-md-5 col-lg-4 m-1 bg-light-blue px-0 text-grey proyectoContainer cardProyecto">
            <Card.Img
                variant="top"
                src={proyecto1}
                className="card-img"
                alt={`imagen proyecto ${name}`}
            />
            <Card.Body className="d-flex flex-column justify-content-between align-items-center">
                <Card.Title className="display-6 text-center pointer-normal">
                    {name}
                </Card.Title>
                <Card.Text className="desc pointer-normal">{desc}</Card.Text>
                <div className="mx-auto d-flex gap-3">
                    <a
                        href={repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="icono"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="icono"
                    >
                        <FaExternalLinkAlt />
                    </a>
                </div>
            </Card.Body>
        </Card>
    );
}

export default ItemProyecto;
