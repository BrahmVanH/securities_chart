import SecuritiesForm from './components/SecuritiesForm';
import styled, { ThemeProvider } from 'styled-components';

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
		<ThemeProvider theme={theme}>
			<AppWrapper>
				<SecuritiesForm />
			</AppWrapper>
		</ThemeProvider>
	);
}

export default App;
