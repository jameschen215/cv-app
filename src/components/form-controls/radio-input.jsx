export default function RadioInput({
	field: { name, label, options },
	value,
	handleChange,
}) {
	return (
		<>
			<label className="label radio-input-label">
				{label}{' '}
				<span className="field-star" aria-hidden="true">
					*
				</span>
			</label>

			<div className="options-container">
				{options.map((option, index) => (
					<label key={index} className="option">
						<input
							type="radio"
							name={name}
							value={option.value}
							checked={value === option.value}
							onChange={handleChange}
							aria-required="true"
							aria-labelledby={`${name}-label-${index}`}
						/>
						<span id={`${name}-label-${index}`}>{option.label}</span>
					</label>
				))}
			</div>
		</>
	);
}
