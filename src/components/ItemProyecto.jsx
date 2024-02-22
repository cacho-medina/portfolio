import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

function ItemProyecto({ proyecto }) {
    const { name, desc, repo, url, img } = proyecto;
    return (
        <div className="col-12 col-md-5 m-1 bg-light-blue py-2 d-flex flex-column justify-content-between align-items-center proyectoContainer">
            <div className="proyecto">
                <img
                    src={img}
                    alt={`imagen proyecto ${name}}`}
                    className="img-fluid object-fit-cover"
                />
            </div>
            <h2 className="display-4 text-center pointer-normal">{name}</h2>
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
            <p>{desc}</p>
        </div>
    );
}

export default ItemProyecto;
