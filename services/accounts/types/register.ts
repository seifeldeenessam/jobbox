export type RegisterPayload = {
	username: string;
	email?: string;
	password: string;
};

export type RegisterResponse = {
	message: string;
	refresh: string;
	access: string;
};

export type RegisterFrom = {
	username: string;
	email?: string;
	password: string;
};
