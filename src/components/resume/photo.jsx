import defaultPhoto from '../../assets/default.jpg';

export default function Photo({ photo }) {
	const imgUrl = photo ? URL.createObjectURL(photo) : defaultPhoto;

	return (
		<div className="photo-wrapper">
			<div className="photo">
				<img src={imgUrl} alt="Resume Photo" />
			</div>
		</div>
	);
}
