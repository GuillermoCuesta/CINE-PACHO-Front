import toast from 'react-hot-toast';

type ToastTypes = 'error' | 'success';
type IToastHook = Record<ToastTypes, (message: string) => unknown>;

export const useToast = (): IToastHook => {
	const error = (message: string): string => toast.error(message);
	const success = (message: string): string => toast.success(message);

	return {
		error,
		success,
	};
};
