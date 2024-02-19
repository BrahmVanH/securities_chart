import styled, { useTheme } from 'styled-components';
import { NavProps } from '../types';
import { Button } from './StyledComponents';

import { IoBarChartOutline, IoAddCircleOutline } from 'react-icons/io5';

const NavpadWrapper = styled.div`
	width: 100%;
	background-color: transparent;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Navpad = styled.nav(({ theme }) => ({
	position: 'fixed',
	bottom: 0,
	width: '75%',
	height: '10%',
	backgroundColor: theme.sanMarino,
	border: `1px solid ${theme.white}`,
	borderTopLeftRadius: '45px',
	borderTopRightRadius: '45px',
	display: 'flex',
	justifyContent: 'space-evenly',
	alignItems: 'center',
}));

const Nav = (props: Readonly<NavProps>) => {
	const handleShowHistory = props.handleShowHistory;

	return (
		<NavpadWrapper>
			<Navpad>
				<Button $margin={'0.5rem 0rem 0rem 0rem'} onClick={(event) => handleShowHistory(event)}>
					<IoBarChartOutline size={'32px'} />
				</Button>
        <span style={{fontSize: '48px', color: 'white', fontWeight: '100'}}>|</span>
				<Button $margin={'0.5rem 0rem 0rem 0rem'} onClick={(event) => handleShowHistory(event)}>
					<IoAddCircleOutline size={'32px'} />
				</Button>
			</Navpad>
		</NavpadWrapper>
	);
};

export default Nav;
