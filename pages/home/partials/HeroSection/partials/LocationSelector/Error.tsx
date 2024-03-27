type Props = {};

const Error = (props: Props) => {
	return (
		<div className="box-location">
			<select className="form-input mr-10 select-active input-location select">
				<option value={''}>Location</option>
			</select>
		</div>
	);
};

export default Error;
