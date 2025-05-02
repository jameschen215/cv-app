import { capitalFirstLetter } from '../../helper/utils';

export default function Experiences({ data }) {
	if (!data) return;

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
							jobTitle,
							jobType,
							employer,
							startDateMonth,
							startDateYear,
							endDateMonth,
							endDateYear,
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
											{startDateMonth.slice(0, 3) || ''} {startDateYear}
										</span>{' '}
										-{' '}
										<span className="end-date">
											{present
												? 'present'
												: (endDateMonth.slice(0, 3) || '') + ' ' + endDateYear}
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
