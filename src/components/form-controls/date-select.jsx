import '../../styles/date-select.css';
import { MONTHS } from '../../helper/constants';

export default function DateSelect({
	field: { name, label },
	value,
	errors,
	disableEndDate,
	handleChange,
}) {
	const monthName = name + 'Month';
	const yearName = name + 'Year';

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
	const years = Array.from({ length: 50 }, (_, i) => currentYear - i);

	return (
		<div className="select-wrapper">
			<select
				name={name}
				id={name}
				value={value}
				onChange={onChange}
				aria-label="Select year"
				aria-required="true"
				aria-invalid={!!errors[name]}
				aria-describedby={`${name}-error-message`}
				disabled={name.startsWith('endDate') && disableEndDate}>
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
					aria-live="assertive">
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
				disabled={name.startsWith('endDate') && disableEndDate}>
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
					aria-live="assertive">
					{errors[name]}
				</div>
			)}
		</div>
	);
}
