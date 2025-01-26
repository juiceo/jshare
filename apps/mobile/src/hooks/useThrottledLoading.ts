import { useEffect, useRef, useState } from 'react';

/**
 * A hook to throttle a boolean value, ensuring a minimum duration for the true state.
 *
 * @param isLoading - The input boolean value to throttle.
 * @param minLoadingMs - The minimum duration (in ms) that the boolean must stay true before switching to false.
 * @returns The throttled boolean value.
 */
export function useThrottledLoading(isLoading: boolean, minLoadingMs: number): boolean {
    const [throttledLoading, setThrottledLoading] = useState(isLoading);
    const lastTrueTimestamp = useRef<number | null>(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (isLoading) {
            setThrottledLoading(true);
            lastTrueTimestamp.current = Date.now();

            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
                timeoutRef.current = null;
            }
        } else {
            if (lastTrueTimestamp.current !== null) {
                const elapsedTime = Date.now() - lastTrueTimestamp.current;
                if (elapsedTime >= minLoadingMs) {
                    setThrottledLoading(false);
                } else {
                    const remainingTime = minLoadingMs - elapsedTime;
                    timeoutRef.current = setTimeout(() => {
                        setThrottledLoading(false);
                        timeoutRef.current = null;
                    }, remainingTime);
                }
            }
        }

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [isLoading, minLoadingMs]);

    return throttledLoading;
}
