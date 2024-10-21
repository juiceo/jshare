import { useEffect, useState } from 'react';

export type UseTimerArgs = {
    /**
     * The unix timestamp of the timer target
     */
    to: number;
};

export type UseTimerReturn = {
    seconds: number;
    isDone: boolean;
};

export const useTimer = (args: UseTimerArgs) => {
    const { to } = args;
    const [seconds, setSeconds] = useState<number>(getSecondsTo(args.to));
    useEffect(() => {
        setSeconds(getSecondsTo(to));
        const interval = setInterval(() => {
            setSeconds(getSecondsTo(to));
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [to]);

    return {
        seconds,
        isDone: seconds === 0,
    };
};

const getSecondsTo = (timestamp: number) => {
    const ms = timestamp - Date.now();
    return Math.max(Math.ceil(ms / 1000), 0);
};
