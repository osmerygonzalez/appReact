import React from 'react';
import './RecipeCard.css';

const RecipeCard = ({ recipe, deleteRecipe }) => {
    const handleDelete = () => {
        if (window.confirm(`¿Deseas eliminar la receta "${recipe.name}"?`)) {
            deleteRecipe(recipe.name);
        }
    };

    return (
        <div className="recipe-card">
            <h3>{recipe.name}</h3>
            <ul>
                {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>
                        {ingredient.name}: {ingredient.quantity}
                    </li>
                ))}
            </ul>
            <p>{recipe.steps}</p>
            <button onClick={handleDelete}>Eliminar</button>
        </div>
    );
};

export default RecipeCard;