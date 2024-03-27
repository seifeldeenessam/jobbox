import { useIndustriesListing } from '../../../../../../services/industries/queries';
import Error from './Error';
import Loading from './Loading';

type Props = {};

const IndustrySelector = (props: Props) => {
	const { isLoading, isError, data } = useIndustriesListing({});

	if (isLoading) return <Loading />;
	if (isError || !data || data.results.length === 0) return <Error />;

	const industries = data.results;

	return (
		<div className="box-industry">
			<select className="form-input mr-10 select-active input-industry select">
				<option value={0}>Industry</option>
				{industries.map((industry) => (
					<option value={industry.slug} key={industry.id}>
						{industry.name}
					</option>
				))}
			</select>
		</div>
	);
};

export default IndustrySelector;
