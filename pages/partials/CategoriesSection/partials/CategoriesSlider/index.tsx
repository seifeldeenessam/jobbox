import Link from 'next/link';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/css/grid';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useCategoriesListing } from '../../../../../services/categories/queries';
import Error from './Error';
import Loading from './Loading';
import { breakpoints } from './static';
import styles from './styles.module.css';

SwiperCore.use([Navigation]);

const CategoriesSlider = () => {
	const { isLoading, isError, data } = useCategoriesListing({});

	if (isLoading) return <Loading />;
	if (isError || !data || data.results.length === 0) return <Error />;

	const categories = data.results;

	return (
		<>
			<div className="swiper-container swiper-group-5">
				<Swiper
					slidesPerView={5}
					spaceBetween={30}
					navigation={{ prevEl: '.swiper-button-prev', nextEl: '.swiper-button-next' }}
					breakpoints={breakpoints}
					className={`swiper-wrapper pb-70 pt-5 ${styles['swiper-grid-jobobx']}`}>
					{categories.map((category) => (
						<SwiperSlide key={category.id}>
							<div className="swiper-slide hover-up">
								<Link legacyBehavior href="/jobs-list">
									<a>
										<div className="item-logo">
											<div className="image-left">
												<img src={category.category_image} alt={category.slug} width={48} height={48} />
											</div>
											<div className="text-info-right">
												<h4>{category.name}</h4>
												<p className="font-xs">{category.job_count} Jobs Available</p>
											</div>
										</div>
									</a>
								</Link>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>

			<div className="swiper-button-next" />
			<div className="swiper-button-prev" />
		</>
	);
};

export default CategoriesSlider;
