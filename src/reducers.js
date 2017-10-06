import { ADD_RECIPE, SAVE_NEW_VERSION, SWITCH_VERSION } from './actions'

function recipesReducer(state, action) {
    switch (action.type) {
        case ADD_RECIPE: {
            const newId = state.recipes.size + 1;
            const latestAndActiveVersion = 1;
            let versions = new Map();
            versions.set(latestAndActiveVersion, action.recipe);
            let todayDate = new Date();
            let dateFormatted = `${todayDate.getFullYear()}-${todayDate.getMonth() + 1}-${todayDate.getDate()}`
            let newRecipe = {
                dateCreated: dateFormatted,
                latestVersion: latestAndActiveVersion,
                activeVersion: latestAndActiveVersion,
                versions: versions
            };
            let recipes = new Map(state.recipes);
            recipes.set(newId, newRecipe);
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
            recipe.latestVersion = recipe.latestVersion + 1;
            recipe.versions.set(recipe.latestVersion, action.newVersion);
            return {...state, recipes};
        }
        default:
            return state;
    }
}

export default recipesReducer