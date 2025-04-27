import '../../styles/date-select.css';
import { MONTHS } from '../../helper/constants';

export default function DateSelect({
	field: { name, label },
	value,
	errors,
	disableEndDate,
	handleChange,
}) {
	const monthName = name + '-month';
	const yearName = name + '-year';

	return (
		<>
			<label htmlFor={name} className="field-label">
				{label}{' '}
				<span className="field-star" aria-hidden="true">
					*
				</span>
			</label>

			<div className="date-select-wrapper">
				<MonthSelect
					name={monthName}
					value={value[monthName] || ''}
					errors={errors}
					disableEndDate={disableEndDate}
					onChange={handleChange}
				/>
				<YearSelect
					name={yearName}
					value={value[yearName] || ''}
					errors={errors}
					disableEndDate={disableEndDate}
					onChange={handleChange}
				/>
			</div>
		</>
	);
}

function YearSelect({ name, value, errors, disableEndDate, onChange }) {
	const currentYear = new Date().getFullYear();
	// Last 100 years
	const years = Array.from({ length: 50 }, (_, i) => currentYear - i);

	function handleChange(ev) {
		// console.log(ev.target.name);
		// console.log(ev.target.value);
		onChange(ev);
	}
	return (
		<div className="select-wrapper">
			<select
				name={name}
				id={name}
				value={value}
				onChange={handleChange}
				aria-label="Select year"
				aria-required="true"
				aria-invalid={!!errors[name]}
				aria-describedby={`${name}-error-message`}
				disabled={name.startsWith('end-date') && disableEndDate}>
				<option value="" disabled>
					Year
				</option>

				{years.map((year) => (
					<option key={year} value={year}>
						{year}
					</option>
				))}
			</select>

			{errors[name] && (
				<div
					className="error-message"
					id={`${name}-error-message`}
					aria-live="polite">
					{errors[name]}
				</div>
			)}
		</div>
	);
}

function MonthSelect({ name, value, errors, disableEndDate, onChange }) {
	return (
		<div className="select-wrapper">
			<select
				name={name}
				id={name}
				value={value}
				onChange={onChange}
				aria-required="true"
				aria-invalid={!!errors[name]}
				aria-describedby={`${name}-error-message`}
				disabled={name.startsWith('end-date') && disableEndDate}>
				<option value="" disabled>
					Month
				</option>

				{MONTHS.map((month) => (
					<option key={month} value={month}>
						{month}
					</option>
				))}
			</select>

			{errors[name] && (
				<div
					className="error-message"
					id={`${name}-error-message`}
					aria-live="polite">
					{errors[name]}
				</div>
			)}
		</div>
	);
}
