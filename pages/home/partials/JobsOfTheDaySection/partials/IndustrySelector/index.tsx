import { Job } from '@/services/jobs/types';

type Props = {
	data: Job['industry'][];
	active: string;
	handleActive: (slug: string) => void;
};

const IndustrySelector = ({ data, active, handleActive }: Props) => {
	return (
		<div className="list-tabs mt-40  text-center">
			<ul className="nav nav-tabs" role="tablist">
				{data.map((industry) => (
					<li onClick={() => handleActive(industry.slug)} key={industry.id}>
						<a className={active === industry.slug ? 'active' : ''}>
							<img src={industry.industrie_image} alt={industry.slug} width={24} height={24} /> {industry.name}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
};

export default IndustrySelector;
