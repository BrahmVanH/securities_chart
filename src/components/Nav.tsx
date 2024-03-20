import { INavFCProps } from '../types';
import { Button, NavpadWrapper, Navpad } from '../utils/styled';

import { IoBarChartOutline, IoAddCircleOutline } from 'react-icons/io5';
import React from 'react';





const Nav: React.FC<INavFCProps> = (props: Readonly<INavFCProps>) => {
	const handleShowHistory = props.handleShowHistory;

	return (
		<NavpadWrapper>
			<Navpad>
				<Button $margin={'0.5rem 0rem 0rem 0rem'} onClick={(event) => handleShowHistory(event)}>
					<IoBarChartOutline size={'32px'} />
				</Button>
				<span style={{ fontSize: '48px', color: 'white', fontWeight: '100' }}>|</span>
				<Button $margin={'0.5rem 0rem 0rem 0rem'} onClick={(event) => handleShowHistory(event)}>
					<IoAddCircleOutline size={'32px'} />
				</Button>
			</Navpad>
		</NavpadWrapper>
	);
};

export default Nav;
