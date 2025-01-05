import React from 'react';
import './ListaIngrediente.css';


const ListaIngrediente = ({ onSelectIngredient }) => {
    const ingredients = [
        { name: "Pollo", category: "Proteínas" },
        { name: "Arroz", category: "Carbohidratos" },
        { name: "Espinaca", category: "Verduras" },
        { name: "Tomate", category: "Verduras" },
    ];

    return (
        <div className="lista-ingrediente">
            <h3>Ingredientes Disponibles</h3>
            <ul>
                {ingredients.map((ingredient, index) => (
                    <li key={index}>
                        {ingredient.name} - {ingredient.category}
                        <button onClick={() => onSelectIngredient(ingredient.name)}>
                            Agregar
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListaIngrediente;