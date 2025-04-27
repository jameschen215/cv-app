export function ExperienceItem({ item }) {
	const startDate = item['start-date-month'] + ', ' + item['start-date-year'];
	const endDate = item['end-date-month'] + ', ' + item['end-date-year'];

	return (
		<>
			<span className="item-title">{item['job-title']}</span>

			<div>
				<span>{item.employer}</span> | <span>{item['employer-address']}</span> |{' '}
				<span>
					{startDate} - {endDate}
				</span>
			</div>
		</>
	);
}

export function EducationItem({ item }) {
	const date =
		item['completion-date-month'] + ', ' + item['completion-date-year'];

	return (
		<>
			<span className="item-title">{item.school}</span>

			<div>
				<span>{item.qualification}</span> | <span>{item.subject}</span> |{' '}
				<span>{date}</span>
			</div>
		</>
	);
}

export function SkillItem({ item }) {
	return (
		<div>
			<span>{item.skill}</span> - <span>{item.proficiency}</span>
		</div>
	);
}
