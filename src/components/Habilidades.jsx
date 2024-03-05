import html from "../assets/techStack/html.png";
import css from "../assets/techStack/css.png";
import git from "../assets/techStack/git.png";
import Js from "../assets/techStack/Js.png";
import node from "../assets/techStack/node.png";
import react from "../assets/techStack/react.png";
import postgres from "../assets/techStack/postgres.png";
import vite from "../assets/techStack/vite.png";
import sql from "../assets/techStack/sql.webp";
import Skill from "./Skill";

const skill = [html, css, git, Js, node, react, vite, sql, postgres];

function Habilidades() {
    return (
        <>
            <h2 className="subtitle d-inline-block border-pink text-center">
                Habilidades
            </h2>
            <div className="row py-2 my-4 justify-content-center cardStack">
                {skill.map((item, index) => (
                    <Skill skill={item} key={index} />
                ))}
            </div>
        </>
    );
}

export default Habilidades;
