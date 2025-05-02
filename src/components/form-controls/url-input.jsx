import { useState } from 'react';
import { validateURL } from '../../helper/validation';

export default function URLInput({
	field: { name, label, placeholder },
	value,
	onChange,
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
		let error = validateURL(ev.target.value);

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
				{label}
			</label>

			<input
				id={name}
				className={classNames}
				name={name}
				type="text"
				placeholder={placeholder}
				value={value}
				onChange={handleChange}
				aria-required="false"
				title="Please enter a valid url address (e.g., www.example.com)."
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
						Please enter a valid url address (e.g., www.example.com).
					</div>
				</>
			)}
		</>
	);
}
