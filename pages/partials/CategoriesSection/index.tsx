import CategoriesSlider from './partials/CategoriesSlider';

type Props = {};

const CategoriesSection = (props: Props) => {
	return (
		<section className="section-box mt-180">
			<div className="section-box wow animate__animated animate__fadeIn">
				<div className="container">
					<div className="text-center">
						<h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">Browse by category</h2>
						<p className="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp">Find the job that’s perfect for you. about 800+ new jobs everyday</p>
					</div>
					<div className="box-swiper mt-50">
						<CategoriesSlider />
					</div>
				</div>
			</div>
		</section>
	);
};

export default CategoriesSection;
