import { useState } from 'react';
import { validateText } from '../../helper/validation';

export function TextInput({
	field: { name, label, placeholder },
	value,
	onChange,
	required,
	errors,
	setErrors,
}) {
	const [touched, setTouched] = useState(false);
	const classNames = touched ? (errors[name] ? 'invalid' : 'valid') : '';

	function handleChange(ev) {
		// If input isn't touched, don't display error colors
		setTouched(true);

		// Set errors
		let error = validateText(ev.target.name, ev.target.value);
		setErrors((prev) => ({
			...prev,
			[name]: error,
		}));

		// Execute form handleChange
		onChange(ev);
	}

	return (
		<>
			<label htmlFor={name} className="fieldLabel">
				{label}{' '}
				{required && (
					<span className="fieldStar" aria-hidden="true">
						*
					</span>
				)}
			</label>

			<input
				id={name}
				className={classNames}
				name={name}
				type="text"
				placeholder={placeholder}
				value={value}
				onChange={handleChange}
				required={required}
				aria-required={required}
				pattern="[A-Za-z]{2,20}"
				title="Only letters are allowed (A-Z, a-z)."
				aria-invalid={!!errors[name]}
				aria-describedby={`${name}ErrorMessage`}
			/>

			{errors[name] && (
				<div
					className="errorMessage"
					id={`${name}ErrorMessage`}
					aria-live="polite">
					{errors[name]}
				</div>
			)}
		</>
	);
}
