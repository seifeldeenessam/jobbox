import Header from './partials/Header';
import RecruitersListing from './partials/RecruitersListing';

type Props = {};

const TopRecruiters = (props: Props) => {
	return (
		<div className="section-box">
			<div className="container">
				<div className="panel-white">
					<Header />
					<RecruitersListing />
				</div>
			</div>
		</div>
	);
};

export default TopRecruiters;
