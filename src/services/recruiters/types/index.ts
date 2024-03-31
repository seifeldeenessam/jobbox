export type Recruiter = {
	id: number;
	company_account: number;
	name: string;
	company_logo: string;
	country: string;
	industry: RecruiterIndustry;
	company_size: string;
	address: string;
	phone: string;
	company_email: string;
	salary: string;
	Company_bio: string;
	slug: string;
	date: string;
	date_update: string;
	open_jobs_count: number;
};

export type RecruiterIndustry = {
	id: number;
	name: string;
	industrie_image: string;
	slug: string;
	date: string;
	date_update: string;
	job_count: number;
};
