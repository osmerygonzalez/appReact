import React from 'react';

const RecipeSummary = ({ ingredients }) => {
    const calculateNutritionalScore = () => {
        return ingredients.reduce(
            (total, ingredient) => total + ingredient.quantity * 10, // Ejemplo de cálculo
            0
        );
    };

    return (
        <div className="recipe-summary">
            <h3>Resumen de la Receta</h3>
            <p><strong>Puntaje Nutricional:</strong> {calculateNutritionalScore()}</p>
            <ul>
                {ingredients.map((ingredient, index) => (
                    <li key={index}>
                        {ingredient.name}: {ingredient.quantity}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RecipeSummary;