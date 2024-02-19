import { useState, useRef, useEffect } from 'react';
import { Button, Slider } from '@mui/material';
import styled from 'styled-components';

import { CREATE_ENTRY } from '../utils/mutations';
import { useMutation } from '@apollo/client';

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
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
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

	const [saveEntry, { error, data }] = useMutation(CREATE_ENTRY, {
		variables: { financial, fitness, dietary, social, professional },
	});

	const handleSaveEntry = async (event: Event) => {
		try {

			event.preventDefault();
			const newEntry = await saveEntry();
			
			if (!newEntry) {
				console.error(error);
				throw new Error('Error saving entry');
			}
		} catch (error) {
			console.error(error);
			throw new Error('Error saving entry');
		}
	}

	return (
		<Form ref={formRef}>
			<SliderWrapper>
				<label htmlFor='financial'>Financial</label>
				<InputSlider value={financial} min={0} max={5} onChange={handleFinChange} />
				<label htmlFor='fitness'>Fitness</label>
				<InputSlider value={fitness} min={0} max={5} onChange={handleFitChange} />
				<label htmlFor='dietary'>Dietary</label>
				<InputSlider value={dietary} min={0} max={5} onChange={handleDietChange} />
				<label htmlFor='social'>Social</label>
				<InputSlider value={social} min={0} max={5} onChange={handleSocChange} />
				<label htmlFor='professional'>Professional</label>
				<InputSlider value={professional} min={0} max={5} onChange={handleProfChange} />
			</SliderWrapper>
			<button onClick={() => handleSaveEntry}>
				Submit
			</button>
		</Form>
	);
}
