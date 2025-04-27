export default function FileInput({ filename, handleChange }) {
	return (
		<>
			<input
				type="file"
				id="file-input"
				accept="image/*"
				onChange={handleChange}
			/>
			<span>Photo</span>
			<label
				htmlFor="file-input"
				className="field-label file-label"
				tabIndex={0}
				role="button"
				onKeyDown={(ev) => {
					if (ev.key === 'Enter') {
						document.getElementById('file-input')?.click();
					}
				}}>
				<span className="file-button">Choose File</span>
				<span className="file-name">{filename}</span>
			</label>
		</>
	);
}
