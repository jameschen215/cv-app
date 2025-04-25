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

import { TextInput } from './form-controls/text-input';
import { EmailInput } from './form-controls/email-input';
import { TelInput } from './form-controls/tel-input';

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
	const [fromErrors, setFormErrors] = useState(initialValues);

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
			setFormData((prev) => ({
				...prev,
				[ev.target.name]: ev.target.checked,
			}));
		} else {
			setFormData((prev) => ({
				...prev,
				[ev.target.name]: ev.target.value,
			}));
		}
	}

	function handleSubmit(ev) {
		ev.preventDefault();

		// If you don't change the slider, formData can't get the value of the
		// slider from handleChange handler. So, add it manually.
		if (!formData.proficiency) formData.proficiency = 50;

		console.log({ fromErrors });

		if (validateForm()) {
			console.log('Form data is valid', formData);
			onSubmit(formData);
		}
	}

	// Validate the form before submitting
	function validateForm() {
		let isValid = true;
		const errors = {};

		if (!formData.firstName) {
			isValid = false;
			errors.firstName = 'First name cannot be empty.';
		} else if (formData.firstName.length < 2) {
			isValid = false;
			errors.firstName = 'Too short.';
		} else if (formData.firstName.length > 20) {
			isValid = false;
			errors.firstName = 'Too long.';
		}

		setFormErrors(errors);
		return isValid;
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

						{type === 'text' && (
							<TextInput
								field={field}
								value={formData[name] || ''}
								required={required}
								onChange={handleChange}
								errors={fromErrors}
								setErrors={setFormErrors}
							/>
						)}
						{type === 'email' && (
							<EmailInput
								field={field}
								value={formData[name] || ''}
								required={required}
								onChange={handleChange}
								errors={fromErrors}
								setErrors={setFormErrors}
							/>
						)}
						{type === 'tel' && (
							<TelInput
								field={field}
								value={formData[name] || ''}
								required={required}
								onChange={handleChange}
								errors={fromErrors}
								setErrors={setFormErrors}
							/>
						)}
						{type === 'date' && (
							<Input
								// data={data[name] || null}
								field={field}
								value={formData[name] || ''}
								handleChange={handleChange}
								// required={required}
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
