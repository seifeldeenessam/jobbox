import { Job } from '../../../../../../../services/jobs/types';

type Props = {
	job: Job;
};

const JobCard = ({ job }: Props) => {
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

export default JobCard;
