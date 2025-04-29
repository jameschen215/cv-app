import { PhoneCall, Mail, MapPin, Globe } from 'lucide-react';

export default function Contact({
	data: { 'phone-number': phoneNumber, email, address, portfolio },
}) {
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

				<li className="info-row">
					<div className="info-icon">{<MapPin strokeWidth={1} />}</div>{' '}
					<span className="info-text">{address}</span>
				</li>

				<li className="info-row">
					<div className="info-icon">{<Globe strokeWidth={1} />}</div>{' '}
					<span className="info-text">{portfolio}</span>
				</li>
			</ul>
		</div>
	);
}
