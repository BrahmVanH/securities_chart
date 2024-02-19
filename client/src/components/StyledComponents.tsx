import styled from 'styled-components';
import { ButtonProps } from '../types';

export const Button = styled.button<ButtonProps>(({ theme, $margin }) => ({
	width: '30%',
	height: '50%',
	margin: $margin || '0rem',
	padding: '0rem',
	backgroundColor: 'transparent',
	color: theme.white,
	fontSize: '1.5rem',
}));
