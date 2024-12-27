import dayjs from 'dayjs';

export const formatDateRelative = (date: string) => {
    const dayjsDate = dayjs(date);
    const now = dayjs();
    const diffDays = now.diff(dayjsDate, 'days');

    if (diffDays === 0) {
        return 'Today';
    }
    if (diffDays === 1) {
        return 'Yesterday';
    }
    if (diffDays < 7) {
        return dayjsDate.format('dddd');
    }

    const isSameYear = dayjsDate.isSame(now, 'year');
    if (isSameYear) {
        return dayjsDate.format('DD MMMM');
    } else {
        return dayjsDate.format('DD MMMM YYYY');
    }
};
