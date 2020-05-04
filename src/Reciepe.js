import React from 'react';

const Reciepe=({title, calories, image, ingredients})=> {
    return(
        <div className="reciepe-list">
            <h1>{title}</h1>
            <p>{calories}</p>
            <img className="image" src={image} alt=""/>
            <ol>
                {ingredients.map(ingredient=>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>
        </div>
    )
}

export default Reciepe