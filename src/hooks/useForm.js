import { useState } from 'react';

export const useForm = initialState => {
	const [formData, setFormData] = useState(initialState);

	const onChangeInput = event => {
		const { name, value } = event.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	return {
		formData,
		onChangeInput,
	};
};
