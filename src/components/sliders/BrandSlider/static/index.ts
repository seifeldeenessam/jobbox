import { Autoplay } from 'swiper/modules';
import type { SwiperProps } from 'swiper/react';

export const swiperProps: SwiperProps = {
	modules: [Autoplay],
	slidesPerView: 10,
	spaceBetween: 0,
	loop: true,
	autoplay: { delay: 2500, disableOnInteraction: false },
	breakpoints: {
		320: { slidesPerView: 2, spaceBetween: 30 },
		575: { slidesPerView: 2, spaceBetween: 30 },
		767: { slidesPerView: 3, spaceBetween: 30 },
		991: { slidesPerView: 3, spaceBetween: 30 },
		1199: { slidesPerView: 3, spaceBetween: 30 },
		1350: { slidesPerView: 10, spaceBetween: 30 }
	}
};

export const brands = ['microsoft', 'sony', 'acer', 'nokia', 'asus', 'casio', 'dell', 'panasonic', 'vaio', 'sony', 'microsoft', 'sony', 'acer', 'nokia'];
