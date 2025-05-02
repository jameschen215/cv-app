import '../styles/header.css';

export default function Header({ onLandingPage = true, onClick }) {
	return (
		<div className={`header-title ${!onLandingPage ? 'center' : ''}`}>
			<h1>Build Your Perfect Resume in Minutes</h1>
			<p className="title-desc">
				Create professional, ATS-friendly resumes with our easy-to-use CV
				application – no design skills needed.
			</p>

			{onLandingPage && <button onClick={onClick}>Create your CV now</button>}
		</div>
	);
}
