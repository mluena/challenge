import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import { store } from "./store";

const app = (
	<Provider store={store}>
		<HashRouter>
			<App />
		</HashRouter>
	</Provider>
)

ReactDOM.render(app, document.getElementById('root'));

