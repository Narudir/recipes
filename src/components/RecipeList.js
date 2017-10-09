import React from 'react';
import Recipe from './Recipe';

const RecipeList = (props) => {
    const recipeList = [];
    if (props.recipes) {
        for(let recipe of props.recipes) {
            recipeList.push(
                <li key={recipe[0]} className="recipe_list_item">
                    <Recipe 
                        recipe={recipe[1]} 
                        recipeId={recipe[0]} 
                        switchVersion={props.switchVersion}
                        sendNewVersion={props.sendNewVersion}
                    />
                </li>
            );
        }
    }

    return (
        <section className="recipe_section">
            <h2 className="section_title">Recipes</h2>
            <ul className="recipe_list">
                {recipeList}
            </ul>
        </section>
    )
}

export default RecipeList