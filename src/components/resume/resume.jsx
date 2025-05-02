import '../../styles/resume.css';
import Contact from './contact';
import Education from './education';
import Experiences from './experiences';
import Header from './header';
import Photo from './photo';
import Profile from './profile';
import Skills from './skills';

export default function Resume({ data }) {
	if (!data) return;

	const {
		personalDetails,
		personalProfile,
		workExperiences,
		education,
		skills,
	} = data;

	return (
		<div className="resume">
			<LeftSide>
				<Photo photo={personalDetails?.photo} />
				<Contact data={personalDetails} />
				<Education data={education} />
				<Skills skills={skills} />
			</LeftSide>

			<RightSide>
				<Header
					firstName={personalDetails?.firstName}
					lastName={personalDetails?.lastName}
					position={personalDetails?.position}
				/>
				<Profile profile={personalProfile?.profile} />

				<Experiences data={workExperiences} />
			</RightSide>
		</div>
	);
}

function LeftSide({ children }) {
	return <div className="left-side">{children}</div>;
}

function RightSide({ children }) {
	return <div className="right-side">{children}</div>;
}
