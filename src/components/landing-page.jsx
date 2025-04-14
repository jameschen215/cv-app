import '../styles/landing-page.css';

import examplePhoto from '../assets/example.jpg';

export default function LandingPage() {
	return (
		<div className="landing-page">
			<Header />
			<Example />
		</div>
	);
}

function Header() {
	return (
		<header class="header">
			<h1>Build Your Perfect Resume in Minutes</h1>
			<p className="title-desc">
				Create professional, ATS-friendly resumes with our easy-to-use CV
				application – no design skills needed.
			</p>

			<button>Create your CV now</button>
		</header>
	);
}

function Example() {
	return (
		<div className="example">
			<img src={examplePhoto} alt="CV example" />
		</div>
	);
}
