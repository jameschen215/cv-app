import '../styles/data-display.css';

import { SquarePen, Trash2 } from 'lucide-react';

export default function DataDisplay({ title, data, onEdit, onDelete }) {
	return (
		<div className={`dataDisplay ${title}`}>
			{title === 'Personal Details' ? (
				<div className="dataGroup">
					<div className="data">
						<h3>
							{data['first-name']} {data['last-name']}
						</h3>
						<span>{data.email}</span>
						<div>
							<span>{data.position}</span> | <span>{data['phone-number']}</span>{' '}
							| <span>{data.address}</span>
						</div>
					</div>

					<button
						className="button editButton"
						onClick={() => onEdit((prev) => ({ ...prev, mode: 'editing' }))}>
						<span className="icon editIcon">
							<SquarePen strokeWidth={2} />
						</span>{' '}
						Edit
					</button>
				</div>
			) : title === 'Personal Profile' ? (
				<div className="dataGroup">
					<div className="data">{data.profile}</div>
					<button
						className="button editButton"
						onClick={() => onEdit((prev) => ({ ...prev, mode: 'editing' }))}>
						<span className="icon editIcon">
							<SquarePen strokeWidth={2} />
						</span>{' '}
						Edit
					</button>
				</div>
			) : title === 'Work Experiences' ? (
				<>
					{data?.map((exp) => (
						<div className="dataGroup" key={exp.id}>
							<div className="data">
								<h3>{exp['job-title']}</h3>
								<div>
									<span>{exp.employer}</span> |{' '}
									<span>{exp['employer-address']}</span> |{' '}
									<span>
										{exp['start-date-month'].slice(0, 3)},{' '}
										{exp['start-date-year']} -{' '}
										{exp['end-date-month'].slice(0, 3)}, {exp['end-date-year']}
										{}
									</span>
								</div>
								<button
									className="button deleteButton"
									onClick={() => onDelete(exp.id)}>
									<span className="icon deleteIcon">
										<Trash2 strokeWidth={2} />
									</span>{' '}
									Remove
								</button>
							</div>

							<button
								className="button editButton"
								onClick={() => onEdit({ mode: 'editing', editId: exp.id })}>
								<span className="icon editIcon">
									<SquarePen strokeWidth={2} />
								</span>{' '}
								Edit
							</button>
						</div>
					))}
				</>
			) : title === 'Education' ? (
				<>
					{data?.map((edu) => (
						<div className="dataGroup" key={edu.id}>
							<div className="data">
								<h3>{edu.school}</h3>
								<div>
									<span>{edu.qualification}</span> | <span>{edu.subject}</span>{' '}
									|{' '}
									<span>
										{edu['completion-date-month']},{' '}
										{edu['completion-date-year']}
									</span>
								</div>
								<button
									className="button deleteButton"
									onClick={() => onDelete(edu.id)}>
									<span className="icon deleteIcon">
										<Trash2 strokeWidth={2} />
									</span>{' '}
									Remove
								</button>
							</div>

							<button
								className="button editButton"
								onClick={() => onEdit({ mode: 'editing', editId: edu.id })}>
								<span className="icon editIcon">
									<SquarePen strokeWidth={2} />
								</span>{' '}
								Edit
							</button>
						</div>
					))}
				</>
			) : (
				<>
					{data?.map((skill) => (
						<div className="dataGroup" key={skill.id}>
							<div className="data">
								<div>
									<span>{skill.skill}</span> - <span>{skill.proficiency}</span>
								</div>
								<button
									className="button deleteButton"
									onClick={() => onDelete(skill.id)}>
									<span className="icon deleteIcon">
										<Trash2 strokeWidth={2} />
									</span>{' '}
									Remove
								</button>
							</div>

							<button
								className="button editButton"
								onClick={() => onEdit({ mode: 'editing', editId: skill.id })}>
								<span className="icon editIcon">
									<SquarePen strokeWidth={2} />
								</span>{' '}
								Edit
							</button>
						</div>
					))}
				</>
			)}
		</div>
	);
}
