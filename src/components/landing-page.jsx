import '../styles/landing-page.css';

import examplePhoto from '../assets/example.jpg';

import Header from './header';

export default function LandingPage({ onClick }) {
	return (
		<header className="landing-page">
			<Header onClick={onClick} />
			<Example />
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
