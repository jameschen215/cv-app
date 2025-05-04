export default function CVHeader({ firstName, lastName, position }) {
	return (
		<div className="header">
			<h1>
				<span className="first-name">{firstName || ''}</span>{' '}
				<span className="last-name">{lastName || ''}</span>
			</h1>
			<span className="position">{position || ''}</span>
		</div>
	);
}
