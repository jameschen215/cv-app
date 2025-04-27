import AccordionContent from './accordion-content';
import AccordionTrigger from './accordion-trigger';

export default function AccordionItem({ item, isOpen, onToggle }) {
	return (
		<div className="accordion-item">
			<AccordionTrigger item={item} isOpen={isOpen} onToggle={onToggle} />
			<AccordionContent item={item} isOpen={isOpen} />
		</div>
	);
}
