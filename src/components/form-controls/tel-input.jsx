import { useState } from 'react';
import { validateTel } from '../../helper/validation';

export function TelInput({
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
		let error = validateTel(ev.target.name, ev.target.value);

		// If input isn't touched, don't display error colors
		setTouched(true);

		setErrors((prev) => ({
			...prev,
			[name]: error,
		}));

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
				type="tel"
				placeholder={placeholder}
				value={value}
				onChange={handleChange}
				required={required}
				aria-required={required}
				pattern="^\+?[0-9]{7,15}$"
				title="Please enter a valid phone number with 7 to 15 digits. You can start with a + for the country code."
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
