import ItemProyecto from "./ItemProyecto";
import { proyectos } from "../utils";

function Proyectos() {
    return (
        <>
            <h2 className="subtitle d-inline-block border-pink text-center">
                Proyectos
            </h2>
            <p className="text-orange">
                ||Estos son algunos de mis recientes proyectos
            </p>
            <div className="row justify-content-center my-2 gap-3">
                {proyectos.map((item, index) => (
                    <ItemProyecto key={index} proyecto={item} />
                ))}
            </div>
        </>
    );
}

export default Proyectos;
