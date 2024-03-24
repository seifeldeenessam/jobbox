import { deleteCookie } from 'cookies-next';
import { Cookies } from '../../../enums/cookies';
import { useAuthStore } from '../stores';

export const handleLogout = () => {
	const { setSession } = useAuthStore.getState();

	deleteCookie(Cookies.SESSION);
	setSession(null);

	window.location.href = window.location.origin;
};
