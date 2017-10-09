import Recipes from '../models/Recipes';

export function getRecipes(req, res) {
	const recipes = Recipes.getRecipes();
	return res.json(recipes);
}

export function postRecipe(req, res) {
	const recipeContents = req.body.recipe;
	const versions = req.body.versions;
	const recipe = Recipes.create(recipeContents, versions);
    return res.status(201).json(recipe);
}

export function putRecipe(req, res) {
	const recipeId = req.params.id;
	const version = req.body;
	const recipe = Recipes.update(recipeId, version);
	return res.status(201).json(recipe);
}