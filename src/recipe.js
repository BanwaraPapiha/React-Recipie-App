import React from "react";
const Recipe = ({ name, calories, ingredients, image }) => {
    return (
        <div className="recipe">
            <div >
                <h1>{name}</h1>
                <p className="calories">Calories: {calories}</p>
                <ol>
                    {ingredients.map(ingredient => (
                        <li>{ingredient.text}</li>
                    ))}
                </ol>
                <img className="image" src={image} alt={name} />
            </div>
        </div>
    );
}

export default Recipe;