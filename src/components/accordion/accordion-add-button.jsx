export default function AddButton({ item, onClick }) {
	let content = '';

	if (item.title === 'Work Experiences') {
		content = 'Add new experience';
	} else if (item.title === 'Education') {
		content = 'Add new education';
	} else if (item.title === 'Skills') {
		content = 'Add new skill';
	} else {
		content = 'Add new item';
	}

	return (
		<button
			className="button add-button"
			type="button"
			onClick={onClick}
			aria-label={`Add new ${item.title}`}>
			{content}
		</button>
	);
}
