import React from 'react';
import "./Home.css"
import vegetalesImage from '../assets/vegetales.jpg'; // Asegúrate de que la ruta sea correcta

const Home = ({ setSection, setShowModal }) => {
    return (
        <div className="home" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(255, 255, 255, 0)), url(${vegetalesImage})` }}>
            <h2>Bienvenido a la app de recetas</h2>
            <button onClick={() => setShowModal(true)}>Crear Receta</button>
            <button onClick={() => setSection("historial")}>Ver Historial</button>
        </div>
    );
};

export default Home;