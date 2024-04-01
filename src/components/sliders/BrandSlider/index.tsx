import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { brands, swiperProps } from './static';

type Props = {};

const BrandSlider = (props: Props) => {
	return (
		<>
			<Swiper {...swiperProps} className="swiper-wrapper">
				{brands.map((brand, index) => (
					<SwiperSlide key={index}>
						<img src={`/dashboard-assets/imgs/page/dashboard/${brand}.svg`} alt={brand} />
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
};

export default BrandSlider;
