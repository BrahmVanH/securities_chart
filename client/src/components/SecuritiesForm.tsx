import React, { useState, useEffect, useRef } from 'react';
import { Slider } from '@mui/material';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

const Form = styled.form`
	border: 1px solid white;
	border-radius: 65deg;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`;

const InputSlider = styled(Slider)({
	color: 'ffffff',
});

export default function SecuritiesForm() {
	const [financial, setFinancial] = useState<number>(0);
	const [fitness, setFitness] = useState<number>(0);
	const [dietary, setDietary] = useState<number>(0);
	const [social, setSocial] = useState<number>(0);
	const [professional, setProfessional] = useState<number>(0);
	// const [inputValue, setInputValue] = useState
	const formRef = useRef<HTMLFormElement | null>(null);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	return (
		<Form ref={formRef}>
			<InputSlider value={financial} />
			<InputSlider value={fitness} />
			<InputSlider value={dietary} />
			<InputSlider value={social} />
			<InputSlider value={professional} />
		</Form>
	);
}
