import React, { useState } from "react";
import NavBar from "./Componentes/NavBar/NavBar.jsx";
import Home from "./Componentes/Home/Home.jsx";
import CrearReceta from "./Componentes/CrearReceta/CrearReceta.jsx";
import HistorialReceta from "./Componentes/HistorialReceta/HistorialReceta.jsx";

const MainApp = () => {
    const [section, setSection] = useState("home");
    const [recipes, setRecipes] = useState(
        JSON.parse(localStorage.getItem("recipes")) || []
    );
    const [showModal, setShowModal] = useState(false); // Estado para abrir/cerrar el modal

    const addRecipe = (newRecipe) => {
        const updatedRecipes = [...recipes, newRecipe];
        setRecipes(updatedRecipes);
        localStorage.setItem("recipes", JSON.stringify(updatedRecipes));
    };

    const deleteRecipe = (recipeName) => {
        const updatedRecipes = recipes.filter((r) => r.name !== recipeName);
        setRecipes(updatedRecipes);
        localStorage.setItem("recipes", JSON.stringify(updatedRecipes));
    };

    return (
        <>
            <NavBar setSection={setSection} setShowModal={setShowModal} />
            {section === "home" && <Home setSection={setSection} setShowModal={setShowModal} />}
            {section === "crearReceta" && (
                <CrearReceta addRecipe={addRecipe} setShowModal={setShowModal} />
            )}
            {section === "historial" && (
                <HistorialReceta recipes={recipes} deleteRecipe={deleteRecipe} />
            )}
            {showModal && <CrearReceta addRecipe={addRecipe} setShowModal={setShowModal} />}
        </>
    );
};

export default MainApp;