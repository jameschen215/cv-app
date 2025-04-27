import { useState } from 'react';
import { validateText } from '../../helper/validation';

export default function TextInput({
	field: { name, label, placeholder },
	value,
	onChange,
	// required,
	errors,
	setErrors,
	allTouched,
}) {
	const [touched, setTouched] = useState(false);

	let classNames = '';
	if (allTouched || touched) {
		classNames = errors[name] ? 'invalid' : 'valid';
	}

	function handleChange(ev) {
		// If input isn't touched, don't display error colors
		setTouched(true);

		// Set errors
		let error = validateText(ev.target.name, ev.target.value);
		setErrors((prev) => ({
			...prev,
			[ev.target.name]: error,
		}));

		// Execute form handleChange
		onChange(ev);
	}

	return (
		<>
			<label htmlFor={name} className="field-label">
				{label}{' '}
				{
					<span className="field-star" aria-hidden="true">
						*
					</span>
				}
			</label>

			<input
				id={name}
				className={classNames}
				name={name}
				type="text"
				placeholder={placeholder}
				value={value}
				onChange={handleChange}
				aria-required={true}
				aria-invalid={!!errors[name]}
				aria-describedby={`${name}-error-message`}
			/>

			{errors[name] && (
				<div
					className="error-message"
					id={`${name}-error-message`}
					aria-live="polite">
					{errors[name]}
				</div>
			)}
		</>
	);
}
