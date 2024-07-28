import { useRecruitersListing } from '@/services/recruiters/queries';
import { Recruiter } from '@/services/recruiters/types';
import { clipText } from '@/utilities/text';
import Error from './Error';
import Loading from './Loading';

type RecruiterCardProps = {
	recruiter: Recruiter;
};

type RecruitersListingProps = {};

const RecruiterCard = ({ recruiter }: RecruiterCardProps) => {
	return (
		<div className="col-lg-6 col-md-6 pr-5 pl-5">
			<div className="card-style-4 hover-up">
				<div className="d-flex">
					<div className="card-image">
						<img src={recruiter.company_logo} alt="jobBox" />
					</div>
					<div className="card-title">
						<h6>{clipText(recruiter.name, 6)}</h6>
						<img src="/dashboard-assets/imgs/page/dashboard/star.svg" alt="jobBox" />
						<img src="/dashboard-assets/imgs/page/dashboard/star.svg" alt="jobBox" />
						<img src="/dashboard-assets/imgs/page/dashboard/star.svg" alt="jobBox" />
						<img src="/dashboard-assets/imgs/page/dashboard/star-none.svg" alt="jobBox" />
						<img src="/dashboard-assets/imgs/page/dashboard/star-none.svg" alt="jobBox" /> <span className="font-xs color-text-mutted">(65)</span>
					</div>
				</div>
				<div className="card-location d-flex">
					<span className="location">{recruiter.address}</span>
					<span className="jobs-number">{recruiter.open_jobs_count} Open Jobs</span>
				</div>
			</div>
		</div>
	);
};

const RecruitersListing = (props: RecruitersListingProps) => {
	const { isLoading, isError, data } = useRecruitersListing({ limit: 6 });

	if (isLoading) return <Loading />;
	if (isError || !data || !data.results.length) return <Error />;

	const recruiters = data.results;

	return (
		<div className="panel-body">
			{recruiters.map((recruiter) => (
				<RecruiterCard recruiter={recruiter} key={recruiter.id} />
			))}
		</div>
	);
};

export default RecruitersListing;
