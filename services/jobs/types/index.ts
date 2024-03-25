export type Job = {
	id: number;
	recruiter: JobRecruiter;
	industry: JobIndustry;
	position: JobPosition;
	work_mode: JobWorkMode;
	name: string;
	location: string;
	job_level: string;
	experience: string;
	job_type: string;
	deadline: string;
	salary: string;
	Job_description: string;
	Job_requirements: string;
	job_image: string;
	open_for_applications: boolean;
	closing_date: string;
	slug: string;
	date: string;
	date_update: string;
};

type JobRecruiter = {
	id: number;
	company_account: number;
	name: string;
	company_logo: string;
	country: string;
	industry: JobIndustry;
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

type JobIndustry = {
	id: number;
	name: string;
	category_image: string;
	slug: string;
	date: string;
	date_update: string;
	job_count: number;
};

type JobPosition = {
	id: number;
	position_type: string;
};

type JobWorkMode = {
	id: number;
	work_mode_type: string;
};
