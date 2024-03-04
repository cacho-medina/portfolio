function NavBar() {
    return (
        <header className="header">
            <nav className="nav py-2">
                <ul className="d-flex flex-row align-items-center justify-content-center px-0 my-0 gap-3 gap-lg-4 mx-auto">
                    <li>
                        <a href="#inicio">Inicio</a>
                    </li>
                    <li>
                        <a href="#about">Sobre mi</a>
                    </li>
                    <li>
                        <a href="#stack">Stack</a>
                    </li>
                    <li>
                        <a href="#proyectos">Proyectos</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default NavBar;
