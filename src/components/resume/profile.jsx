export default function Profile({ profile }) {
	if (!profile) return;

	return (
		<div className="profile">
			<div className="info-title">
				<h2>Profile</h2>
				<div className="underline"></div>
			</div>
			<div className="info-content">
				<p>{profile || ''}</p>
			</div>
		</div>
	);
}
