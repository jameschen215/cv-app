export default function FileInput({ filename, handleChange }) {
	return (
		<>
			<input
				type="file"
				id="file-input"
				accept="image/*"
				onChange={handleChange}
				aria-describedby="file-input-description"
			/>
			<span id="file-input-description">Photo</span>
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
				<span className="file-name">{filename || 'No file selected'}</span>
			</label>
		</>
	);
}
