type Field = {
	id: number;
	name: string;
	industrie?: Field;
	field_image?: null;
	slug: string;
	date: Date;
	date_update: Date;
	job_count: number;
	industrie_image?: null;
};

type Position = {
	id: number;
	position_type: string;
};

type Recruiter = {
	id: number;
	company_account: number;
	name: string;
	company_logo: string;
	country: string;
	industry: Field;
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

type WorkMode = {
	id: number;
	work_mode_type: string;
};

export type Job = {
	id: number;
	recruiter: Recruiter;
	industry: Field;
	field: Field;
	position: Position;
	work_mode: WorkMode;
	name: string;
	location: string;
	job_level: string;
	experience: string;
	job_type: string;
	deadline: Date;
	salary: string;
	Job_description: string;
	Job_requirements: string;
	job_image: string;
	open_for_applications: boolean;
	closing_date: Date;
	slug: string;
	date: Date;
	date_update: Date;
};
