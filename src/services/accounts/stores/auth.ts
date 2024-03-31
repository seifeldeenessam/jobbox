import { create } from 'zustand';
import { Session } from '../../../types/session';

type State = {
	session: null | Session;
	setSession: (session: null | Session) => void;
};

export const useAuthStore = create<State>((set) => ({
	session: null,
	setSession(session) {
		set((state) => ({ session }));
	}
}));
