import { NextPage } from 'next';
import { useState } from 'react';
import ProfileLayout from '../../../../components/common/ProfileLayout';
import BrandSlider from '../../../../components/sliders/BrandSlider';
import { QueryOptions } from '../../../../types/queryOptions';
import Filters from './partials/Filters';
import Listing from './partials/Listing';
import Pagination from './partials/Pagination';

type Props = {};

const CandidatesPage: NextPage<Props> = () => {
	const [filters, setFilters] = useState<QueryOptions>({ limit: 8 });

	const handleFilters = (filter: string, value: string | number) => {
		setFilters((prev) => ({ ...prev, [filter]: value }));
	};

	const handleReset = () => {
		setFilters({});
	};

	return (
		<>
			<ProfileLayout breadcrumbTitle="Candidates" breadcrumbActive="Candidates">
				<div className="col-lg-12">
					<div className="section-box">
						<div className="container">
							<div className="panel-white mb-30">
								<div className="box-padding">
									<Filters filters={filters} handleFilters={handleFilters} handleReset={handleReset} />
									<Listing filters={filters} />
									<Pagination />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="mt-10">
					<div className="section-box">
						<div className="container">
							<div className="panel-white pt-30 pb-30 pl-15 pr-15">
								<div className="box-swiper">
									<div className="swiper-container swiper-group-10">
										<BrandSlider />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</ProfileLayout>
		</>
	);
};

export default CandidatesPage;
