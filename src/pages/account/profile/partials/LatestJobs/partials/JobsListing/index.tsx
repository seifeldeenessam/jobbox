import { useJobsListing } from '@/services/jobs/queries';
import { Job } from '@/services/jobs/types';
import { getTimePassed } from '@/utilities/dates';
import { clipText } from '@/utilities/text';
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
					<img src={job.job_image} alt="jobBox" />
				</div>
				<div className="card-title">
					<h6>{clipText(job.name, 20)}</h6>
					<span className="job-type">{job.job_type}</span>
					<span className="time-post">{getTimePassed(job.date)}</span>
					<span className="location">{job.location}</span>
				</div>
			</div>
			<div className="card-tags">
				<a className="btn btn-tag">Figma</a>
				<a className="btn btn-tag">Adobe XD</a>
			</div>
			<div className="card-price">
				<strong>${job.salary}</strong>
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
