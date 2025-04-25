import { capitalFirstLetter } from './utils';

const textRegex = /^[A-Za-z]+$/;
const telRegex = /^\+?[0-9]{7,15}$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export function validateText(name, value) {
	let capitalizedName = '';
	if (name.includes('-')) {
		capitalizedName = capitalFirstLetter(name.split('-').join(' '));
	} else {
		capitalizedName = capitalFirstLetter(name);
	}

	if (!value) return `${capitalizedName} is required.`;
	if (!textRegex.test(value)) return 'Letters only, please.';
	if (value.length < 2) return `${capitalizedName} must be at least 2 letters.`;
	if (value.length > 20)
		return `${capitalizedName} must be 20 letters or fewer.`;

	return '';
}

export function validateEmail(name, value) {
	let capitalizedName = capitalFirstLetter(name);

	if (!value) return `${capitalizedName} is required.`;
	if (!emailRegex.test(value)) return 'Please enter a valid email address.';

	return '';
}

export function validateTel(name, value) {
	let capitalizedName = capitalFirstLetter(name);

	if (!value) return `${capitalizedName} is required.`;
	if (!telRegex.test(value))
		return 'Please enter a valid phone number with 7 to 15 digits.';

	return '';
}
