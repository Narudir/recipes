export const ADD_RECIPE = 'ADD_RECIPE'
export const SAVE_NEW_VERSION = 'SAVE_NEW_VERSION'
export const SWITCH_VERSION = 'SWITCH_VERSION'

export function addRecipe(recipe) {
    return { type: ADD_RECIPE, recipe }
}

export function saveNewVersion(id, newVersion) {
    return { type: SAVE_NEW_VERSION, id, newVersion }
}

export function switchVersion(id, versionId) {
    return { type: SWITCH_VERSION, id, versionId }
}