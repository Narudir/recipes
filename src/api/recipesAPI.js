import axios from 'axios';

const BASE_URL = 'http://localhost:8000';

export function getRecipes() {
    const getRecipesURL = `${BASE_URL}/api/recipes`;
    return axios.get(getRecipesURL).then(response => response.data).catch((e) => console.log(e));
}

export function createRecipe(recipe) {
    const postRecipeURL = `${BASE_URL}/api/recipes`;
    const versionsObj = Array.from(recipe.versions).reduce((versionsObj, [key, value]) => (
        Object.assign(versionsObj, { [key]: value })
    ), {});
    const payload = {
        recipe: recipe,
        versions: versionsObj
    };
    return axios.post(postRecipeURL, payload).catch((e) => console.log(e));
}

export function sendVersion(id, version) {
    const putVersionURL = `${BASE_URL}/api/recipes/${id}`;
    return axios.put(putVersionURL, version).catch(e => console.log(e));
}