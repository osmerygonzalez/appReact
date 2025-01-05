import React from "react";
import './RecipeBuilder.css';

const RecipeBuilder = ({ ingredients, onQuantityChange }) => {
    return (
        <div className="recipe-builder">
            <h3>Ingredientes Seleccionados</h3>
            {ingredients.length > 0 ? (
                <ul>
                    {ingredients.map((ingredient, index) => (
                        <li key={index}>
                            <span>{ingredient.name}</span>
                            <input
                                type="number"
                                min="1"
                                value={ingredient.quantity}
                                onChange={(e) =>
                                    onQuantityChange(index, e.target.value)
                                }
                            />
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No hay ingredientes seleccionados.</p>
            )}
        </div>
    );
};

export default RecipeBuilder;