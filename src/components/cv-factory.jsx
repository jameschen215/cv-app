import '../styles/cv-factory.css';

import { ACCORDION_ITEMS } from '../helper/constants';

import { DataProvider } from '../context/data-provider';
import Header from './header';
import Accordion from './accordion/accordion';

export default function CVFactory() {
	return (
		<DataProvider>
			<div className="factory">
				<Header isFactory={true} />

				<main className="main">
					<Accordion items={ACCORDION_ITEMS} />
					<button className="cv-preview">CV Preview</button>
				</main>
			</div>
		</DataProvider>
	);
}
