import { useState } from 'react';

import SecuritiesForm from './components/SecuritiesForm';
import History from './components/History';
import { ThemeProvider } from 'styled-components';
import Nav from './components/Nav';
import { AppWrapper } from './utils/styled';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

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

	const handleShowHistory = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		event.preventDefault();
		setShowHistory(!showHistory);
	};

	return (
		<ApolloProvider client={client}>
			<ThemeProvider theme={theme}>
				<AppWrapper>
					{!showHistory ? <SecuritiesForm /> : <History />}
					<Nav handleShowHistory={handleShowHistory} />
				</AppWrapper>
			</ThemeProvider>
		</ApolloProvider>
	);
}

export default App;
