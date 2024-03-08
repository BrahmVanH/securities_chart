import styled from 'styled-components';
import { IButtonSCProps, ILabelSCProps } from '../types';

export const Button = styled.button<IButtonSCProps>(({ theme, $margin, $width, $fontSize, $useBorder }) => ({
	width: $width || '30%',
	height: '50%',
	margin: $margin || '0rem',
	padding: '0rem',
	backgroundColor: 'transparent',
	color: theme.stroke,
	fontSize: $fontSize ||  '1.5rem',
	border: $useBorder ? `1px solid ${theme.stroke}` : 'none',
	borderRadius: $useBorder ? '10px' : '',
}));

export const Label = styled.label<ILabelSCProps>(({ theme, $fontSize }) => ({
	color: theme.stroke,
	fontSize: $fontSize || '1.5rem',
}));
