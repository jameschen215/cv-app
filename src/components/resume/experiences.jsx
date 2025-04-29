import { capitalFirstLetter } from '../../helper/utils';

export default function Experiences({ data }) {
	return (
		<div className="experiences">
			<div className="info-title">
				<h2>Work experiences</h2>
				<div className="underline"></div>
			</div>

			<div className="info-content">
				{data.map(
					(
						{
							'job-title': jobTitle,
							'job-type': jobType,
							employer,
							'start-date-month': startMonth,
							'start-date-year': startYear,
							'end-date-month': endMonth,
							'end-date-year': endYear,
							present,
							responsibilities,
						},
						index
					) => (
						<div className="exp-wrapper" key={index}>
							<div className="decor">
								<span className="circle"></span>
								<span className="rect"></span>
							</div>

							<div className="exp">
								<div className="part-one">
									<h3 className="employer">{employer}</h3>

									<div className="date">
										<span className="start-date">
											{startMonth.slice(0, 3) || ''} {startYear}
										</span>{' '}
										-{' '}
										<span className="end-date">
											{present
												? 'present'
												: (endMonth.slice(0, 3) || '') + ' ' + endYear}
										</span>
									</div>
								</div>
								<div className="part-two">
									<span className="job-title">{jobTitle}</span> -{' '}
									<span className="job-type">
										{capitalFirstLetter(jobType)}
									</span>
								</div>
								<div className="part-three">{responsibilities}</div>
							</div>
						</div>
					)
				)}
			</div>
		</div>
	);
}
