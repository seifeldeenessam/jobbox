type Props = {};

const Error = (props: Props) => {
	return (
		<div className="box-industry">
			<select className="form-input mr-10 select-active input-industry select">
				<option value={0}>Industry</option>
			</select>
		</div>
	);
};

export default Error;
