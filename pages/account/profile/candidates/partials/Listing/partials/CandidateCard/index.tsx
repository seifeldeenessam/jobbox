import Link from 'next/link';

type Props = {
	candidate: any;
};

const CandidateCard = ({ candidate }: Props) => {
	return (
		<div className="card-grid-2 hover-up">
			<div className="card-grid-2-image-left">
				<div className="card-grid-2-image-rd online">
					<figure>
						<Link href="/">
							<img src={`/dashboard-assets/imgs/page/candidates/${candidate.img}`} alt="jobBox" />
						</Link>
					</figure>
				</div>
				<div className="card-profile pt-10">
					<a href="#">
						<h5>{candidate.title}</h5>
					</a>
					<span className="font-xs color-text-mutted">{candidate.job}</span>
					<div className="rate-reviews-small pt-5">
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
						<span className="ml-10 color-text-mutted font-xs">({candidate.rating})</span>
					</div>
				</div>
			</div>
			<div className="card-block-info">
				<p className="font-xs color-text-paragraph-2">{candidate.des}</p>
				<div className="card-2-bottom card-2-bottom-candidate mt-30">
					<div className="text-start">
						{candidate.skills.map((skill: any) => (
							<a className="btn btn-tags-sm mb-10 mr-5" key={skill} href="#">
								{skill}
							</a>
						))}
					</div>
				</div>
				<div className="employers-info align-items-center justify-content-center mt-15">
					<div className="row">
						<div className="col-6">
							<span className="d-flex align-items-center">
								<i className="fi-rr-marker mr-5 ml-0" />
								<span className="font-sm color-text-mutted">{candidate.location}</span>
							</span>
						</div>
						<div className="col-6">
							<span className="d-flex justify-content-end align-items-center">
								<i className="fi-rr-clock mr-5" />
								<span className="font-sm color-brand-1">${candidate.salary} / hour</span>
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CandidateCard;
