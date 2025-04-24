import './styles/App.css';

import Nav from './components/nav';
import LandingPage from './components/landing-page';
import Footer from './components/footer';
import CVFactory from './components/cv-factory';

export default function App() {
	let isEditing = true;

	return (
		<div className="app">
			<Nav />
			{isEditing || <LandingPage />}

			{isEditing && <CVFactory />}

			{isEditing || <Footer />}
		</div>
	);
}
