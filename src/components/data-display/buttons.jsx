import { SquarePen, Trash2 } from 'lucide-react';

export function EditButton({ onClick }) {
	return (
		<button
			className="data-btn data-btn--edit"
			aria-label="Edit data"
			onClick={onClick}>
			<span className="icon edit--icon">
				<SquarePen strokeWidth={2} />
			</span>{' '}
			Edit
		</button>
	);
}

export function DeleteButton({ onClick }) {
	return (
		<button
			className="data-btn data-btn--delete"
			aria-label="Delete data"
			onClick={onClick}>
			<span className="icon delete--icon">
				<Trash2 strokeWidth={2} />
			</span>{' '}
			Remove
		</button>
	);
}
