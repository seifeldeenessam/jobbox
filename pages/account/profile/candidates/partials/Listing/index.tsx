import { useCandidatesListing } from '../../../../../../services/candidates/queries';
import Error from './Error';
import Loading from './Loading';
import CandidateCard from './partials/CandidateCard';

type Props = {};

const Listing = (props: Props) => {
	const { isLoading, isError, data } = useCandidatesListing({ limit: 5 });

	if (isLoading) return <Loading />;
	if (isError || !data || !data.results.length) return <Error />;

	const candidates = data.results;

	return (
		<div className="row">
			{candidates.map((candidate) => (
				<div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12" key={candidate.id}>
					<CandidateCard candidate={candidate} key={candidate.id} />
				</div>
			))}
		</div>
	);
};

export default Listing;
