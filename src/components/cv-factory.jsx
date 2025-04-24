import '../styles/cv-factory.css';

import Accordion from './accordion';
import Header from './header';
import { DataProvider } from '../context/data-provider';

export default function CVFactory() {
	return (
		<DataProvider>
			<div className="factory">
				<Header isFactory={true} />

				<main className="main">
					<Accordion />
					<button className="cv-preview">CV Preview</button>
				</main>
			</div>
		</DataProvider>
	);
}
