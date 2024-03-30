import { useJobsListing } from '../../../../../../services/jobs/queries';
import { QueryOptions } from '../../../../../../types/queryOptions';
import Error from './Error';
import Loading from './Loading';
import JobCard from './partials/JobCard';

type Props = {
	filters: QueryOptions;
};

const Listing = ({ filters }: Props) => {
	const { isLoading, isError, data } = useJobsListing(filters);

	if (isLoading) return <Loading />;
	if (isError || !data || !data.results.length) return <Error />;

	const jobs = data.results;

	return (
		<div className="row">
			{jobs.map((job) => (
				<div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12" key={job.id}>
					<JobCard job={job} key={job.id} />
				</div>
			))}
		</div>
	);
};

export default Listing;
