export type Candidate = {
	id: number;
	industry: {
		id: number;
		name: string;
		industrie_image: null;
		slug: string;
		date: Date;
		date_update: Date;
		job_count: number;
	};
	field: null;
	languages: {
		id: number;
		lang_name: string;
		lang_code: string;
		created_at: Date;
		updated_at: Date;
	}[];
	social_network: null;
	contact_information: {
		id: number;
		country: string;
		city: string;
		complete_address: string;
		find_on_map: string;
		latitude: number;
		longitude: number;
		created_at: Date;
		updated_at: Date;
		profile: number;
	};
	cv: null;
	educations: {
		id: number;
	}[];
	work_experiences: any[];
	user: {
		id: number;
		username: string;
		email: string;
	};
	tags: {
		id: number;
		name: string;
		slug: string;
	}[];
	profile_picture: string;
	full_name: string;
	contact_email: string;
	contact_number: string;
	personal_website: string;
	bio: string;
	experience: string;
	education_level: string;
	current_salary: string;
	expected_salary: string;
	created_at: Date;
	updated_at: Date;
};
