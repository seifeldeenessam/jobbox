import { useJobsListing } from '../../../../../../../services/jobs/queries';
import { Job } from '../../../../../../../services/jobs/types';
import Error from './Error';
import Loading from './Loading';

type JobCardProps = {
	job: Job;
};

type JobsListingProps = {};

const JobCard = ({ job }: JobCardProps) => {
	return (
		<div className="card-style-2 hover-up">
			<div className="card-head">
				<div className="card-image">
					<img src="/dashboard-assets/imgs/page/dashboard/img1.png" alt="jobBox" />
				</div>
				<div className="card-title">
					<h6>Senior Full Stack Engineer, Creator Success</h6>
					<span className="job-type">Full time</span>
					<span className="time-post">3mins ago</span>
					<span className="location">New York, US</span>
				</div>
			</div>
			<div className="card-tags">
				<a className="btn btn-tag">Figma</a>
				<a className="btn btn-tag">Adobe XD</a>
			</div>
			<div className="card-price">
				<strong>$300</strong>
				<span className="hour">/Hour</span>
			</div>
		</div>
	);
};

const JobsListing = (props: JobsListingProps) => {
	const { isLoading, isError, data } = useJobsListing({});

	if (isLoading) return <Loading />;
	if (isError || !data || !data.results.length) return <Error />;

	const jobs = data.results;

	return (
		<div className="panel-body">
			{jobs.map((job) => (
				<JobCard job={job} key={job.id} />
			))}
		</div>
	);
};

export default JobsListing;
