import CountriesJSON from '@assets/static/countries.json';

type Props = {};

const options: Record<string, string>[] = JSON.parse(JSON.stringify(CountriesJSON));

const LocationSelector = (props: Props) => {
	return (
		<div className="box-location">
			<select className="form-input mr-10 select-active input-location select2">
				<option value={''}>Location</option>
				{options.map((option) => (
					<option value={option.value} key={option.value}>
						{option.label}
					</option>
				))}
			</select>
		</div>
	);
};

export default LocationSelector;
