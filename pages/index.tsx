import Layout from '@/components/common/Layout';
import { Cookies } from '@/enums/cookies';
import { useAuthStore } from '@/services/accounts/stores';
import { PublicPageProps } from '@/types/app';
import { Session } from '@/types/session';
import { CookieValueTypes } from 'cookies-next';
import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';
import AnnouncementSection from './_partials/AnnouncementSection';
import CallToActionSection from './_partials/CallToActionSection';
import HeroSection from './_partials/HeroSection';
import IndustriesSection from './_partials/IndustriesSection';
import JobByLocationSection from './_partials/JobsByLocationSection';
import JobsOfTheDaySection from './_partials/JobsOfTheDaySection';
import NewAndBlogSection from './_partials/NewsAndBlogSection';
import NewsletterSection from './_partials/NewsLetterSection';
import StatsSection from './_partials/StatsSection';
import TopRecruitersSection from './_partials/TopRecruitersSection';

export const getServerSideProps: GetServerSideProps = async ({ req, res, locale }) => {
	const { getCookie } = await import('cookies-next');

	const sessionCookie: CookieValueTypes = getCookie(Cookies.SESSION, { req, res });
	const session: Session | null = sessionCookie ? JSON.parse(sessionCookie as string) : null;

	// TODO: Handle data prefetching

	return {
		props: { session }
	};
};

const HomePage: NextPage<PublicPageProps> = ({ session }) => {
	const { setSession } = useAuthStore.getState();

	useEffect(() => {
		setSession(session);
	}, [session]); // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<>
			<Head>
				<title>JobBox | Home</title>
			</Head>
			<Layout>
				<div className="bg-homepage1" />
				<HeroSection />
				<IndustriesSection />
				<AnnouncementSection />
				<JobsOfTheDaySection />
				<CallToActionSection />
				<StatsSection />
				<TopRecruitersSection />
				<JobByLocationSection />
				<NewAndBlogSection />
				<NewsletterSection />
			</Layout>
		</>
	);
};

export default HomePage;
