// import { convertFileToBlob } from './helpers';
import { FieldValues } from 'react-hook-form';

export const sendForm = async (formInput: FieldValues) => {
	console.log('making fetch call, formInput: ', formInput);

	try {
		if (!formInput.file || !formInput.financial || !formInput.fitness || !formInput.dietary || !formInput.social || !formInput.professional) {
			throw new Error('missing a field value');
		}
		const file = formInput.file[0];
		console.log('file', file);
		console.log('fieldValues', formInput);
		const formData = new FormData();
		formData.append('file', file);
		formData.append('financial', formInput.financial);
		formData.append('fitness', formInput.fitness);
		formData.append('mental', formInput.mental);
		formData.append('dietary', formInput.dietary);
		formData.append('social', formInput.social);
		formData.append('professional', formInput.professional);


		return await fetch('/.netlify/functions/actions/entry', {
			method: 'POST',
			body: formData,
		});
	} catch (error) {
		console.error('error', error);
		throw new Error('error in sending form');
	}
};

export const getEntries = async () => {
	try {
		const response = await fetch('/.netlify/functions/actions/entries');
		if (!response.ok) {
			throw new Error('error in fetching entries');
		}

		const data = await response.json();
		if (!data) {
			throw new Error('no data');
		}
		console.log('data', data);
		return data;
	} catch (error) {
		console.error('error', error);
	}
};