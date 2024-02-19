import { ApolloClient, ApolloLink, ApolloProvider, HttpLink, InMemoryCache, gql } from '@apollo/client';
import { onError } from '@apollo/client/link/error';

import SecuritiesForm from './components/SecuritiesForm';
import styled, { ThemeProvider } from 'styled-components';

const errorLink = onError(({ graphQLErrors, networkError }) => {
	if (graphQLErrors) {
		graphQLErrors.map(({ message, locations, path }) => {
			console.log(`GraphQL error: ${message}`);
		});
	}
	if (networkError) {
		console.log(`Network error: ${networkError}`);
	}
});

const httpLink = new HttpLink({ uri: process.env.NODE_ENV === 'production' ? '/graphql' : 'http://localhost:4000/graphql' });

const link = ApolloLink.from([errorLink, httpLink]);

const client = new ApolloClient({
	cache: new InMemoryCache(),
	link,
});

const AppWrapper = styled.div`
	width: 100vw;
	height: 100vh;
	background: linear-gradient(to bottom #c7a96e, #57779d);
	display: flex;
	justify-content: center;
	align-items: center;
`;

function App() {
	const theme = {
		putty: '#c7a96e',
		sanMarino: '#57779d',
		white: '#fff',
	};

	return (
		<ApolloProvider client={client}>
			<ThemeProvider theme={theme}>
				<AppWrapper>
					<SecuritiesForm />
				</AppWrapper>
			</ThemeProvider>
		</ApolloProvider>
	);
}

export default App;
