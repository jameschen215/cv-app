import '../styles/form-component.css';
import '../styles/form-controls.css';

import { useState } from 'react';

import TextInput from './form-controls/text-input';
import EmailInput from './form-controls/email-input';
import TelInput from './form-controls/tel-input';
import TextArea from './form-controls/textarea';
import FileInput from './form-controls/file-input';
import CheckboxInput from './form-controls/checkbox-input';
import RadioInput from './form-controls/radio-input';
import RangeInput from './form-controls/range-input';
import DateSelect from './form-controls/date-select';

import { validateForm } from '../helper/validation';

export default function FormComponent({
	mode = 'add',
	title,
	formFields = [],
	data = {},
	onSubmit,
	onCancel,
}) {
	const defaultValues = Object.fromEntries(
		formFields.map((f) =>
			// If you don't change the slider, formData can't get the value of the
			// slider from handleChange handler. So, add it manually.
			f.name === 'proficiency' ? [f.name, 50] : [f.name, '']
		)
	);
	const initialValues = mode === 'add' ? defaultValues : data;

	const [formData, setFormData] = useState(initialValues);
	const [formErrors, setFormErrors] = useState({});
	const [allTouched, setAllTouched] = useState(false);

	const disableEndDate = formData.present;

	function handleFileChange(file) {
		setFormData((prev) => ({
			...prev,
			photo: file,
		}));
	}

	function handleInputChange(name, value) {
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	}

	function handleCheckboxChange(name, checked) {
		setFormData((prev) => ({
			...prev,
			[name]: checked,
			// If present, disable end state and end state error messages
			...(checked ? { 'end-date-month': '', 'end-date-year': '' } : {}),
		}));
	}

	function handleChange(ev) {
		const { type, name, checked, value, files } = ev.target;

		if (type === 'file') {
			handleFileChange(files[0]);
		} else if (type === 'checkbox') {
			handleCheckboxChange(name, checked);
		} else {
			handleInputChange(name, value);
		}
	}

	function handleSubmit(ev) {
		ev.preventDefault();

		setAllTouched(true);

		const newErrors = validateForm(title, formData, setFormErrors);
		const firstError = Object.keys(newErrors).find((key) => newErrors[key]);
		setFormErrors(newErrors);

		if (firstError) {
			const firstErrorDom = document.getElementById(firstError);

			if (firstErrorDom) {
				firstErrorDom.focus();
				firstErrorDom.scrollIntoView({
					behavior: 'smooth',
					block: 'center',
				});
			}

			console.log('Form submission failed due to validation errors.');
		} else {
			onSubmit(formData);
			console.log('Form submitted successfully!');
			setAllTouched(false);
			setFormErrors({});
			console.log(data);
		}
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
								errors={formErrors}
								setErrors={setFormErrors}
								onChange={handleChange}
								// required={required}
								allTouched={allTouched}
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
								checked={formData[name] || false}
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
								// required={required}
								onChange={handleChange}
								errors={formErrors}
								setErrors={setFormErrors}
								allTouched={allTouched}
							/>
						)}
						{type === 'email' && (
							<EmailInput
								field={field}
								value={formData[name] || ''}
								// required={required}
								onChange={handleChange}
								errors={formErrors}
								setErrors={setFormErrors}
								allTouched={allTouched}
							/>
						)}
						{type === 'tel' && (
							<TelInput
								field={field}
								value={formData[name] || ''}
								// required={required}
								onChange={handleChange}
								errors={formErrors}
								setErrors={setFormErrors}
								allTouched={allTouched}
							/>
						)}
						{type === 'date' && (
							<DateSelect
								field={field}
								value={formData}
								disableEndDate={disableEndDate}
								errors={formErrors}
								handleChange={handleChange}
							/>
						)}
					</div>
				);
			})}

			<div className="formRow">
				{title.startsWith('Personal') || (
					<button type="button" onClick={() => onCancel()}>
						Cancel
					</button>
				)}
				<button type="submit">Submit</button>
			</div>
		</form>
	);
}
