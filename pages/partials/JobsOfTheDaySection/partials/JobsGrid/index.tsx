import { useMemo } from 'react';
import { Job } from '../../../../../services/jobs/types';
import JobCard from './partials/JobCard';

type Props = {
	data: Job[];
	active: string;
};

const JobsGrid = ({ data, active }: Props) => {
	const jobs = useMemo(() => {
		return data.filter((job) => job.industry.slug === active);
	}, [data, active]);

	return (
		<div className="tab-content mt-70" id="myTabContent-1">
			<div className={'tab-pane fade show active'}>
				{jobs.map((job) => (
					<JobCard job={job} key={job.id} />
				))}
			</div>
		</div>
	);
};

export default JobsGrid;
