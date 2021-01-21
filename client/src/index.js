import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import axios from 'axios'

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import calculatorReducer from './store/reducers/calculator'
import historyReducer from './store/reducers/history'

window.axios = axios
axios.defaults.baseURL = 'http://192.168.100.2:8080/'

const rootReducer = combineReducers({
	calc: calculatorReducer,
	history: historyReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
