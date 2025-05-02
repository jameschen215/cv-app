import '../styles/cv-factory.css';

import { useState } from 'react';

import { ACCORDION_ITEMS } from '../helper/constants';

import Header from './header';
import Accordion from './accordion/accordion';
import Modal from './modal';
import Resume from './resume/resume';
import { useData } from '../context/hooks';

export default function CVFactory({ onCancel }) {
	const [showModal, setShowModal] = useState(false);
	const data = useData();

	return (
		<div className="factory">
			<main className="main">
				<Header onLandingPage={false} />

				<Accordion items={ACCORDION_ITEMS} />

				<div className="button-group">
					<button className="back-btn btn" onClick={onCancel}>
						Cancel Editing
					</button>
					<button
						className="complete-btn btn"
						onClick={() => alert('To be continued...')}>
						Save Resume
					</button>
					<button
						className="cv-preview-btn btn"
						onClick={() => setShowModal(true)}>
						Preview Resume
					</button>
				</div>
			</main>

			<aside className="aside">
				<div className="resume-wrapper">
					<Resume data={data} />
				</div>
			</aside>

			{showModal && (
				<Modal isOpen={showModal} onClose={() => setShowModal(false)}>
					<Resume data={data} />
				</Modal>
			)}
		</div>
	);
}
