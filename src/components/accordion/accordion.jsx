import '../../styles/accordion.css';

import { useState } from 'react';

import AccordionItem from './accordion-item';

export default function Accordion({ items }) {
	const [openIndex, setOpenIndex] = useState(null);

	function handleToggle(index) {
		setOpenIndex((prev) => (prev === index ? null : index));
	}

	return (
		<div className="accordion">
			{items.map((item, index) => (
				<AccordionItem
					key={index}
					item={item}
					isOpen={index === openIndex}
					onToggle={() => handleToggle(index)}
				/>
			))}
		</div>
	);
}
