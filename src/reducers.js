import { ADD_RECIPE, SAVE_NEW_VERSION, SWITCH_VERSION, INJECT_RECIPES } from './actions/actions'

function recipesReducer(state, action) {
    switch (action.type) {
        case INJECT_RECIPES: {
            return {recipes: action.recipes};
        }
        case ADD_RECIPE: {
            let recipes = new Map(state.recipes);
            recipes.set(action.newId, action.newRecipe);
            return {...state, recipes};
        }
        case SWITCH_VERSION: {
            let recipes = new Map(state.recipes);
            recipes.get(action.id).activeVersion = action.versionId;
            return {...state, recipes};
        }
        case SAVE_NEW_VERSION: {
            let recipes = new Map(state.recipes);
            let recipe = recipes.get(action.id);
            recipe.latestVersion = Number(recipe.latestVersion) + 1;
            recipe.versions.set(recipe.latestVersion, action.newVersion);
            return {...state, recipes};
        }
        default:
            return state;
    }
}

export default recipesReducer