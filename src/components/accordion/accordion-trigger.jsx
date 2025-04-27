import { ICONS } from '../../helper/constants';

import { ChevronDown } from 'lucide-react';

export default function AccordionTrigger({ item, isOpen, onToggle }) {
	const TitleIcon = ICONS[item.title];
	return (
		<button
			className="accordion-trigger"
			id={`accordion-trigger-${item.title}`}
			aria-expanded={isOpen}
			aria-controls={`accordion-content-${item.title}`}
			onClick={onToggle}
			type="button">
			<span className="icon accordion-title-icon">
				<TitleIcon />
			</span>
			<span className="accordion-title">{item.title}</span>
			<span className="required-symbol">{item.required && 'Required *'}</span>
			<span className="icon accordion-state-icon">
				<ChevronDown />
			</span>
		</button>
	);
}
