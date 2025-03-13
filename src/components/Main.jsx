import React from 'react'
import IngredientsList from './IngredientsList'
import ClaudeRecipe from './ClaudeRecipe'
import { getRecipeFromMistral } from '../ai'

export default function Main(){

    const [ingredients, setIngredients] = React.useState([])
        
    function handleSubmit(event){
        event.preventDefault()
        // console.log("Form Submitted!")
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        
        // console.log(newIngredient)
        // ingredients.push(newIngredient)
        // console.log(ingredients)
     
        setIngredients(prevState => [...prevState, newIngredient])
    }

    // function addIngredient(formData){
    //     const newIngredient = formData.get("ingredient")
    //     setIngredients(prevState => [...prevState, newIngredient])
    // }

    const [recipe, setRecipe] = React.useState("")
    const recipeSection = React.useRef(null)
    // console.log(recipeSection)

    React.useEffect(() => {
        if (recipe !== "" && recipeSection !== null){
            recipeSection.current.scrollIntoView({behavior : "smooth"})
        }
    }, [recipe])

    async function getRecipe(){
        const recipeMarkdown = await getRecipeFromMistral(ingredients)
        // console.log(RecipeMarkdown)
        setRecipe(recipeMarkdown)
    }

    return(
        <main>
            <form className="add-ingredient-form" onSubmit={handleSubmit}>
            {/* <form action={addIngredient} className="add-ingredient-form" > */}
                <input 
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient" 
                    name="ingredient"
                /> 
                <button>Add ingredient</button>
            </form>

            {ingredients.length > 0 && <IngredientsList ref={recipeSection} ingredients={ingredients} getRecipe={getRecipe} />}
            {recipe && <ClaudeRecipe recipe={recipe} />}
        </main>
    )
}