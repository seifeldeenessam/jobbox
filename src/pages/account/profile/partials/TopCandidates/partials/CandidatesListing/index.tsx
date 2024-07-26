import { useCandidatesListing } from '@/services/candidates/queries';
import { Candidate } from '@/services/candidates/types';
import Error from './Error';
import Loading from './Loading';

type CandidateCardProps = {
	candidate: Candidate;
};

type CandidatesListingProps = {};

const CandidateCard = ({ candidate }: CandidateCardProps) => {
	return (
		<div className="card-style-3 hover-up">
			<div className="card-image online">
				<img src="/dashboard-assets/imgs/page/dashboard/avata1.png" alt="jobBox" />
			</div>
			<div className="card-title">
				<h6>Robert Fox</h6>
				<span className="job-position">UI/UX Designer</span>
			</div>
			<div className="card-location">
				<span className="location">Chicago, US</span>
			</div>
			<div className="card-rating">
				<img src="/dashboard-assets/imgs/page/dashboard/star.svg" alt="jobBox" /> <img src="/dashboard-assets/imgs/page/dashboard/star.svg" alt="jobBox" />
				<img src="/dashboard-assets/imgs/page/dashboard/star.svg" alt="jobBox" /> <img src="/dashboard-assets/imgs/page/dashboard/star.svg" alt="jobBox" />
				<img src="/dashboard-assets/imgs/page/dashboard/star.svg" alt="jobBox" /> <span className="font-xs color-text-mutted">(65)</span>
			</div>
		</div>
	);
};

const CandidatesListing = (props: CandidatesListingProps) => {
	const { isLoading, isError, data } = useCandidatesListing({ limit: 5 });

	if (isLoading) return <Loading />;
	if (isError || !data || !data.results.length) return <Error />;

	const candidates = data.results;

	return (
		<div className="panel-body">
			{candidates.map((candidate) => (
				<CandidateCard candidate={candidate} key={candidate.id} />
			))}
		</div>
	);
};

export default CandidatesListing;
