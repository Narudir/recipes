import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import recipesReducer from './reducers';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
const recipes = new Map();
const versions = new Map();
versions.set(1.5, {
	title: "Chicken",
	content: "Hehwwhwhwhw",
	date: "09.09.2017"
})
recipes.set(1, {
	latestVersion: 1.7,
	activeVersion: 1.5,
	versions: versions
});

let store = createStore(recipesReducer, {recipes: recipes});

class App extends Component {
	render() {
		return (
			<Provider store={store}>
      			<h1>Test</h1>
			</Provider>
    	);
  	}
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();