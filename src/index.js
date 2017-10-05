import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import recipesReducer from './reducers';
import AddRecipeContainer from './containers/AddRecipeContainer';
import RecipeListContainer from './components/RecipeList';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './index.css';

let recipes = [];
let versions = new Map();
versions.set(1.4, {
	title: "Chlen",
	date: "2017-10-5",
	content: "mrkakaka"
});
versions.set(1.7, {
	title: "Ayyyyy",
	date: "2017-10-4",
	content: "Hey boi"
});
recipes[0] = {
	id: 1,
	latestVersion: 1.7,
	activeVersion: 1.4,
	versions: versions
}

let store = createStore(recipesReducer, {recipes: recipes});

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<MuiThemeProvider>
					<div>
						<AddRecipeContainer />
						<RecipeListContainer />
					</div>
				</MuiThemeProvider>
			</Provider>
    	);
  	}
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();