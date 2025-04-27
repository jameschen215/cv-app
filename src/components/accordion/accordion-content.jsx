import { useState } from 'react';

import { useData, useDispatch } from '../../context/hooks';

import FormComponent from '../form-component';
import AddButton from './accordion-add-button';
import DataDisplay from '../data-display/data-display';

export default function AccordionContent({ item, isOpen }) {
	const data = useData();
	const dispatch = useDispatch();

	const [status, setStatus] = useState({
		mode: 'adding', // 'adding', 'editing', 'showing'
		editId: null,
	});

	const [isRequired, setIsRequired] = useState(item.required);

	const showAddButton =
		!isRequired ||
		(status.mode === 'showing' && !item.title.startsWith('Personal'));

	const editEntry = Array.isArray(data[item.title])
		? data[item.title].find((entry) => entry.id === status.editId)
		: data[item.title];

	function handleSubmit(formData) {
		if (status.mode === 'adding') {
			dispatch({
				type: 'add',
				title: item.title,
				formData: { ...formData, id: crypto.randomUUID() },
			});
		} else if (status.mode === 'editing') {
			dispatch({
				type: 'edit',
				title: item.title,
				formData,
			});
		}

		setStatus({ mode: 'showing', editId: null });
	}

	function handleDelete(id) {
		dispatch({
			type: 'delete',
			title: item.title,
			id,
		});
	}

	return (
		<div
			id={`accordion-content-${item.title}`}
			className={`accordion-content ${isOpen ? 'open' : ''}`}
			role="region"
			aria-labelledby={`accordion-trigger-${item.title}`}>
			{status.mode === 'showing' && (
				<DataDisplay
					title={item.title}
					data={data[item.title]}
					onDelete={handleDelete}
					onEdit={setStatus}
				/>
			)}

			{status.mode === 'adding' && isRequired && (
				<FormComponent
					mode="add"
					title={item.title}
					// required={item.required}
					formFields={item.content}
					onSubmit={handleSubmit}
					onCancel={() => setStatus({ mode: 'showing', editId: null })}
				/>
			)}

			{status.mode === 'editing' && isRequired && (
				<FormComponent
					mode="edit"
					// required={item.required}
					title={item.title}
					// data={editEntry || data[item.title]}
					formFields={item.content}
					data={editEntry}
					onSubmit={handleSubmit}
					onCancel={() => setStatus({ mode: 'showing', editId: null })}
				/>
			)}

			{showAddButton && (
				<AddButton
					item={item}
					onClick={() => {
						setIsRequired(true);
						setStatus({ mode: 'adding', editId: null });
					}}
				/>
			)}
		</div>
	);
}
