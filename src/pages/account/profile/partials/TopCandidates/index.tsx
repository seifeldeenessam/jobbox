import CandidatesListing from './partials/CandidatesListing';
import Header from './partials/Header';

type Props = {};

const TopCandidates = (props: Props) => {
	return (
		<div className="section-box">
			<div className="container">
				<div className="panel-white">
					<Header />
					<CandidatesListing />
				</div>
			</div>
		</div>
	);
};

export default TopCandidates;
