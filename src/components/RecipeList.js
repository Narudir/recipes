import React from 'react';
import Recipe from './Recipe';
import { connect } from 'react-redux'
import { switchVersion, saveNewVersion } from '../actions'

const RecipeList = (props) => {
    const recipeList = [];
    for(let recipe of props.recipes) {
        recipeList.push(
            <li key={recipe[0]} className="recipe_list_item">
                <Recipe 
                    recipe={recipe[1]} 
                    recipeId={recipe[0]} 
                    switchVersion={props.switchVersion}
                    saveNewVersion={props.saveNewVersion}
                />
            </li>
        );
    }

    return (
        <section>
            <h2 className="section_title">Recipes</h2>
            <ul className="recipe_list">
                {recipeList}
            </ul>
        </section>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        switchVersion: (recipeId, versionId) => {
            dispatch(switchVersion(recipeId, versionId))
        },
        saveNewVersion: (recipeId, newVersion) => {
            dispatch(saveNewVersion(recipeId, newVersion))
        }
    }
}

const RecipeListContainer = connect(
    (state) => state,
    mapDispatchToProps
)(RecipeList)

export default RecipeListContainer