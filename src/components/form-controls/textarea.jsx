import { useState } from 'react';
import { validateText } from '../../helper/validation';

export default function TextArea({
	field: { name, label, placeholder },
	value,
	errors,
	setErrors,
	onChange,
	// required,
	allTouched,
}) {
	const [touched, setTouched] = useState(false);

	let classNames = '';
	if (allTouched || touched) {
		classNames = errors[name] ? 'invalid' : 'valid';
	}

	function handleChange(ev) {
		let error = validateText(ev.target.name, ev.target.value);

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
					<span className="field-star" aria-hidden={true}>
						*
					</span>
				}
			</label>

			<textarea
				name={name}
				id={name}
				className={classNames}
				value={value}
				placeholder={placeholder}
				title="Please enter your professional profile."
				aria-required={true}
				aria-invalid={!!errors[name]}
				aria-describedby={`${name}-error-message`}
				onChange={handleChange}></textarea>

			{/* error message */}
			{errors[name] && (
				<div
					id={`${name}-error-message`}
					className="error-message"
					aria-live="polite">
					{errors[name]}
				</div>
			)}
		</>
	);
}
