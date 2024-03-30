import { useRecruitersListing } from '../../../../../../services/recruiters/queries';
import Error from './Error';
import Loading from './Loading';
import RecruiterCard from './partials/RecruiterCard';

type Props = {};

const Listing = (props: Props) => {
	const { isLoading, isError, data } = useRecruitersListing({ limit: 5 });

	if (isLoading) return <Loading />;
	if (isError || !data || !data.results.length) return <Error />;

	const recruiters = data.results;

	return (
		<div className="row">
			{recruiters.map((recruiter) => (
				<div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12" key={recruiter.id}>
					<RecruiterCard recruiter={recruiter} key={recruiter.id} />
				</div>
			))}
		</div>
	);
};

export default Listing;
