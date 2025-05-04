export default function RangeInput({ name, label, value, handleChange }) {
	return (
		<>
			<label className="label range-input-label">{label}</label>
			<input
				className="slider"
				type="range"
				name={name}
				min="0"
				max="100"
				value={value}
				step="5"
				onChange={handleChange}
				aria-required="true"
				aria-valuenow={value}
				aria-valuemin="0"
				aria-valuemax="100"
			/>
			<span>{value}</span>
		</>
	);
}
