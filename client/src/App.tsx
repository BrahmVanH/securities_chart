
import { useState } from 'react';

import SecuritiesForm from './components/SecuritiesForm';
import History from './components/History';
import styled, { ThemeProvider } from 'styled-components';
import Nav from './components/Nav';


const AppWrapper = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: transparent;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
`;

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
			<ThemeProvider theme={theme}>
				<AppWrapper>
					{!showHistory ? <SecuritiesForm /> : <History />}
					<Nav handleShowHistory={handleShowHistory} />
				</AppWrapper>
			</ThemeProvider>
	);
}

export default App;
