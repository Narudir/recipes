export const ADD_RECIPE = 'ADD_RECIPE'
export const SAVE_RECIPE = 'SAVE_RECIPE'
export const SWITCH_VERSION = 'SWITCH_VERSION'

export function addRecipe(recipe) {
    return { type: ADD_RECIPE, recipe }
}

export function saveRecipe(id, newVersion) {
    return { type: SAVE_RECIPE, id, newVersion }
}

export function switchVersion(id, versionId) {
    return { type: SWITCH_VERSION, id, versionId }
}