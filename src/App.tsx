import { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import SecuritiesForm from './components/SecuritiesForm';
import History from './components/History';
import { ThemeProvider } from 'styled-components';
import Nav from './components/Nav';
import { AppWrapper } from './utils/styled';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import JournalEntry from './pages/JournalEntry';

// Define the uri for the ApolloClient based on production or dev

const functionUri = import.meta.env.PROD ? import.meta.env.VITE_FUNCTION_URI : import.meta.env.VITE_LOCALHOST;

// Create the ApolloClient
const client = new ApolloClient({
	cache: new InMemoryCache(),
	uri: functionUri,
});

function App() {
	const [showHistory, setShowHistory] = useState<boolean>(false);
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
						<Nav/>
						<Routes>
							<Route path='/' element={<SecuritiesForm />} />
							<Route path='/history' element={<History/>} />
							<Route path='/entry/:entry' element={<JournalEntry />} />
						</Routes>
					</AppWrapper>
				</ThemeProvider>
			</ApolloProvider>
		</Router>
	);
}

export default App;
