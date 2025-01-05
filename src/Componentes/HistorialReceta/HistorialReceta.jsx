import React from 'react';
import './HistorialReceta.css';
import RecipeCard from '../RecipeCard/RecipeCard.jsx';

const HistorialReceta = ({ recipes, deleteRecipe }) => {
    return (
        <div className="historial">
            <h2>Historial de Recetas</h2>
            {recipes.length > 0 ? (
                <div className="recipe-list">
                    {recipes.map((recipe) => (
                        <RecipeCard
                            key={recipe.name} // Usamos el nombre como key
                            recipe={recipe}
                            deleteRecipe={deleteRecipe} // Pasamos la función de eliminación
                        />
                    ))}
                </div>
            ) : (
                <p>No hay recetas guardadas.</p>
            )}
        </div>
    );
};

export default HistorialReceta;