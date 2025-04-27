import { useState } from 'react';
import { validateEmail } from '../../helper/validation';

export default function EmailInput({
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
		let error = validateEmail(ev.target.value);

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
				type="email"
				placeholder={placeholder}
				value={value}
				onChange={handleChange}
				aria-required="true"
				title="Please enter a valid email address (e.g., name@example.com)."
				aria-invalid={!!errors[name]}
				aria-describedby={`${name}-error-message`}
			/>

			{errors[name] && (
				<>
					<div
						className="error-message"
						id={`${name}-error-message`}
						aria-live="assertive">
						{errors[name]}
					</div>
					<div id={`${name}-hint`} className="form-hint">
						Please enter a valid email address (e.g., name@example.com).
					</div>
				</>
			)}
		</>
	);
}
