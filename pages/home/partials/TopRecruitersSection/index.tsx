import TopRecruitersSlider from '../../../../components/sliders/TopRecruitersSlider';

type Props = {};

const TopRecruitersSection = (props: Props) => {
	return (
		<section className="section-box mt-50">
			<div className="container">
				<div className="text-center">
					<h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">Top Recruiters</h2>
					<p className="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp">Discover your next career move, freelance gig, or internship</p>
				</div>
			</div>
			<div className="container">
				<div className="box-swiper mt-50">
					<TopRecruitersSlider />
				</div>
			</div>
		</section>
	);
};

export default TopRecruitersSection;
