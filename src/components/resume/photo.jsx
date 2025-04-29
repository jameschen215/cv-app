import defaultPhoto from '../../assets/default.jpg';

export default function Photo({ photo }) {
	return (
		<div className="photo-wrapper">
			<div className="photo">
				<img src={photo ?? defaultPhoto} alt="Resume Photo" />
			</div>
		</div>
	);
}
