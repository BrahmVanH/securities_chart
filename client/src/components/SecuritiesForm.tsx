import { useState, useRef } from 'react';
import { Slider } from '@mui/material';
import styled from 'styled-components';

import { CREATE_ENTRY } from '../utils/mutations';
import { useMutation } from '@apollo/client';
import { Button } from './StyledComponents';

import { IoSendOutline, IoCloseCircleOutline } from 'react-icons/io5';

const Form = styled.form`
	margin-top: 10%;
	width: 80%;
	height: 50%;
	padding: 2rem;
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

const SliderWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 80%;
`;

const InputSlider = styled(Slider)(({ theme }) => ({
	color: `${theme.stroke} !important`,
}));

const ButtonWrapper = styled.div`
	margin-top: 2rem;
	display: flex;
	justify-content: space-around;
	align-items: flex-end;
	width: 100%;
`;

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


	const [saveEntry] = useMutation(CREATE_ENTRY);

	const handleResetForm = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		event.preventDefault();
		setFinancial(0);
		setFitness(0);
		setDietary(0);
		setSocial(0);
		setProfessional(0);
	};

	const handleSaveEntry = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		event.preventDefault();
		try {
			if (financial && fitness && dietary && social && professional) {
				const { data } = await saveEntry({ variables: { financial, fitness, dietary, social, professional } });

				if (!data) {
					throw new Error('Error saving entry');
				}
			} else {
				throw new Error('One or more fields are missing');
			}
			formRef.current?.reset();
		} catch (error) {
			console.error(error);
			throw new Error('Error saving entry');
		}
	};

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
			<ButtonWrapper>
				<Button onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => handleResetForm(event)}>
					<IoCloseCircleOutline size={'32px'} />
				</Button>
				<Button onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => handleSaveEntry(event)}>
					<IoSendOutline size={'32px'} />
				</Button>
			</ButtonWrapper>
		</Form>
	);
}
