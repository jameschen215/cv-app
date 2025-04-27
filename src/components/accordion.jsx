import '../styles/accordion.css';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

import { ICONS, ACCORDION_ITEMS } from '../helper/constants';

import FormComponent from './form-component';
import DataDisplay from './data-display';
import { useData, useDispatch } from '../context/hooks';

export default function Accordion() {
	const [openIndex, setOpenIndex] = useState(null);

	function toggleItem(index) {
		setOpenIndex((prev) => (prev === index ? null : index));
	}

	return (
		<div className="accordion">
			{ACCORDION_ITEMS.map((item, index) => (
				<AccordionItem
					key={index}
					isOpen={index === openIndex}
					onToggle={() => toggleItem(index)}
					item={item}
				/>
			))}
		</div>
	);
}

function AccordionItem({ isOpen, onToggle, item }) {
	return (
		<div className={`accordionItem ${isOpen ? 'open' : ''}`}>
			<AccordionTrigger item={item} onClick={onToggle} />
			<AccordionContent isOpen={isOpen} item={item} />
		</div>
	);
}

function AccordionTrigger({ item, onClick }) {
	const TitleIcon = ICONS[item.title];
	return (
		<button className="accordionTrigger" onClick={onClick}>
			<span className="icon accordionTitleIcon">
				<TitleIcon />
			</span>
			<h2 className="accordionTitle">{item.title}</h2>
			<span className="requiredSymbol">{item.required && 'Required *'}</span>
			<span className="icon accordionStateIcon">
				<ChevronDown />
			</span>
		</button>
	);
}

// -------------- Accordion Content --------------
function AccordionContent({ isOpen, item }) {
	const data = useData();
	const dispatch = useDispatch();

	const [status, setStatus] = useState({
		mode: 'adding',
		editId: null,
	});

	const showAddButton =
		!item.required ||
		(status.mode === 'showing' && !item.title.startsWith('Personal'));

	let editEntry = null;
	if (Array.isArray(data[item.title])) {
		editEntry = data[item.title].filter(
			(entry) => entry.id === status.editId
		)[0];
	}

	function handleChangeStatus(status) {
		console.log(status.mode);
		setStatus(status);
	}

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
				formData: formData,
			});
		}

		setStatus((prev) => ({
			...prev,
			submitted: true,
			mode: 'showing',
		}));
	}

	function handleDelete(id) {
		dispatch({
			type: 'delete',
			title: item.title,
			id: id,
		});
	}

	return (
		<div className={`accordionContent ${isOpen ? 'open' : ''}`}>
			{status.mode === 'showing' && (
				<DataDisplay
					title={item.title}
					data={data[item.title]}
					onDelete={handleDelete}
					onEdit={handleChangeStatus}
				/>
			)}

			{status.mode === 'adding' && item.required && (
				<FormComponent
					mode="add"
					required={item.required}
					title={item.title}
					formFields={item.content}
					onSubmit={handleSubmit}
					onCancel={handleChangeStatus}
				/>
			)}

			{status.mode === 'editing' && item.required && (
				<FormComponent
					mode="edit"
					required={item.required}
					title={item.title}
					data={editEntry || data[item.title]}
					formFields={item.content}
					onSubmit={handleSubmit}
					onCancel={handleChangeStatus}
				/>
			)}

			{showAddButton && <AddButton onClick={handleChangeStatus} item={item} />}
		</div>
	);
}

function AddButton({ item, onClick }) {
	let content = '';

	if (item.title === 'Work Experiences') {
		content = 'Add new experience';
	} else if (item.title === 'Education') {
		content = 'Add new education';
	} else if (item.title === 'Skills') {
		content = 'Add new skill';
	}

	function handleClick() {
		item.required = true;
		onClick((prev) => ({ ...prev, mode: 'adding' }));
	}

	return (
		<button className="button addButton" type="button" onClick={handleClick}>
			{content}
		</button>
	);
}
