import { motion } from "framer-motion";
function NavBar() {
    return (
        <header className="header">
            <nav className="nav py-3">
                <ul className="d-flex flex-row align-items-center justify-content-center px-0 my-0 gap-3 gap-lg-4 mx-auto">
                    <motion.li
                        whileHover={{ translateY: -5 }}
                        whileTap={{ scale: 0.95 }}
                        className="nav-item"
                    >
                        <a href="#inicio">Inicio</a>
                    </motion.li>
                    <motion.li
                        whileHover={{ translateY: -5 }}
                        whileTap={{ scale: 0.95 }}
                        className="nav-item"
                    >
                        <a href="#about">Sobre mi</a>
                    </motion.li>
                    <motion.li
                        whileHover={{ translateY: -5 }}
                        whileTap={{ scale: 0.95 }}
                        className="nav-item"
                    >
                        <a href="#stack">Stack</a>
                    </motion.li>
                    <motion.li
                        whileHover={{ translateY: -5 }}
                        whileTap={{ scale: 0.95 }}
                        className="nav-item"
                    >
                        <a href="#proyectos">Proyectos</a>
                    </motion.li>
                </ul>
            </nav>
        </header>
    );
}

export default NavBar;
