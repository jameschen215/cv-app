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

function AccordionContent({ isOpen, item }) {
	const data = useData();
	const dispatch = useDispatch();

	const [status, setStatus] = useState({
		mode: 'add',
		submitted: false,
		editId: null,
	});

	let editEntry = null;
	if (Array.isArray(data[item.title])) {
		editEntry = data[item.title].filter(
			(entry) => entry.id === status.editId
		)[0];
	}

	function handleChangeStatus(status) {
		setStatus(status);
	}

	function handleSubmit(formData) {
		if (status.mode === 'add') {
			dispatch({
				type: 'add',
				title: item.title,
				formData: { ...formData, id: crypto.randomUUID() },
			});
		} else if (status.mode === 'edit') {
			dispatch({
				type: 'edit',
				title: item.title,
				formData: formData,
			});
		}

		setStatus((prev) => ({
			...prev,
			submitted: true,
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
			{status.submitted ? (
				<DataDisplay
					title={item.title}
					data={data[item.title]}
					onClick={handleChangeStatus}
					onDelete={handleDelete}
				/>
			) : status.mode === 'add' ? (
				<FormComponent
					mode="add"
					required={item.required}
					formFields={item.content}
					onSubmit={handleSubmit}
				/>
			) : (
				<FormComponent
					mode="edit"
					required={item.required}
					data={editEntry || data[item.title]}
					formFields={item.content}
					onSubmit={handleSubmit}
				/>
			)}
		</div>
	);
}
