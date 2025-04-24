import '../styles/form-component.css';

import { useState } from 'react';

import {
	FileInput,
	TextArea,
	CheckboxInput,
	RadioInput,
	RangeInput,
	Input,
} from './form-controls';

export default function FormComponent({
	mode = 'add',
	required,
	formFields = [],
	data = {},
	onSubmit,
}) {
	const defaultValues = Object.fromEntries(formFields.map((f) => [f.name, '']));
	const initialValues = mode === 'add' ? defaultValues : data;

	const [formData, setFormData] = useState(initialValues);

	const disableEndDate = formData.present;

	function handleChange(ev) {
		const inputType = ev.target.type;
		if (inputType === 'file') {
			const file = ev.target.files[0];

			if (file) {
				setFormData((prev) => ({
					...prev,
					photo: file,
				}));
			}
		} else if (inputType === 'checkbox') {
			const { name, checked } = ev.target;
			setFormData((prev) => ({
				...prev,
				[name]: checked,
			}));
		} else {
			const { name, value } = ev.target;
			setFormData((prev) => ({
				...prev,
				[name]: value,
			}));
		}
	}

	function handleSubmit(ev) {
		ev.preventDefault();

		// If you don't change the slider, formData can't get the value of the
		// slider from handleChange handler. So, add it manually.
		if (!formData.proficiency) formData.proficiency = 50;

		// onSubmit({ ...formData, photo: photo });
		onSubmit(formData);
	}

	return (
		<form onSubmit={handleSubmit}>
			{formFields.map((field) => {
				const { id, name, label, type } = field;

				return (
					<div className={`formRow ${name}`} key={id}>
						{type === 'file' && (
							<FileInput
								filename={formData.photo.name || 'No file selected'}
								handleChange={handleChange}
							/>
						)}

						{type === 'textarea' && (
							<TextArea
								field={field}
								value={formData[name] || ''}
								handleChange={handleChange}
								required={required}
							/>
						)}
						{type === 'radio' && (
							<RadioInput
								field={field}
								value={formData[name] || ''}
								handleChange={handleChange}
							/>
						)}
						{type === 'checkbox' && (
							<CheckboxInput
								name={name}
								label={label}
								handleChange={handleChange}
							/>
						)}
						{type === 'range' && (
							<RangeInput
								name={name}
								label={label}
								value={formData[name] || 50}
								handleChange={handleChange}
							/>
						)}
						{(type === 'text' ||
							type === 'email' ||
							type === 'tel' ||
							type === 'date') && (
							<Input
								// data={data[name] || null}
								field={field}
								value={formData[name] || ''}
								handleChange={handleChange}
								required={required}
								disableEndDate={disableEndDate}
							/>
						)}
					</div>
				);
			})}

			<div className="formRow">
				<button type="submit">Submit</button>
			</div>
		</form>
	);
}
