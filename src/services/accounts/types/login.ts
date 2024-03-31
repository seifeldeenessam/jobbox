import { UserStatus } from '../enums';

export type LoginPayload = {
	username: string;
	password: string;
};

export type LoginResponse = {
	message: string;
	refresh: string;
	access: string;
	user: {
		username: string;
		status: UserStatus;
	};
};

export type LoginFrom = {
	username: string;
	password: string;
};
