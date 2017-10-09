import * as path from 'path';
import * as fs from 'fs';

class Recipes {
    constructor(file) {
        this.recipesDataFile = file;
        const recipes = fs.readFileSync(file, 'utf8');
		this.recipes = JSON.parse(recipes);
    }

    save() {
		fs.writeFile(this.recipesDataFile, JSON.stringify(this.recipes, undefined, 4), (err) => {
			if (err) {
				console.error(err);
			}
		});
    }
    
    getRecipes() {
		return this.recipes;
	}

	create(recipe, versions) {
		const nextId = (Object.keys(this.recipes).length + 1).toString();
		this.recipes[nextId] = recipe;
		this.recipes[nextId].versions = versions;
		this.save();
		return recipe;
	}

	update(recipeId, newVersion) {
		const recipe = this.recipes[recipeId];
		const newVersionId = Number(recipe.latestVersion) + 1;
		recipe.latestVersion = newVersionId.toString();
		recipe.versions[newVersionId.toString()] = newVersion;
		this.save();
		return recipe;
	}
}

export default new Recipes(path.join(__dirname, '../data/recipes.json'));