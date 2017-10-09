import { getRecipes, createRecipe, sendVersion } from '../api/recipesAPI'
import { injectRecipes, addRecipe, saveNewVersion } from './actions'

export function loadRecipes() {
    return dispatch => {
        getRecipes()
        .then((recipes) => new Map(Object.entries(recipes)))
        .then(mappedRecipes => {
            for(let recipe of mappedRecipes) {
                recipe[1].versions = new Map(Object.entries(recipe[1].versions));
            }
            return mappedRecipes
        })
        .then(recipes => dispatch(injectRecipes(recipes)))
    }
}

export function sendNewRecipe(id, recipe) {
    let versions = new Map();
    versions.set("1", recipe);
    let todayDate = new Date();
    let dateFormatted = `${todayDate.getFullYear()}-${todayDate.getMonth() + 1}-${todayDate.getDate()}`;
    let newRecipe = {
        activeVersion: "1",
        latestVersion: "1",
        dateCreated: dateFormatted,
        versions: versions
    };
    return dispatch => {
        createRecipe(newRecipe)
        .then(dispatch(addRecipe(id, newRecipe)))
    }
}

export function sendNewVersion(id, version) {
    return dispatch => {
        sendVersion(id, version)
        .then(dispatch(saveNewVersion(id, version)))
    }
}