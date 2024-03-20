/* eslint-disable @next/next/no-img-element */
import AnnouncementSection from './partials/AnnouncementSection';
import CallToActionSection from './partials/CallToActionSection';
import CategoriesSection from './partials/CategoriesSection';
import HeroSection from './partials/HeroSection';
import JobByLocationSection from './partials/JobsByLocationSection';
import JobsOfTheDaySection from './partials/JobsOfTheDaySection';
import NewAndBlogSection from './partials/NewsAndBlogSection';
import NewsletterSection from './partials/NewsLetterSection';
import StatsSection from './partials/StatsSection';
import TopRecruitersSection from './partials/TopRecruitersSection';

export default function Home() {
	return (
		<>
			<div className="bg-homepage1" />
			<HeroSection />
			<CategoriesSection />
			<AnnouncementSection />
			<JobsOfTheDaySection />
			<CallToActionSection />
			<StatsSection />
			<TopRecruitersSection />
			<JobByLocationSection />
			<NewAndBlogSection />
			<NewsletterSection />
		</>
	);
}
