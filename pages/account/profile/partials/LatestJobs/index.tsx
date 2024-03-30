import Header from './partials/Header';
import JobsListing from './partials/JobsListing';

type Props = {};

const LatestJobs = (props: Props) => {
	return (
		<div className="section-box">
			<div className="container">
				<div className="panel-white">
					<Header />
					<JobsListing />
				</div>
			</div>
		</div>
	);
};

export default LatestJobs;
