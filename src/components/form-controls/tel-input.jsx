import { useState } from 'react';
import { validateTel } from '../../helper/validation';

export default function TelInput({
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
		let error = validateTel(ev.target.value);

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
				type="tel"
				placeholder={placeholder}
				value={value}
				onChange={handleChange}
				aria-required={true}
				title="Please enter a valid phone number with 7 to 15 digits. You can start with a + for the country code."
				aria-invalid={!!errors[name]}
				aria-describedby={`${name}-error-message ${name}-hint`}
			/>

			{errors[name] && (
				<>
					<div
						className="error-message"
						id={`${name}-error-message`}
						aria-live="polite">
						{errors[name]}
					</div>
					<div id={`${name}-hint`} className="form-hint">
						Please enter a valid phone number with 7 to 15 digits. You can start
						with a + for the country code.
					</div>
				</>
			)}
		</>
	);
}
