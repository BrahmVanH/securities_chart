import { useState, useRef } from 'react';
import { Slider } from '@mui/material';
import styled from 'styled-components';

const Form = styled.form`
	width: 80%;
	height: 75%;
	padding: 2rem;
	border: 1px solid white;
	border-radius: 30px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	@media (min-width: 768px) {
		width: 30%;
		height: 50%;
	}
`;

const SliderWrapper = styled.div`
	width: 80%;
`;

const InputSlider = styled(Slider)(({ theme }) => ({
	color: `${theme.white} !important`,
}));

export default function SecuritiesForm() {
	const [financial, setFinancial] = useState<number>(0);
	const [fitness, setFitness] = useState<number>(0);
	const [dietary, setDietary] = useState<number>(0);
	const [social, setSocial] = useState<number>(0);
	const [professional, setProfessional] = useState<number>(0);
	const formRef = useRef<HTMLFormElement | null>(null);

	const handleFinChange = (event: Event, newValue: number | number[]) => {
		event.preventDefault();
		setFinancial(newValue as number);
	};
	const handleFitChange = (event: Event, newValue: number | number[]) => {
		event.preventDefault();

		setFitness(newValue as number);
	};
	const handleDietChange = (event: Event, newValue: number | number[]) => {
		event.preventDefault();

		setDietary(newValue as number);
	};
	const handleSocChange = (event: Event, newValue: number | number[]) => {
		event.preventDefault();

		setSocial(newValue as number);
	};
	const handleProfChange = (event: Event, newValue: number | number[]) => {
		event.preventDefault();
		setProfessional(newValue as number);
	};

	return (
		<Form ref={formRef}>
			<SliderWrapper>
				<InputSlider value={financial} min={0} max={5} onChange={handleFinChange} />
				<InputSlider value={fitness} min={0} max={5} onChange={handleFitChange} />
				<InputSlider value={dietary} min={0} max={5} onChange={handleDietChange} />
				<InputSlider value={social} min={0} max={5} onChange={handleSocChange} />
				<InputSlider value={professional} min={0} max={5} onChange={handleProfChange} />
			</SliderWrapper>
		</Form>
	);
}
