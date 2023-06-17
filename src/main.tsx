import './index.css';
import 'reactjs-popup/dist/index.css';

import App from './App';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { store } from './app/store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	//<React.StrictMode>
	<Provider store={store}>
		<App />
	</Provider>
	//</React.StrictMode>
);
