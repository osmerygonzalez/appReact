import React, { useState } from "react";
import ListaIngrediente from "../ListaIngrediente/ListaIngrediente.jsx";
import RecipeBuilder from "../RecipeBuilder/RecipeBuilder.jsx";
import RecipeSummary from "../RecipeSummary/RecipeSummary.jsx";
import "./CrearReceta.css";

const CrearReceta = ({ addRecipe, setShowModal }) => {
    const [recipeName, setRecipeName] = useState("");
    const [recipeSteps, setRecipeSteps] = useState("");
    const [ingredients, setIngredients] = useState([]);

    const handleAddIngredient = (name) => {
        setIngredients((prev) => [
            ...prev,
            { name, quantity: 1 },
        ]);
    };

    const handleQuantityChange = (index, quantity) => {
        const updatedIngredients = [...ingredients];
        updatedIngredients[index].quantity = parseInt(quantity, 10);
        setIngredients(updatedIngredients);
    };

    const handleSaveRecipe = () => {
        if (!recipeName || ingredients.length === 0 || !recipeSteps) {
            alert("Por favor completa todos los campos.");
            return;
        }
        const newRecipe = {
            name: recipeName,
            steps: recipeSteps,
            ingredients,
        };
        addRecipe(newRecipe);

        // Limpiar los campos después de guardar
        setRecipeName("");
        setRecipeSteps("");
        setIngredients([]);

        setShowModal(false); // Cierra el modal después de guardar
    };

    return (
        <div className="crear-receta-modal">
            <div className="modal-content">
                <h2>Crear Receta</h2>
                <input
                    type="text"
                    placeholder="Nombre de la receta"
                    value={recipeName}
                    onChange={(e) => setRecipeName(e.target.value)}
                />
                <textarea
                    placeholder="Paso a paso"
                    value={recipeSteps}
                    onChange={(e) => setRecipeSteps(e.target.value)}
                />
                <ListaIngrediente onSelectIngredient={handleAddIngredient} />
                <RecipeBuilder
                    ingredients={ingredients}
                    onQuantityChange={handleQuantityChange}
                />
                <RecipeSummary ingredients={ingredients} />
                <button onClick={handleSaveRecipe}>Guardar Receta</button>
                <button onClick={() => setShowModal(false)}>Cancelar</button>
            </div>
        </div>
    );
};

export default CrearReceta;