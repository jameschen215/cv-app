export default function Education({ data }) {
	if (!data) return;

	return (
		<div className="info-group">
			<div className="info-title">
				<h2>Education</h2>
				<div className="underline"></div>
			</div>

			<ul className="info-wrapper info-wrapper-edu">
				{data.map(
					(
						{
							completionDateMonth: month,
							completionDateYear: year,
							school,
							qualification,
							subject,
						},
						index
					) => (
						<li className="info-row-vertical" key={index}>
							<h3 className="school">
								<span>
									{month}, {year}
								</span>
								<span>{school} </span>
							</h3>
							<span>
								<em>{qualification}</em> in <em>{subject}</em>
							</span>
						</li>
					)
				)}
			</ul>
		</div>
	);
}
