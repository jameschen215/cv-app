import '../../styles/checkbox-input.css';

export default function CheckboxInput({ name, label, handleChange }) {
	return (
		<label htmlFor={name} className="label checkboxInputLabel">
			<input
				id={name}
				name={name}
				type="checkbox"
				onChange={handleChange}
				aria-required={true}
			/>
			{label}
		</label>
	);
}
