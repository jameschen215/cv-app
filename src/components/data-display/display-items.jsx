export function ExperienceItem({ item }) {
	const startDate = item.startDateMonth?.slice(0, 3) + ' ' + item.startDateYear;
	const endDate = item.present
		? 'Present'
		: item.endDateMonth?.slice(0, 3) + ' ' + item.endDateYear;

	return (
		<div className="item-content">
			<span className="item-title">{item.jobTitle}</span>

			<div>
				<span>{item.employer}</span> | <span>{item.employerAddress}</span> |{' '}
				<span>
					{startDate} - {endDate}
				</span>
			</div>
		</div>
	);
}

export function EducationItem({ item }) {
	const date = item.completionDateMonth + ' ' + item.completionDateYear;

	return (
		<div className="item-content">
			<span className="item-title">{item.school}</span>

			<div>
				<span>{item.qualification}</span> | <span>{item.subject}</span> |{' '}
				<span>{date}</span>
			</div>
		</div>
	);
}

export function SkillItem({ item }) {
	return (
		<div className="item-content skill">
			<span>{item.skill}</span> - <span>{item.proficiency}</span>
		</div>
	);
}
