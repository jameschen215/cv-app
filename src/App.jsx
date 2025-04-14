import './styles/App.css';

import Nav from './components/nav';
import LandingPage from './components/landing-page';
import Footer from './components/footer';

export default function App() {
	return (
		<div className="app">
			<Nav />
			<LandingPage />
			<Footer />
		</div>
	);
}
