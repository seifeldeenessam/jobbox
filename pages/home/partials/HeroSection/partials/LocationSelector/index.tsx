import { useLocationsListing } from '@/services/locations/queries';
import Error from './Error';
import Loading from './Loading';

type Props = {};

const LocationSelector = (props: Props) => {
	const { isLoading, isError, data } = useLocationsListing({});

	if (isLoading) return <Loading />;
	if (isError || !data || data.results.length === 0) return <Error />;

	const locations = data.results;

	return (
		<div className="box-location">
			<select className="form-input mr-10 select-active input-location select">
				<option value={''}>Location</option>
				{locations.map((location) => (
					<option value={location.slug} key={location.id}>
						{location.name}
					</option>
				))}
			</select>
		</div>
	);
};

export default LocationSelector;
