import { ADD_RECIPE, SAVE_RECIPE, SWITCH_VERSION } from './actions'

function recipesReducer(state, action) {
    switch (action.type) {
        case ADD_RECIPE:
            const recipes = state.recipes;
            const newId = recipes.size + 1;
            recipes.set(newId, action.recipe)
            return { recipes };
        case SAVE_RECIPE: {
                const recipes = state.recipes;
                const recipe = recipes.get(action.id);
                let latestVersion = recipe.get("latestVersion");
                latestVersion = latestVersion + 0.1;
                const versions = recipe.get("versions");
                versions.set(latestVersion, action.newVersion);
                return { recipes };
            }
        case SWITCH_VERSION: {
                const recipes = state.recipes;
                const recipe = recipes.get(action.id);
                recipe.set("activeVersion", action.versionId);
                return { recipes };
            }
        default:
            return state;
    }
}

export default recipesReducer