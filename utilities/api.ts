import type { InternalAxiosRequestConfig } from 'axios';
import axios from 'axios';
import { getCookie } from 'cookies-next';
import { Cookies } from '../enums/cookies';
import { QueryParams } from '../types/queryOptions';
import { Session } from '../types/session';

const createAxiosInstance = ({ req, res }: QueryParams) => {
	const sessionCookie = JSON.stringify(getCookie(Cookies.SESSION, { req, res }));
	const session: Session | null = sessionCookie ? JSON.parse(JSON.parse(sessionCookie)) : null;

	const instance = axios.create({ baseURL: `http://35.180.189.180:8070/api` });

	instance.interceptors.request.use(
		(value: InternalAxiosRequestConfig) => {
			// Add the access token to the request header if present
			if (session && session.access) {
				value.headers.Authorization = `Bearer ${session.access}`;
			}

			return value;
		},
		async (error: any) => Promise.reject(error)
	);

	// instance.interceptors.response.use(
	// 	(value: AxiosResponse) => value,
	// 	async (error: any) => {
	// 		let originalRequest = error.config;

	// 		// Check if the error is due to an expired token
	// 		if (session && session.access && session.refresh && error.response.status === 401 && !originalRequest._retry) {
	// 			originalRequest._retry = true;

	// 			// Refresh the token from the API endpoint
	// 			try {
	// 				// Get the new access token
	// 				const response = await axios.post<Options, Responses.Users.TokenRefresh>(`https://${domain.backend_url}${Endpoints.USERS_TOKEN_REFRESH}`, { refresh: session.refresh });
	// 				const newAccessToken = response.data.access;

	// 				// Update `Authorization` header for the original request
	// 				originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

	// 				// Update the access token in the session cookie
	// 				const newSession: Session = { refresh: session.refresh, access: newAccessToken, user: session.user };
	// 				setCookie(Cookies.SESSION, JSON.stringify(newSession), { req, res });

	// 				// Retry the original request with the new access token
	// 				return instance(originalRequest);
	// 			} catch (error) {
	// 				// Handle token refresh error
	// 				deleteCookie(Cookies.SESSION, { req, res });
	// 				window.location.href = window.location.origin;

	// 				return Promise.reject(error);
	// 			}
	// 		}

	// 		// If it's not a token-related issue, just return the error
	// 		return Promise.reject(error);
	// 	}
	// );

	return instance;
};

export default createAxiosInstance;
