import '../../styles/data-display.css';
import { DeleteButton, EditButton } from './buttons';

import { ExperienceItem, EducationItem, SkillItem } from './display-items';

const config = {
	personalDetails: { isList: false, showDelete: false },
	personalProfile: { isList: false, showDelete: false },
	workExperiences: {
		isList: true,
		showDelete: true,
		ItemComponent: ExperienceItem,
	},
	education: {
		isList: true,
		showDelete: true,
		ItemComponent: EducationItem,
	},
	skills: {
		isList: true,
		showDelete: true,
		ItemComponent: SkillItem,
	},
};

export default function DataDisplay({ title, data, onEdit, onDelete }) {
	const { isList, showDelete, ItemComponent } = config[title] || {};

	if (!config[title]) {
		return <div>Unknown Section</div>;
	}

	return (
		<div className={`data-display ${title}`}>
			{isList &&
				data?.map((item) => (
					<div key={item.id} className="data-group">
						<div className="data">
							{ItemComponent && <ItemComponent item={item} />}
							{showDelete && <DeleteButton onClick={() => onDelete(item.id)} />}
						</div>

						<EditButton
							onClick={() => onEdit({ mode: 'editing', editId: item.id })}
						/>
					</div>
				))}

			{isList || (
				<div className="data-group">
					<div className="data">
						{title === 'personalDetails' && (
							<>
								<span className="item-title">
									{data.firstName} {data.lastName}
								</span>

								<span>{data.email}</span>
								{data.portfolio && <span>{data.portfolio}</span>}

								<div>
									<span>{data.position}</span> | <span>{data.phoneNumber}</span>{' '}
									| <span>{data.address}</span>
								</div>
							</>
						)}

						{title === 'personalProfile' && <div>{data.profile}</div>}
					</div>

					<EditButton
						onClick={() => onEdit({ mode: 'editing', editId: null })}
					/>
				</div>
			)}
		</div>
	);
}
