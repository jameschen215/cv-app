import '../styles/cv-factory.css';

import { useState } from 'react';

import { ACCORDION_ITEMS } from '../helper/constants';

import Header from './header';
import Accordion from './accordion/accordion';
import Modal from './modal';
import Resume from './resume/resume';
import { useData } from '../context/hooks';
import Button from './button';

export default function CVFactory({ onCancel }) {
	const [showModal, setShowModal] = useState(false);
	const data = useData();

	return (
		<div className="factory">
			<main className="main">
				<Header onLandingPage={false} />

				<Accordion items={ACCORDION_ITEMS} />

				<div className="button-group">
					<Button
						classNames="back--btn btn"
						label="Cancel editing"
						onClick={onCancel}>
						Cancel Editing
					</Button>

					<Button
						classNames="complete--btn btn"
						label="Save resume"
						onClick={() => alert("Not here yet - but it's on the way!")}>
						Save Resume
					</Button>

					<Button
						classNames="preview--btn btn"
						label="Preview resume"
						onClick={() => setShowModal(true)}>
						Preview Resume
					</Button>
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
