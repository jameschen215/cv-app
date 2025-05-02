import {
	User,
	FileSliders,
	BriefcaseBusiness,
	GraduationCap,
	SlidersHorizontal,
	Users,
} from 'lucide-react';

export const ICONS = {
	personalDetails: User,
	personalProfile: FileSliders,
	workExperiences: BriefcaseBusiness,
	education: GraduationCap,
	skills: SlidersHorizontal,
	references: Users,
};

export const ACCORDION_ITEMS = [
	{
		id: crypto.randomUUID(),
		titleForLabel: 'Personal Details',
		title: 'personalDetails',
		required: true,
		content: [
			{
				id: crypto.randomUUID(),
				name: 'photo',
				label: 'Photo',
				type: 'file',
				accept: 'image/*',
			},
			{
				id: crypto.randomUUID(),
				name: 'firstName',
				label: 'First Name',
				type: 'text',
				placeholder: 'John',
			},
			{
				id: crypto.randomUUID(),
				name: 'lastName',
				label: 'Last Name',
				type: 'text',
				placeholder: 'Doe',
			},
			{
				id: crypto.randomUUID(),
				name: 'position',
				label: 'Desired job position',
				type: 'text',
				placeholder: 'Frontend developer',
			},
			{
				id: crypto.randomUUID(),
				name: 'email',
				label: 'Email',
				type: 'email',
				placeholder: 'johndoe@example.com',
			},
			{
				id: crypto.randomUUID(),
				name: 'phoneNumber',
				label: 'Phone',
				type: 'tel',
				placeholder: '+86 123 4567 8900',
			},
			{
				id: crypto.randomUUID(),
				name: 'address',
				label: 'City/Town',
				type: 'text',
				placeholder: 'London',
			},
			{
				id: crypto.randomUUID(),
				name: 'portfolio',
				label: 'Portfolio',
				type: 'url',
				placeholder: 'www.johndoe.com',
			},
		],
	},
	{
		id: crypto.randomUUID(),
		titleForLabel: 'Personal Profile',
		title: 'personalProfile',
		required: true,
		content: [
			{
				id: crypto.randomUUID(),
				name: 'profile',
				label: 'Personal Profile',
				type: 'textarea',
				placeholder: 'Enter your professional profile.',
			},
		],
	},
	{
		id: crypto.randomUUID(),
		titleForLabel: 'Work Experiences',
		title: 'workExperiences',
		required: false,
		content: [
			{
				id: crypto.randomUUID(),
				name: 'jobTitle',
				label: 'Job title',
				type: 'text',
			},
			{
				id: crypto.randomUUID(),
				name: 'jobType',
				label: 'Job Type',
				type: 'radio',
				options: [
					{ label: 'Full-time', value: 'full-time' },
					{ label: 'Part-time', value: 'part-time' },
				],
			},
			{
				id: crypto.randomUUID(),
				name: 'responsibilities',
				label: 'Responsibilities',
				type: 'textarea',
			},
			{
				id: crypto.randomUUID(),
				name: 'employer',
				label: 'Employer',
				type: 'text',
			},
			{
				id: crypto.randomUUID(),
				name: 'employerAddress',
				label: 'City',
				type: 'text',
			},
			{
				id: crypto.randomUUID(),
				name: 'startDate',
				label: 'Start Date',
				type: 'date',
			},
			{
				id: crypto.randomUUID(),
				name: 'endDate',
				label: 'End Date',
				type: 'date',
			},
			{
				id: crypto.randomUUID(),
				name: 'present',
				label: 'I am currently working in this role.',
				type: 'checkbox',
			},
		],
	},
	{
		id: crypto.randomUUID(),
		titleForLabel: 'Education',
		title: 'education',
		required: false,
		content: [
			{
				id: crypto.randomUUID(),
				name: 'school',
				label: 'University/College/School',
				type: 'text',
			},
			{
				id: crypto.randomUUID(),
				name: 'qualification',
				label: 'Qualification',
				type: 'text',
			},
			{
				id: crypto.randomUUID(),
				name: 'subject',
				label: 'Subject/Course',
				type: 'text',
			},
			{
				id: crypto.randomUUID(),
				name: 'completionDate',
				label: 'Date of Completion',
				type: 'date',
			},
		],
	},
	{
		id: crypto.randomUUID(),
		titleForLabel: 'Skills',
		title: 'skills',
		required: false,
		content: [
			{
				id: crypto.randomUUID(),
				name: 'skill',
				label: 'Skill',
				type: 'text',
			},
			{
				id: crypto.randomUUID(),
				name: 'proficiency',
				label: 'Proficiency',
				type: 'range',
			},
		],
	},
];

export const MONTHS = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];

export const FAKE_DATA = {
	'Personal Details': {
		photo: null,
		'first-name': 'John',
		'last-name': 'Doe',
		position: 'Full stack web developer',
		email: 'johndoe@example.com',
		'phone-number': '+12345678900',
		address: 'Los Angeles',
		portfolio: 'www.johndoe.com',
	},
	'Personal Profile': {
		profile:
			'I am a hardworking and technically minded person who loves to solve problems and keep up to date with new technology both hardware and software related. I have a good understanding of products and always keep up to date with anything new that comes onto the market that might be beneficial for any of the users I deal with.',
	},
	'Work Experiences': [
		{
			id: crypto.randomUUID(),
			'job-title': 'UX Designer',
			'job-type': 'full-time',
			employer: 'Meta',
			'employer-address': 'Los Angeles',
			'start-date-month': 'June',
			'start-date-year': '2018',
			'end-date-month': 'July',
			'end-date-year': '2020',
			present: false,
			responsibilities:
				'Responsible for user research, user flow and wireframe development, prototyping, usability testing, and cross-functional collaboration to optimize user experience.',
		},
		{
			id: crypto.randomUUID(),
			'job-title': 'Frontend web developer',
			'job-type': 'part-time',
			employer: 'ABC',
			'employer-address': 'Los Angeles',
			'start-date-month': 'May',
			'start-date-year': '2019',
			'end-date-month': 'September',
			'end-date-year': '2021',
			present: false,
			responsibilities:
				'Develop and maintain responsive web applications, implement UI designs with modern frameworks, optimize performance, ensure cross-browser compatibility, and collaborate with designers and backend teams to deliver seamless user experiences.',
		},
	],
	Education: [
		{
			school: 'MIT',
			qualification: "Bachelor's Degree",
			subject: 'Computer Science',
			'completion-date-month': 'June',
			'completion-date-year': '2018',
		},
		{
			school: 'Wardiere University',
			qualification: 'Bachelor of Fine Arts',
			subject: 'Graphic Design',
			'completion-date-month': 'July',
			'completion-date-year': '2016',
		},
	],
	Skills: [
		{ skill: 'JavaScript', proficiency: 95 },
		{ skill: 'React', proficiency: 90 },
		{ skill: 'Next.js', proficiency: 85 },
		{ skill: 'Express', proficiency: 85 },
	],
};
