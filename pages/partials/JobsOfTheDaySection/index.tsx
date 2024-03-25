import dynamic from 'next/dynamic';
import { useEffect, useMemo, useState } from 'react';
import { useJobsListing } from '../../../services/jobs/queries';
import Error from './Error';
import Loading from './Loading';
import JobsGrid from './partials/JobsGrid';

const IndustrySelector = dynamic(() => import('./partials/IndustrySelector'));

type Props = {};

const JobsOfTheDaySection = (props: Props) => {
	const [industry, setIndustry] = useState('');
	const { isLoading, isError, data } = useJobsListing({});

	useEffect(() => {
		if (!data || data.results.length === 0) return;

		setIndustry(data.results[0].industry.slug);
	}, [data?.results]);

	const industries = useMemo(() => {
		if (!data || data.results.length === 0) return;

		const jobs = data.results;
		return jobs.map((job) => job.industry).filter((value, index, self) => self.indexOf(value) === index);
	}, [data?.results]);

	if (isLoading) return <Loading />;
	if (isError || !data || data.results.length === 0) return <Error />;

	const jobs = data.results;

	const handleIndustry = (slug: string) => {
		setIndustry(slug);
	};

	return (
		<section className="section-box mt-50">
			<div className="container">
				<div className="text-center">
					<h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">Jobs of the day</h2>
					<p className="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp">Search and connect with the right candidates faster. </p>
				</div>
				<div className="mt-70">
					{industries && <IndustrySelector data={industries} active={industry} handleActive={handleIndustry} />}
					<JobsGrid data={jobs} active={industry} />
				</div>
			</div>
		</section>
	);
};

export default JobsOfTheDaySection;
