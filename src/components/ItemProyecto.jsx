import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import Card from "react-bootstrap/Card";

function ItemProyecto({ proyecto }) {
    const { name, desc, repo, url, img } = proyecto;
    return (
        <Card className="col-12 col-sm-8 col-md-5 m-1 bg-light-blue px-0 text-grey proyectoContainer">
            <Card.Img variant="top" src={img} className="card-img" />
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
