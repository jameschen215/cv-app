import '../../styles/range-input.css';

export default function RangeInput({ name, label, value, handleChange }) {
	return (
		<>
			<label className="label range-inputLabel">{label}</label>

			<input
				className="slider"
				type="range"
				name={name}
				min="0"
				max="100"
				value={value}
				step="5"
				onChange={handleChange}
				aria-required={true}
			/>
		</>
	);
}
