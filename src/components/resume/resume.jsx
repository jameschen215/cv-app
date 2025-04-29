import '../../styles/resume.css';
import Contact from './contact';
import Education from './education';
import Experiences from './experiences';
import Header from './header';
import Photo from './photo';
import Profile from './profile';
import Skills from './skills';

export default function Resume({ data }) {
	return (
		<div className="resume">
			<LeftSide>
				<Photo photo={data['Personal Details'].photo} />
				<Contact data={data['Personal Details']} />
				<Education data={data['Education']} />
				<Skills skills={data['Skills']} />
			</LeftSide>

			<RightSide>
				<Header
					firstName={data['Personal Details']['first-name']}
					lastName={data['Personal Details']['last-name']}
					position={data['Personal Details'].position}
				/>
				<Profile profile={data['Personal Profile'].profile} />

				<Experiences data={data['Work Experiences']} />
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
