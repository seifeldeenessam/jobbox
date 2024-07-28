import { useCandidatesListing } from '@/services/candidates/queries';
import { Candidate } from '@/services/candidates/types';
import { clipText } from '@/utilities/text';
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
				<img src={candidate.profile_picture} alt="jobBox" />
			</div>
			<div className="card-title">
				<h6>{clipText(candidate.full_name, 6)}</h6>
				<span className="job-position">{candidate.industry.name}</span>
			</div>
			<div className="card-location">
				<span className="location">{candidate.contact_information.complete_address}</span>
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
