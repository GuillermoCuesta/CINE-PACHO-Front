import './index.css';
import 'reactjs-popup/dist/index.css';

import { QueryClient, QueryClientProvider } from "react-query";

import App from './App';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { store } from './app/store';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			refetchOnMount: false,
			refetchOnReconnect: false,
			retry: false,
			staleTime: 5 * 60 * 1000,
		},
	},
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<Provider store={store}>
		<QueryClientProvider client={queryClient}>
			<App />
		</QueryClientProvider>
	</Provider>
);
