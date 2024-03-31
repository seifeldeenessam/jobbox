import { UseMutationResult } from '@tanstack/react-query';

export const getFormStatus = (status: UseMutationResult['status'], initialLabel: string, errorLabel: string, successLabel: string) => {
	if (status === 'idle') return { className: 'btn-brand-1', disabled: false, label: initialLabel };
	if (status === 'pending') return { className: 'btn-brand-1', disabled: true, label: 'Loading...' };
	if (status === 'error') return { className: 'btn-brand-error', disabled: false, label: errorLabel };
	return { className: 'btn-brand-success', disabled: false, label: successLabel };
};
