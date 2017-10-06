import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import recipesReducer from './reducers';
import AddRecipeContainer from './components/AddRecipe';
import RecipeListContainer from './components/RecipeList';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './index.css';

let store = createStore(recipesReducer, {recipes: []});

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<MuiThemeProvider>
					<div className="app_container">
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