import '../styles/data-display.css';

import { SquarePen, Trash2 } from 'lucide-react';

export default function DataDisplay({ title, data, onClick, onDelete }) {
	return (
		<div className={`dataDisplay ${title}`}>
			{title === 'Personal Details' ? (
				<div className="dataGroup">
					<div className="data">
						<h3>
							{data.firstName} {data.lastName}
						</h3>
						<span>{data.email}</span>
						<div>
							<span>{data.position}</span> | <span>{data.phoneNumber}</span> |{' '}
							<span>{data.address}</span>
						</div>
					</div>

					<button
						className="button editButton"
						onClick={() =>
							onClick((prev) => ({ ...prev, mode: 'edit', submitted: false }))
						}>
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
						onClick={() =>
							onClick((prev) => ({ ...prev, mode: 'edit', submitted: false }))
						}>
						<span className="icon editIcon">
							<SquarePen strokeWidth={2} />
						</span>{' '}
						Edit
					</button>
				</div>
			) : title === 'Work Experiences' ? (
				<>
					{data.map((exp) => (
						<div className="dataGroup" key={exp.id}>
							<div className="data">
								<h3>{exp.jobTitle}</h3>
								<div>
									<span>{exp.employer}</span> |{' '}
									<span>{exp.employerAddress}</span> |{' '}
									<span>
										{exp.startDate} - {exp.endDate}
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
								onClick={() =>
									onClick({ mode: 'edit', submitted: false, editId: exp.id })
								}>
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
					{data.map((edu) => (
						<div className="dataGroup" key={edu.id}>
							<div className="data">
								<h3>{edu.school}</h3>
								<div>
									<span>{edu.qualifications}</span> | <span>{edu.subject}</span>{' '}
									| <span>{edu.completionDate}</span>
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
								onClick={() =>
									onClick({ mode: 'edit', submitted: false, editId: edu.id })
								}>
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
					{data.map((skill) => (
						<div className="dataGroup" key={skill.id}>
							<div className="data">
								<div>
									<span>{skill.skills}</span> - <span>{skill.proficiency}</span>
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
								onClick={() =>
									onClick({ mode: 'edit', submitted: false, editId: skill.id })
								}>
								<span className="icon editIcon">
									<SquarePen strokeWidth={2} />
								</span>{' '}
								Edit
							</button>
						</div>
					))}
				</>
			)}

			{!title.startsWith('Personal') && (
				<button
					className="button addButton"
					type="button"
					onClick={(prev) =>
						onClick({ ...prev, mode: 'add', submitted: false })
					}>
					Add more
				</button>
			)}
		</div>
	);
}
