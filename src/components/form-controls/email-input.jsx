import { useState } from 'react';
import { validateEmail } from '../../helper/validation';

export function EmailInput({
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
		let error = validateEmail(ev.target.name, ev.target.value);

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
				type="email"
				placeholder={placeholder}
				value={value}
				onChange={handleChange}
				required={required}
				aria-required={required}
				title="Please enter a valid email address (e.g., name@example.com)."
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
