import type { SwiperOptions } from 'swiper/types';

export const breakpoints: SwiperOptions['breakpoints'] = {
	320: {
		slidesPerView: 1,
		spaceBetween: 30
	},
	575: {
		slidesPerView: 2,
		spaceBetween: 30
	},
	767: {
		slidesPerView: 2,
		spaceBetween: 30
	},
	991: {
		slidesPerView: 3,
		spaceBetween: 30
	},
	1199: {
		slidesPerView: 5,
		spaceBetween: 30
	}
};
