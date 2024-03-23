export type LoginPayload = {
	username: string;
	password: string;
};

export type LoginResponse = {
	message: string;
	refresh: string;
	access: string;
};

export type LoginFrom = {
	username: string;
	password: string;
};
