// Send Token
export type SendTokenPayload = {
	email: string;
};

export type SendTokenResponse = {
	email: string;
};

export type SendTokenForm = {
	email: string;
};

// Validate Token
export type ValidateTokenPayload = {
	token: string;
};

export type ValidateTokenResponse = {
	token: string;
};

export type ValidateTokenForm = {
	token: string;
};

// Reset Password
export type ResetPasswordPayload = {
	token: string;
	password: string;
};

export type ResetPasswordResponse = {
	token: string;
	password: string;
};

export type ResetPasswordForm = {
	token: string;
	password: string;
};
