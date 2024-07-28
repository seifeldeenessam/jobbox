import { Candidate } from '@/services/candidates/types';
import Link from 'next/link';

type Props = {
	candidate: Candidate;
};

const CandidateCard = ({ candidate }: Props) => {
	return (
		<div className="card-grid-2 hover-up h-100 d-flex flex-column justify-content-between">
			<div className="card-grid-2-image-left">
				<div className="card-grid-2-image-rd online">
					<figure>
						<Link href="/">
							<img src={candidate.profile_picture || 'https://placehold.co/96?text=Aatar'} alt="jobBox" />
						</Link>
					</figure>
				</div>
				<div className="card-profile pt-10">
					<a href="#">
						<h5>{candidate.full_name}</h5>
					</a>
					<span className="font-xs color-text-mutted">{candidate.industry.name}</span>
					<div className="rate-reviews-small">
						<span>
							<img src="/dashboard-assets/imgs/template/icons/star.svg" alt="jobBox" />
						</span>
						<span>
							<img src="/dashboard-assets/imgs/template/icons/star.svg" alt="jobBox" />
						</span>
						<span>
							<img src="/dashboard-assets/imgs/template/icons/star.svg" alt="jobBox" />
						</span>
						<span>
							<img src="/dashboard-assets/imgs/template/icons/star.svg" alt="jobBox" />
						</span>
						<span>
							<img src="/dashboard-assets/imgs/template/icons/star.svg" alt="jobBox" />
						</span>
						<span className="ml-10 color-text-mutted font-xs">({candidate.industry.job_count})</span>
					</div>
				</div>
			</div>

			<div className="card-block-info d-flex flex-column flex-grow-1">
				<p className="color-text-paragraph-2 font-xs flex-grow-1 text-justify">{candidate.bio}</p>
				<div className="card-2-bottom card-2-bottom-candidate mt-30">
					<div className="text-start">
						{candidate.educations.map((education) => (
							<a className="btn btn-tags-sm mb-10 mr-5" key={education.id} href="#">
								{education.id}
							</a>
						))}
					</div>
				</div>
				<div className="employers-info align-items-center justify-content-center">
					<div className="row">
						<div className="col-6">
							<span className="d-flex align-items-center">
								<i className="fi-rr-marker mr-5 ml-0" />
								<span className="font-sm color-text-mutted">{candidate.contact_information.complete_address}</span>
							</span>
						</div>
						<div className="col-6">
							<span className="d-flex justify-content-end align-items-center">
								<i className="fi-rr-clock mr-5" />
								<span className="font-sm color-brand-1">${candidate.current_salary} / hour</span>
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CandidateCard;
