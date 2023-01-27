import { useRouter } from 'next/router';

const useHideSnapshot = () => {
	const router = useRouter();

	if (typeof window !== 'undefined') {
		router.beforePopState(() => {
			const currentPage = document.getElementById('current-page');
			if (!!currentPage) {
				currentPage.style.opacity = '0';
			}
			return true;
		});
	}
};

export default useHideSnapshot;
