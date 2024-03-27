import SwiperCore, { Navigation } from 'swiper';
import 'swiper/css/grid';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useIndustriesListing } from '../../../../../../services/industries/queries';
import Error from './Error';
import Loading from './Loading';
import IndustryCard from './partials/IndustryCard';
import { breakpoints } from './static';
import styles from './styles.module.css';

SwiperCore.use([Navigation]);

const IndustriesSlider = () => {
	const { isLoading, isError, data } = useIndustriesListing({});

	if (isLoading) return <Loading />;
	if (isError || !data || data.results.length === 0) return <Error />;

	const industries = data.results;

	return (
		<>
			<div className="swiper-container swiper-group-5">
				<Swiper
					slidesPerView={5}
					spaceBetween={30}
					navigation={{ prevEl: '.swiper-button-prev', nextEl: '.swiper-button-next' }}
					breakpoints={breakpoints}
					className={`swiper-wrapper pb-70 pt-5 ${styles['swiper-grid-jobbox']}`}>
					{industries.map((industry) => (
						<SwiperSlide key={industry.id}>
							<IndustryCard data={industry} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>

			<div className="swiper-button-next" />
			<div className="swiper-button-prev" />
		</>
	);
};

export default IndustriesSlider;
