import { Recruiter } from '@/services/recruiters/types';
import Link from 'next/link';

type Props = {
	recruiter: Recruiter;
};

const RecruiterCard = ({ recruiter }: Props) => {
	return (
		<div className="card-grid-1 hover-up wow animate__animated animate__fadeIn">
			<div className="image-box">
				<Link href="/company-details">
					<img src={recruiter.company_logo} alt="jobBox" />
				</Link>
			</div>
			<div className="info-text mt-10">
				<h5 className="font-bold">
					<Link href="#">{recruiter.name}</Link>
				</h5>
				<div className="mt-5">
					<img alt="jobBox" src="/dashboard-assets/imgs/template/icons/star.svg" />
					<img alt="jobBox" src="/dashboard-assets/imgs/template/icons/star.svg" />
					<img alt="jobBox" src="/dashboard-assets/imgs/template/icons/star.svg" />
					<img alt="jobBox" src="/dashboard-assets/imgs/template/icons/star.svg" />
					<img alt="jobBox" src="/dashboard-assets/imgs/template/icons/star.svg" />
					<span className="font-xs color-text-mutted ml-10">
						<span>(5)</span>
					</span>
				</div>
				<span className="card-location">{recruiter.address}</span>
				<div className="mt-30">
					<Link className="btn btn-grey-big" href="/jobs-grid">
						<span>{recruiter.open_jobs_count} Jobs Open</span>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default RecruiterCard;
