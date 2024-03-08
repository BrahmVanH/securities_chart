import styled from 'styled-components';
import { IButtonSCProps, ILabelSCProps } from '../types';
import { Slider } from '@mui/material';

export const Preview = styled.div`
	width: 95%;
	display: flex;
	flex-direction: row !important;
	justify-content: space-between;
	align-items: center;
`;

export const CardWrapper = styled.div(({ theme }) => ({
	width: '90%',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-between',
	alignItems: 'center',
	backgroundColor: 'transparent',
	padding: '0.5rem',
	borderBottom: `1px solid ${theme.stroke}`,
	borderRight: `1px solid ${theme.stroke}`,
	borderRadius: '10px',
}));

export const NavpadWrapper = styled.div`
	width: 100%;
	background-color: transparent;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Navpad = styled.nav(({ theme }) => ({
	position: 'fixed',
	bottom: 0,
	width: '75%',
	height: '10%',
	backgroundColor: theme.sanMarino,
	border: `1px solid ${theme.stroke}`,
	borderTopLeftRadius: '45px',
	borderTopRightRadius: '45px',
	display: 'flex',
	justifyContent: 'space-evenly',
	alignItems: 'center',
}));

export const Form = styled.form`
	margin-top: 10%;
	width: 80%;
	height: min-content;
	padding: 3rem 2rem;
	border: 1px solid white;
	border-radius: 65px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	@media (min-width: 768px) {
		width: 30%;
		height: 50%;
	}
`;

export const SliderWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 80%;
`;

export const InputSlider = styled(Slider)(({ theme }) => ({
	color: `${theme.stroke} !important`,
}));

export const ButtonWrapper = styled.div`
	margin-top: 2rem;
	display: flex;
	justify-content: space-around;
	align-items: flex-end;
	width: 100%;
`;

export const HiddenInput = styled.input`
	display: none;
`;

export const Button = styled.button<IButtonSCProps>(({ theme, $margin, $width, $fontSize, $useBorder }) => ({
	width: $width || '30%',
	height: '50%',
	margin: $margin || '0rem',
	padding: '0rem',
	backgroundColor: 'transparent',
	color: theme.stroke,
	fontSize: $fontSize || '1.5rem',
	border: $useBorder ? `1px solid ${theme.stroke}` : 'none',
	borderRadius: $useBorder ? '10px' : '',
}));

export const Label = styled.label<ILabelSCProps>(({ theme, $fontSize }) => ({
	color: theme.stroke,
	fontSize: $fontSize || '1.5rem',
}));

export const AppWrapper = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: transparent;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
`;

export const HistoryWrapper = styled.div(({ theme }) => ({
	marginTop: '10%',
	width: '80%',
	height: 'min-content',
	maxHeight: '75%',
	backgroundColor: 'transparent',
	border: `1px solid ${theme.stroke}`,
	borderRadius: '40px',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
}));

export const EntriesContainer = styled.div`
	height: 100%;
	width: 90%;
	margin: 1rem;
	border-radius: 30px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 0.5rem;
	overflow-y: scroll;

	@media (min-width: 768px) {
		width: 30%;
		height: 50%;
	}
`;

export const StarRatingContainer = styled.div(
	({ theme }) => `
		width: 80%;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		align-self: center;
		color: ${theme.stroke};
 `
);

