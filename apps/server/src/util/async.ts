export async function exponentialBackoff<T>(
    operation: () => Promise<T>,
    opts?: {
        maxRetries?: number;
        initialDelay?: number;
        factor?: number;
    }
): Promise<T> {
    let attempt = 0;
    const { maxRetries = 5, initialDelay = 100, factor = 2 } = opts ?? {};
    let delay = initialDelay;

    while (true) {
        try {
            return await operation();
        } catch (err) {
            attempt++;
            if (attempt > maxRetries) {
                throw new Error(`Operation failed after ${maxRetries} retries: ${err}`);
            }
            await new Promise((res) => setTimeout(res, delay));
            delay *= factor;
        }
    }
}
