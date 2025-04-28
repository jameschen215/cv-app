import '../styles/cv-factory.css';

import { ACCORDION_ITEMS } from '../helper/constants';

import { DataProvider } from '../context/data-provider';
import Header from './header';
import Accordion from './accordion/accordion';
import Modal from './modal';
import { useState } from 'react';

export default function CVFactory() {
	const [showModal, setShowModal] = useState(false);

	return (
		<DataProvider>
			<div className="factory">
				<Header isFactory={true} />

				<main className="main">
					<Accordion items={ACCORDION_ITEMS} />
					<button className="cv-preview-btn" onClick={() => setShowModal(true)}>
						Preview Resume
					</button>
				</main>

				{showModal && (
					<Modal isOpen={showModal} onClose={() => setShowModal(false)}>
						Resume
					</Modal>
				)}
			</div>
		</DataProvider>
	);
}
