import IndustrySelector from './partials/IndustrySelector';
import LocationSelector from './partials/LocationSelector';
import PopularSearches from './partials/PopularSearches';

type Props = {};

const HeroSection = (props: Props) => {
	return (
		<section className="section-box">
			<div className="banner-hero hero-1">
				<div className="banner-inner">
					<div className="row">
						<div className="col-xl-8 col-lg-12">
							<div className="block-banner">
								<h1 className="heading-banner wow animate__animated animate__fadeInUp">
									The <span className="color-brand-2">Easiest Way</span>
									<br className="d-none d-lg-block" />
									to Get Your New Job
								</h1>
								<div className="banner-description mt-20 wow animate__animated animate__fadeInUp" data-wow-delay=".1s">
									Each month, more than 3 million job seekers turn to <br className="d-none d-lg-block" />
									website in their search for work, making over 140,000 <br className="d-none d-lg-block" />
									applications every single day
								</div>
								<div className="form-find mt-40 wow animate__animated animate__fadeIn" data-wow-delay=".2s">
									<form>
										<IndustrySelector />
										<hr />
										<LocationSelector />
										<hr />
										<input className="form-input keyword-input mr-10" type="text" placeholder="Your keyword..." />
										<button className="btn btn-default font-sm search-button">Search</button>
									</form>
								</div>
								<PopularSearches />
							</div>
						</div>
						<div className="col-xl-4 col-lg-12 d-none d-xl-block col-md-6">
							<div className="banner-imgs">
								<div className="block-1 shape-1">
									<img className="img-responsive" alt="jobBox" src="/assets/imgs/page/homepage1/banner1.png" />
								</div>
								<div className="block-2 shape-2">
									<img className="img-responsive" alt="jobBox" src="/assets/imgs/page/homepage1/banner2.png" />
								</div>
								<div className="block-3 shape-3">
									<img className="img-responsive" alt="jobBox" src="/assets/imgs/page/homepage1/icon-top-banner.png" />
								</div>
								<div className="block-4 shape-3">
									<img className="img-responsive" alt="jobBox" src="/assets/imgs/page/homepage1/icon-bottom-banner.png" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
