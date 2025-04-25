import {
	User,
	FileSliders,
	BriefcaseBusiness,
	GraduationCap,
	SlidersHorizontal,
	Users,
} from 'lucide-react';

export const ICONS = {
	'Personal Details': User,
	'Personal Profile': FileSliders,
	'Work Experiences': BriefcaseBusiness,
	Education: GraduationCap,
	Skills: SlidersHorizontal,
	References: Users,
};

export const ACCORDION_ITEMS = [
	{
		id: crypto.randomUUID(),
		title: 'Personal Details',
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
				name: 'first-name',
				label: 'First Name',
				type: 'text',
				placeholder: 'John',
			},
			{
				id: crypto.randomUUID(),
				name: 'last-name',
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
				name: 'phone-number',
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
		],
	},
	{
		id: crypto.randomUUID(),
		title: 'Personal Profile',
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
		title: 'Work Experiences',
		addable: true,
		content: [
			{
				id: crypto.randomUUID(),
				name: 'job-title',
				label: 'Job title',
				type: 'text',
			},
			{
				id: crypto.randomUUID(),
				name: 'job-type',
				label: 'Job Type',
				type: 'radio',
				options: [
					{ label: 'Full-time', value: 'full-time' },
					{ label: 'Part-time', value: 'part-time' },
				],
			},
			{
				id: crypto.randomUUID(),
				name: 'employer',
				label: 'Employer',
				type: 'text',
			},
			{
				id: crypto.randomUUID(),
				name: 'employer-address',
				label: 'City',
				type: 'text',
			},
			{
				id: crypto.randomUUID(),
				name: 'start-date',
				label: 'Start Date',
				type: 'date',
			},
			{
				id: crypto.randomUUID(),
				name: 'end-date',
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
		title: 'Education',
		addable: true,
		content: [
			{
				id: crypto.randomUUID(),
				name: 'school',
				label: 'University/College/School',
				type: 'text',
			},
			{
				id: crypto.randomUUID(),
				name: 'qualifications',
				label: 'Qualifications',
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
				name: 'completion-date',
				label: 'Date of Completion',
				type: 'date',
			},
		],
	},
	{
		id: crypto.randomUUID(),
		title: 'Skills',
		addable: true,
		content: [
			{
				id: crypto.randomUUID(),
				name: 'skills',
				label: 'Skills',
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
