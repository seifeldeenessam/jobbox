export type Job = {
	id: number;
	recruiter: JobRecruiter;
	industry: JobIndustry;
	field: JobField | null;
	position: JobPosition | null;
	work_mode: JobWorkMode | null;
	name: string;
	location: string;
	job_level: string | null;
	experience: string | null;
	job_type: string | null;
	deadline: string;
	salary: string | null;
	Job_description: string;
	Job_requirements: string;
	job_image: string | null;
	open_for_applications: boolean;
	closing_date: Date | null;
	slug: string;
	date: Date;
	date_update: Date;
};

export type JobIndustry = {
	id: number;
	name: string;
	industrie_image: string;
	slug: string;
	date: string;
	date_update: string;
	job_count: number;
};

export type JobRecruiter = {
	id: number;
	company_account: number;
	name: string;
	company_logo: null;
	country: null;
	industry: null;
	company_size: null;
	address: null;
	phone: null;
	company_email: null;
	salary: null;
	Company_bio: string;
	slug: string;
	date: string;
	date_update: string;
	open_jobs_count: number;
};

export type JobField = {
	id: number;
	name: string;
	industrie?: JobField;
	field_image?: null;
	slug: string;
	date: string;
	date_update: string;
	job_count: number;
	industrie_image?: string;
};

export type JobPosition = {
	id: number;
	position_type: string; // Should be enum
};

export type JobWorkMode = {
	id: number;
	work_mode_type: 'On-site' | 'Remote' | 'Remote';
};
