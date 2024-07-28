export type Recruiter = {
	id: number;
	company_account: number;
	name: string;
	company_logo: string;
	country: string;
	industry: {
		id: number;
		name: string;
		industrie_image: null;
		slug: string;
		date: Date;
		date_update: Date;
		job_count: number;
	};
	company_size: string;
	address: string;
	phone: string;
	company_email: string;
	salary: string;
	Company_bio: string;
	slug: string;
	date: Date;
	date_update: Date;
	open_jobs_count: number;
};
