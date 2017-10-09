const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const pathToApp = __dirname;

import * as recipeController from "./controllers/recipe";

app.set("port", process.env.PORT || 8000);
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + './../build'));

app.get("/api/recipes", recipeController.getRecipes);
app.post("/api/recipes", recipeController.postRecipe);
app.put("/api/recipes/:id", recipeController.putRecipe);

app.listen(app.get("port"), () => {
	console.log(("App is running at http://localhost:%d"), app.get("port"));
	console.log("Press CTRL-C to stop\n");
});