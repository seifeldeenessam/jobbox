export type Session = {
	refresh: string;
	access: string;
	user: SessionUser;
};

export type SessionUser = {
	id: number;
	first_name: string;
	last_name: string;
	username: string;
	email: string;
	role: string;
	avatar: null | string;
	is_active: boolean;
};
