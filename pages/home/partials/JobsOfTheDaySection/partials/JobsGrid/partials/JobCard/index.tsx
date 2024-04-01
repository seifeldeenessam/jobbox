import { Job } from '@/services/jobs/types';
import { getTimePassed } from '@/utilities/dates';
import Link from 'next/link';

type Props = {
	job: Job;
};

const JobCard = ({ job }: Props) => {
	return (
		<div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
			<div className="card-grid-2 hover-up">
				<div className="card-grid-2-image-left">
					<span className="flash" />
					<div className="image-box">
						<img src={job.recruiter.company_logo || ''} alt={job.recruiter.name} width={48} height={48} />
					</div>
					<div className="right-info">
						<Link legacyBehavior href="company-details">
							<a className="name-job">{job.recruiter.name}</a>
						</Link>
						<span className="location-small">{job.recruiter.address}</span>
					</div>
				</div>
				<div className="card-block-info">
					<h6>
						<Link legacyBehavior href="/job-details">
							<a>{job.name}</a>
						</Link>
					</h6>
					<div className="mt-5">
						{job.work_mode && <span className="card-briefcase">{job.work_mode.work_mode_type}</span>}
						<span className="card-time">{getTimePassed(job.date)}</span>
					</div>
					<p className="font-sm color-text-paragraph mt-15" dangerouslySetInnerHTML={{ __html: job.Job_description }} />
					<div className="mt-30">
						<Link legacyBehavior href="/jobs-grid">
							<a className="btn btn-grey-small mr-5">Adobe XD</a>
						</Link>

						<Link legacyBehavior href="/jobs-grid">
							<a className="btn btn-grey-small mr-5">Figma</a>
						</Link>

						<Link legacyBehavior href="/jobs-grid">
							<a className="btn btn-grey-small mr-5">Photoshop</a>
						</Link>
					</div>
					<div className="card-2-bottom mt-30">
						<div className="row">
							<div className="col-lg-7 col-7">
								<span className="card-text-price">{job.salary}</span>
								{/* <span className="text-muted">/Hour</span> */}
							</div>
							<div className="col-lg-5 col-5 text-end">
								<div className="btn btn-apply-now" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">
									Apply now
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default JobCard;
