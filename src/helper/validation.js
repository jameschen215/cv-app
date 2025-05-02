import { capitalFirstLetter } from './utils';

// ------------------------ Validate form ------------------------
export function validateForm(title, formData) {
	switch (title) {
		case 'personalDetails': {
			return validatePersonalDetails(formData);
		}
		case 'personalProfile': {
			return validatePersonalProfile(formData);
		}
		case 'workExperiences': {
			return validateWorkExperiences(formData);
		}
		case 'education': {
			return validateEducation(formData);
		}
		case 'skills': {
			return validateSkills(formData);
		}
		default:
			return null;
	}
}

// Validate content of various titles
function validatePersonalDetails(formData) {
	let errors = {};
	const telRe = /^\+?[0-9]{7,15}$/;
	const emailRe = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

	if (!formData.firstName.trim()) {
		errors.firstName = 'First name is required.';
	}

	if (!formData.lastName.trim()) {
		errors.lastName = 'Last name is required.';
	}

	if (!formData.position.trim()) {
		errors.position = 'Position is required.';
	}

	if (!formData.email.trim()) {
		errors.email = 'Email is required.';
	} else if (!emailRe.test(formData.email)) {
		errors.email = 'Email is invalid.';
	}

	if (!formData.phoneNumber.trim()) {
		errors.phoneNumber = 'Phone number is required.';
	} else if (!telRe.test(formData.phoneNumber)) {
		errors.phoneNumber = 'Phone number is invalid.';
	}

	if (!formData.address.trim()) {
		errors.address = 'Address is required.';
	}

	return errors;
}

function validatePersonalProfile(formData) {
	let errors = {};

	if (!formData.profile.trim()) {
		errors.profile = 'Profile is required.';
	}

	return errors;
}

function validateWorkExperiences(formData) {
	let errors = {};

	if (!formData.jobTitle.trim()) {
		errors.jobTitle = 'Job title is required.';
	}

	if (!formData.jobType.trim()) {
		errors.jobType = 'Job type is required.';
	}

	if (!formData.responsibilities.trim()) {
		errors.responsibilities = 'Responsibilities is required.';
	}

	if (!formData.employer.trim()) {
		errors.employer = 'Employer is required.';
	}

	if (!formData.employerAddress.trim()) {
		errors.employerAddress = 'Employer address is required.';
	}

	if (!formData.startDateMonth?.trim()) {
		errors.startDateMonth = 'Month is required.';
	}

	if (!formData.startDateYear?.trim()) {
		errors.startDateYear = 'Year is required.';
	}

	if (!formData.present) {
		if (!formData.endDateMonth?.trim()) {
			errors.endDateMonth = 'Month is required.';
		}

		if (!formData.endDateYear?.trim()) {
			errors.endDateYear = 'Year is required.';
		}
	}
	return errors;
}

function validateEducation(formData) {
	let errors = {};

	if (!formData.school.trim()) {
		errors.school = 'School is required.';
	}

	if (!formData.qualification.trim()) {
		errors.qualification = 'Qualification is required.';
	}

	if (!formData.subject.trim()) {
		errors.subject = 'Subject is required.';
	}

	if (!formData.completionDateMonth?.trim()) {
		errors.completionDateMonth = 'Month is required.';
	}

	if (!formData.completionDateYear?.trim()) {
		errors.completionDateYear = 'Year is required.';
	}

	return errors;
}

function validateSkills(formData) {
	let errors = {};

	if (!formData.skill?.trim()) {
		errors.skill = 'Skill is required.';
	}

	if (!formData.proficiency) {
		errors.proficiency = 'Proficiency is required.';
	}

	return errors;
}

// -------------------- Validate form controls --------------------
// Validate the input data of text type
export function validateText(name, value) {
	let capitalizedName = '';
	if (name.includes('-')) {
		capitalizedName = capitalFirstLetter(name.split('-').join(' '));
	} else {
		capitalizedName = capitalFirstLetter(name);
	}

	if (value.trim() === '') {
		return `${capitalizedName} is required.`;
	}

	return null;
}

// Validate the input data of email type
export function validateEmail(email) {
	const re = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

	if (!re.test(String(email).toLowerCase())) {
		return 'Invalid email format.';
	}
	return null;
}

// Validate the input data of email type
export function validateURL(url) {
	const re = /^www\.[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;

	if (!re.test(String(url).toLowerCase())) {
		return 'Invalid url format.';
	}
	return null;
}

// Validate the input data of tel type
export function validateTel(phoneNumber) {
	const re = /^\+?[0-9]{7,15}$/;

	if (!re.test(String(phoneNumber))) {
		return 'Invalid phone number format.';
	}

	return null;
}
