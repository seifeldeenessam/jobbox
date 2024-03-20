import IndustriesJSON from '@assets/static/industries.json';

type Props = {};

const options: Record<string, number>[] = JSON.parse(JSON.stringify(IndustriesJSON));

const IndustrySelector = (props: Props) => {
	return (
		<div className="box-industry">
			<select className="form-input mr-10 select-active input-industry select2">
				<option value={0}>Industry</option>
				{options.map((option) => (
					<option value={option.value} key={option.value}>
						{option.label}
					</option>
				))}
			</select>
		</div>
	);
};

export default IndustrySelector;
