import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Provider } from 'react-redux'

import storeModules from './storeModules'

import {App} from './App'

ReactDom.render(
	<Provider store={storeModules} >
		<App />
	</Provider>,
	document.getElementById("root")
);
