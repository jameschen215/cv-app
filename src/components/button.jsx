export default function Button({
	classNames,
	type = 'button',
	label,
	onClick,
	children,
}) {
	return (
		<button
			className={classNames}
			type={type}
			aria-label={label}
			onClick={onClick}>
			{children}
		</button>
	);
}
