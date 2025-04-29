import '../../styles/resume/contact.css';

import { Dot } from 'lucide-react';

export default function Skills({ skills }) {
	return (
		<div className="info-group">
			<div className="info-title">
				<h2>Skills</h2>
				<div className="underline"></div>
			</div>

			<ul className="info-wrapper">
				{skills.map(({ skill, proficiency }, index) => (
					<li className="info-row skill" key={index}>
						<div>
							<span className="info-icon">
								<Dot strokeWidth={5} />
							</span>
							<label htmlFor={skill} className="info-text">
								{skill}
							</label>
						</div>
						<progress id={skill} max={100} value={proficiency}>
							{proficiency}%
						</progress>
					</li>
				))}
			</ul>
		</div>
	);
}
