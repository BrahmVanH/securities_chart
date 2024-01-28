import { useState } from 'react';
import styled from 'styled-components';
import SecuritiesForm from './components/SecuritiesForm';

const AppWrapper = styled.div`
	width: 100vw;
	height: 100vh;
	background: linear-gradient(to bottom #c7a96e, #57779d);
`;

function App() {
	const [count, setCount] = useState(0);

	return (
		<AppWrapper>
			<SecuritiesForm />
		</AppWrapper>
	);
}

export default App;
