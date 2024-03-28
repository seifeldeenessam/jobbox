type Props = {
	handleToggle: () => void;
	isToggled: boolean;
};

const BurgerIcon = ({ handleToggle, isToggled }: Props) => {
	return (
		<div
			className={`burger-icon burger-icon-white ${isToggled ? 'burger-close' : ''}`}
			onClick={() => {
				handleToggle();
			}}>
			<span className="burger-icon-top" />
			<span className="burger-icon-mid" />
			<span className="burger-icon-bottom" />
		</div>
	);
};

export default BurgerIcon;
