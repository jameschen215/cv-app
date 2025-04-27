import { capitalFirstLetter } from './utils';

// ------------------------ Validate form ------------------------
export function validateForm(title, formData) {
	switch (title) {
		case 'Personal Details': {
			return validatePersonalDetails(formData);
		}
		case 'Personal Profile': {
			return validatePersonalProfile(formData);
		}
		case 'Work Experiences': {
			return validateWorkExperiences(formData);
		}
		case 'Education': {
			return validateEducation(formData);
		}
		case 'Skills': {
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

	if (!formData['first-name'].trim()) {
		errors['first-name'] = 'First name is required.';
	}

	if (!formData['last-name'].trim()) {
		errors['last-name'] = 'Last name is required.';
	}

	if (!formData.position.trim()) {
		errors.position = 'Position is required.';
	}

	if (!formData.email.trim()) {
		errors.email = 'Email is required.';
	} else if (!emailRe.test(formData.email)) {
		errors.email = 'Email is invalid.';
	}

	if (!formData['phone-number'].trim()) {
		errors['phone-number'] = 'Phone number is required.';
	} else if (!telRe.test(formData['phone-number'])) {
		errors['phone-number'] = 'Phone number is invalid.';
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

	if (!formData['job-title'].trim()) {
		errors['job-title'] = 'Job title is required.';
	}

	if (!formData['job-type'].trim()) {
		errors['job-type'] = 'Job type is required.';
	}

	if (!formData.employer.trim()) {
		errors.employer = 'Employer is required.';
	}

	if (!formData['employer-address'].trim()) {
		errors['employer-address'] = 'Employer address is required.';
	}

	if (!formData['start-date-month']?.trim()) {
		errors['start-date-month'] = 'Month is required.';
	}

	if (!formData['start-date-year']?.trim()) {
		errors['start-date-year'] = 'Year is required.';
	}

	if (!formData.present) {
		if (!formData['end-date-month']?.trim()) {
			errors['end-date-month'] = 'Month is required.';
		}

		if (!formData['end-date-year']?.trim()) {
			errors['end-date-year'] = 'Year is required.';
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

	if (!formData['completion-date-month']?.trim()) {
		errors['completion-date-month'] = 'Month is required.';
	}

	if (!formData['completion-date-year']?.trim()) {
		errors['completion-date-year'] = 'Year is required.';
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

// Validate the input data of tel type
export function validateTel(phoneNumber) {
	const re = /^\+?[0-9]{7,15}$/;

	if (!re.test(String(phoneNumber))) {
		return 'Invalid phone number format.';
	}

	return null;
}
