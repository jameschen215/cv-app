import '../styles/file-input.css';

import { useState } from 'react';

export default function FileInput() {
	const [fileName, setFileName] = useState('No file selected');

	function handleFileChange(ev) {
		const file = ev.target.files[0];

		if (!file) {
			setFileName('No file selected');
			return;
		}

		setFileName(file.name);

		const reader = new FileReader();
		reader.onloadend = () => {
			const base64 = reader.result;
			sessionStorage.setItem('photo', base64);
		};

		reader.onerror = () => {
			console.error('Error reading file');
		};

		reader.readAsDataURL(file);
	}

	return (
		<>
			<input
				type="file"
				id="fileInput"
				className="fileInput"
				accept="image/*"
				onChange={handleFileChange}
			/>
			<span className="">Photo</span>
			<label htmlFor="fileInput" className="fileLabel">
				<span className="fileButton">Choose File</span>
				<span className="fileName">{fileName}</span>
			</label>
		</>
	);
}
