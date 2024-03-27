import Link from 'next/link';
import { Industry } from '../../../../../../../../services/industries/types';

type Props = {
	data: Industry;
};

const IndustryCard = ({ data }: Props) => {
	return (
		<div className="swiper-slide hover-up">
			<Link legacyBehavior href="/jobs-list">
				<a>
					<div className="item-logo">
						<div className="image-left">
							<img src={data.category_image} alt={data.slug} width={48} height={48} />
						</div>
						<div className="text-info-right">
							<h4>{data.name}</h4>
							<p className="font-xs">{data.job_count} Jobs Available</p>
						</div>
					</div>
				</a>
			</Link>
		</div>
	);
};

export default IndustryCard;
