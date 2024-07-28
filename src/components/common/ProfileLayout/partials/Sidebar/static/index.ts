import { Routes } from '@/enums/routes';

export const links = [
	{ id: 1, icon: 'dashboard.svg', label: 'Dashboard', path: Routes.ACCOUNT_PROFILE },
	{ id: 2, icon: 'candidates.svg', label: 'Candidates', path: Routes.ACCOUNT_PROFILE_CANDIDATES },
	{ id: 3, icon: 'recruiters.svg', label: 'Recruiters', path: Routes.ACCOUNT_PROFILE_RECRUITERS },
	{ id: 4, icon: 'jobs.svg', label: 'My Jobs', path: Routes.ACCOUNT_PROFILE_JOBS },
	{ id: 5, icon: 'tasks.svg', label: 'Tasks List', path: '#' },
	{ id: 6, icon: 'profiles.svg', label: 'My Profiles', path: '#' },
	{ id: 7, icon: 'cv-manage.svg', label: 'CV Manage', path: '#' },
	{ id: 8, icon: 'settings.svg', label: 'Settings', path: '#' },
	{ id: 9, icon: 'authentication.svg', label: 'Authentication', path: '#' }
];

export const percentage = 67;
