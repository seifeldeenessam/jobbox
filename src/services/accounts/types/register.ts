import { UserStatus } from '../enums';

export type RegisterPayload = {
	status: UserStatus;
	username: string;
	email?: string;
	password: string;
};

export type RegisterResponse = {
	message: string;
	refresh: string;
	access: string;
	user: {
		username: string;
		status: UserStatus;
	};
};

export type RegisterFrom = {
	status: UserStatus;
	username: string;
	email?: string;
	password: string;
};
