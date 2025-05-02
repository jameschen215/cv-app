import './styles/App.css';

import Nav from './components/nav';
import LandingPage from './components/landing-page';
import Footer from './components/footer';
import CVFactory from './components/cv-factory';
import DataProvider from './context/data-provider';
import { useState } from 'react';

export default function App() {
	const [isEditing, setIsEditing] = useState(false);

	return (
		<DataProvider>
			<div className="app">
				<Nav />

				{isEditing || <LandingPage onClick={() => setIsEditing(true)} />}

				{isEditing && <CVFactory onCancel={() => setIsEditing(false)} />}

				{isEditing || <Footer />}
			</div>
		</DataProvider>
	);
}
