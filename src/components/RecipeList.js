import React from 'react';
import Recipe from './Recipe';
import { connect } from 'react-redux'

const RecipeList = (props) => {
    const recipeList = props.recipes.map((recipe) => {
        return <li key={recipe.id} className="recipe_list_item"><Recipe recipe={recipe} /></li>
    });
    return (
        <section>
            <h2 className="section_title">Recipes</h2>
            <ul className="recipe_list">
                {recipeList}
            </ul>
        </section>
    )
}

const RecipeListContainer = connect(
    (state) => state,
)(RecipeList)

export default RecipeListContainer