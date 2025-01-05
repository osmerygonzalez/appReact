import React from 'react';
import vegetalesImage from '../assets/gourmet.jpg'; // Asegúrate de que la ruta sea correcta

const Home = ({ setSection, setShowModal }) => {
    return (
        <div className="home" style={{ backgroundImage: `url(${vegetalesImage})` }}>
            <h2>Bienvenido a la app de recetas</h2>
            <button onClick={() => setShowModal(true)}>Crear Receta</button>
            <button onClick={() => setSection("historial")}>Ver Historial</button>
        </div>
    );
};

export default Home;