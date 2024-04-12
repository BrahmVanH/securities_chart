import { lazy, Suspense } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import SecuritiesForm from './components/SecuritiesForm';
import { ThemeProvider } from 'styled-components';
import Nav from './components/Nav';
import { AppWrapper } from './utils/styled';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Loading from './components/Loading';
const JournalEntry = lazy(() => import('./pages/JournalEntry'));
const History = lazy(() => import('./components/History'));

// Define the uri for the ApolloClient based on production or dev

const functionUri = import.meta.env.PROD ? import.meta.env.VITE_FUNCTION_URI : import.meta.env.VITE_LOCALHOST;

// Create the ApolloClient
const client = new ApolloClient({
	cache: new InMemoryCache(),
	uri: functionUri,
});

export default function App() {
	const theme = {
		putty: '#c7a96e',
		sanMarino: '#57779d',
		stroke: '#fff',
	};

	return (
		<Router>
			<ApolloProvider client={client}>
				<ThemeProvider theme={theme}>
					<AppWrapper>
						<Nav />
						<Routes>
							<Route path='/' element={<SecuritiesForm />} />
							<Route path='/history' element={<HistoryPage />} />
							<Route path='/entry/:entry' element={<JournalEntryPage />} />
						</Routes>
					</AppWrapper>
				</ThemeProvider>
			</ApolloProvider>
		</Router>
	);
}

const HistoryPage = () => (
	<Suspense fallback={<Loading />}>
		<History />
	</Suspense>
);

const JournalEntryPage = () => (
	<Suspense fallback={<Loading />}>
		<JournalEntry />
	</Suspense>
);
