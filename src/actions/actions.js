export const ADD_RECIPE = 'ADD_RECIPE'
export const SAVE_NEW_VERSION = 'SAVE_NEW_VERSION'
export const SWITCH_VERSION = 'SWITCH_VERSION'
export const INJECT_RECIPES = 'INJECT_RECIPES'

export function saveNewVersion(id, newVersion) {
    return { type: SAVE_NEW_VERSION, id, newVersion }
}

export function switchVersion(id, versionId) {
    return { type: SWITCH_VERSION, id, versionId }
}

export function addRecipe(newId, newRecipe) {
    return { type: ADD_RECIPE, newId, newRecipe }
}

export function injectRecipes(recipes) {
    return { type: INJECT_RECIPES, recipes}
}