/* eslint-disable react/prop-types */
import React from "react"
const IngredientsList = React.forwardRef((props, ref) =>{
    const ingredientsListItems = props.ingredients.map((ingredient) => {
        return(
            <li key={ingredient} >{ingredient}</li>
        )
    })

    return(
        <section>
            <h2>Ingredients on hand:</h2>
            <ul className="ingredients-list" aria-live="polite" >{ingredientsListItems}</ul>
            { props.ingredients.length > 3 && <div className="get-recipe-container">
                <div ref={ref}>
                    <h3>Ready for a recipe?</h3>
                    <p>Generate a recipe from your list of ingredients.</p>
                </div>
                <button onClick={props.getRecipe}>Get a recipe</button>
            </div>}
        </section>
    )
})
    
IngredientsList.displayName = "IngredientsList"

export default IngredientsList