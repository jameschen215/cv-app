export function TextArea({ field, value, handleChange, required }) {
	const { name, label, placeholder } = field;

	return (
		<>
			<label htmlFor={name} className="label textareaLabel">
				{label} {required && '*'}
			</label>
			<textarea
				id={name}
				name={name}
				placeholder={placeholder}
				value={value}
				onChange={handleChange}
				required={required}></textarea>
		</>
	);
}

export function Input({
	field,
	value,
	handleChange,
	required,
	data,
	disableEndDate,
}) {
	const { name, label, type, placeholder } = field;
	const editValue = data && data[name] ? data[name] : value;

	return (
		<>
			<label htmlFor={name} className="label inputLabel">
				{label} {required && '*'}
			</label>

			<input
				id={name}
				name={name}
				type={type}
				placeholder={placeholder}
				value={editValue}
				onChange={handleChange}
				disabled={type === 'date' && name === 'endDate' && disableEndDate}
				required={required}
			/>
		</>
	);
}

export function RadioInput({ field, value, handleChange }) {
	const { name, label, options } = field;

	return (
		<>
			<label className="label radioInputLabel">{label}</label>

			<div className="optionsContainer">
				{options.map((option, index) => (
					<label key={index} className="option">
						<input
							type="radio"
							name={name}
							value={option.value}
							checked={value === option.value}
							onChange={handleChange}
							required
						/>
						{option.label}
					</label>
				))}
			</div>
		</>
	);
}

export function CheckboxInput({ name, label, handleChange }) {
	return (
		<label htmlFor={name} className="label checkboxInputLabel">
			<input name={name} type="checkbox" onChange={handleChange} />
			{label}
		</label>
	);
}

export function RangeInput({ name, label, value, handleChange }) {
	return (
		<>
			<label className="label rangeInputLabel">{label}</label>

			<input
				className="slider"
				type="range"
				name={name}
				min="0"
				max="100"
				value={value}
				step="10"
				onChange={handleChange}
			/>
		</>
	);
}

export function FileInput({ filename, handleChange }) {
	return (
		<>
			<input
				type="file"
				id="fileInput"
				className="fileInput"
				accept="image/*"
				onChange={handleChange}
			/>
			<span className="">Photo</span>
			<label htmlFor="fileInput" className="fileLabel">
				<span className="fileButton">Choose File</span>
				<span className="fileName">{filename}</span>
			</label>
		</>
	);
}
