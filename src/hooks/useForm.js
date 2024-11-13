import { useState } from 'react';

export const useForm = () => {
	const [formData, setFormData] = useState({});

	const onChangeInput = e => {
		const { name, value } = e.target;
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
