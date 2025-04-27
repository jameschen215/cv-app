import '../../styles/checkbox-input.css';

export default function CheckboxInput({ name, label, checked, handleChange }) {
	return (
		<label htmlFor={name} className="label checkboxInputLabel">
			<input
				id={name}
				name={name}
				type="checkbox"
				onChange={handleChange}
				checked={checked}
				aria-required={true}
				aria-checked={checked}
			/>
			{label}
		</label>
	);
}
