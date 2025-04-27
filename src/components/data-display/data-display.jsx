import '../../styles/data-display.css';
import { DeleteButton, EditButton } from './buttons';

import { ExperienceItem, EducationItem, SkillItem } from './display-items';

const config = {
	'Personal Details': { isList: false, showDelete: false },
	'Personal Profile': { isList: false, showDelete: false },
	'Work Experiences': {
		isList: true,
		showDelete: true,
		ItemComponent: ExperienceItem,
	},
	Education: {
		isList: true,
		showDelete: true,
		ItemComponent: EducationItem,
	},
	Skills: {
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
						{title === 'Personal Details' && (
							//
							<>
								<span className="item-title">
									{data['first-name']} {data['last-name']}
								</span>

								<span>{data.email}</span>

								<div>
									<span>{data.position}</span> |{' '}
									<span>{data['phone-number']}</span> |{' '}
									<span>{data.address}</span>
								</div>
							</>
						)}

						{title === 'Personal Profile' && <div>{data.profile}</div>}
					</div>

					<EditButton
						onClick={() => onEdit({ mode: 'editing', editId: null })}
					/>
				</div>
			)}
		</div>
	);
}
