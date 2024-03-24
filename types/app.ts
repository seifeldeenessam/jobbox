import { Session } from './session';

export type PublicPageProps = {
	session: Session | null;
};

export type PrivatePageProps = {
	session: Session;
};
