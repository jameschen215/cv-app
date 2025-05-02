import { PhoneCall, Mail, MapPin, Globe } from 'lucide-react';

export default function Contact({ data }) {
	if (!data) return;

	const { phoneNumber, email, address, portfolio } = data;

	return (
		<div className="info-group">
			<div className="info-title">
				<h2>Contact</h2>
				<div className="underline"></div>
			</div>

			<ul className="info-wrapper">
				<li className="info-row">
					<div className="info-icon">{<PhoneCall strokeWidth={1} />}</div>{' '}
					<span className="info-text">{phoneNumber}</span>
				</li>

				<li className="info-row">
					<div className="info-icon">{<Mail strokeWidth={1} />}</div>{' '}
					<span className="info-text">{email}</span>
				</li>

				{portfolio && (
					<li className="info-row">
						<div className="info-icon">{<Globe strokeWidth={1} />}</div>{' '}
						<span className="info-text">{portfolio}</span>
					</li>
				)}

				<li className="info-row">
					<div className="info-icon">{<MapPin strokeWidth={1} />}</div>{' '}
					<span className="info-text">{address}</span>
				</li>
			</ul>
		</div>
	);
}
