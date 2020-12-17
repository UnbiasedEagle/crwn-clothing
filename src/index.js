import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';

import App from './App';
import { persistedStore, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

import './index.css';

ReactDOM.render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistedStore}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</PersistGate>
	</Provider>,
	document.getElementById('root')
);
