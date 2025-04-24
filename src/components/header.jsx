import '../styles/header.css';

export default function Header({ isFactory }) {
	return (
		<div className={`header-title ${isFactory ? 'center' : ''}`}>
			<h1>Build Your Perfect Resume in Minutes</h1>
			<p className="title-desc">
				Create professional, ATS-friendly resumes with our easy-to-use CV
				application – no design skills needed.
			</p>

			{isFactory || <button>Create your CV now</button>}
		</div>
	);
}
