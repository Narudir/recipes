import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import recipesReducer from './reducers';
import AddRecipeContainer from './containers/AddRecipeContainer';
import RecipeListContainer from './containers/RecipeListContainer';
import { loadRecipes } from './actions/serverActions';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './index.css';

let store = createStore(recipesReducer, {}, applyMiddleware(thunk));
store.dispatch(loadRecipes());

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