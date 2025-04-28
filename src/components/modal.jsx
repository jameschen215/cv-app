import '../styles/modal.css';

import { X } from 'lucide-react';

export default function Modal({ isOpen, onClose, children }) {
	return (
		<dialog className={`modal ${isOpen ? 'show' : ''}`}>
			<ModalClose onClose={onClose} />
			<ModalContent>{children}</ModalContent>
		</dialog>
	);
}

function ModalContent({ children }) {
	return <div className="modal-content">{children}</div>;
}

function ModalClose({ onClose }) {
	return (
		<div className="modal-close">
			<button
				type="button"
				// id="modal-close"
				className="modal-close-btn"
				onClick={onClose}>
				<X strokeWidth={1.5} />
			</button>
		</div>
	);
}
