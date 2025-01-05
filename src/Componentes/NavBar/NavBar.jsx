import React, { useState } from "react";
import "./NavBar.css";

const NavBar = ({ setSection, setShowModal }) => {
    const [menuOpen, setMenuOpen] = useState(false); // Estado para abrir/cerrar el menú

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="navbar">
            <div className="logo">
                <h1>Recetas</h1>
            </div>
            {/* Botón de hamburguesa */}
            <button className="menu-toggle" onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </button>

            {/* Menú de navegación */}
            <ul className={`menu ${menuOpen ? "open" : ""}`}>
                <li>
                    <button onClick={() => setSection("home")}>Home</button>
                </li>
                <li>
                    <button onClick={() => setShowModal(true)}>Crear Receta</button>
                </li>
                <li>
                    <button onClick={() => setSection("historial")}>Historial</button>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;