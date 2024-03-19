import { useState } from 'react';

import SecuritiesForm from './components/SecuritiesForm';
import History from './components/History';
import { ThemeProvider } from 'styled-components';
import Nav from './components/Nav';
import { AppWrapper } from './utils/styled';

import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client';

// TODO: move to .env in new apollo function

const functionUri = 'https://aa8xj0pbui.execute-api.us-east-1.amazonaws.com/graphql';
const client = new ApolloClient({
	cache: new InMemoryCache(),
	link: new HttpLink({ uri: functionUri, fetchOptions: { mode: 'no-cors' } }),
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
