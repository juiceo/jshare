import { chunk } from 'lodash';

import type { AsyncBatchInfo, AsyncMapInfo } from './async.types';

/**
 * Sleep for the given amount of time.
 *
 * @param ms The amount of time to sleep in milliseconds
 * @returns A promise that resolves to true after the given amount of time
 */
export function sleep(ms: number): Promise<boolean> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true);
        }, ms);
    });
}

/**
 * Map over some data asynchronously, with a given batch size.
 *
 * Up to @opts.batchSize items will be processed in each batch, and the next
 * batch will not start running until the previous batch is completely finished.
 *
 * This guarantees that the processing of each item will be started in order, and that the results
 * will be returned in order.
 *
 * @param data An array of data to process
 * @param handler The handler to run for each item in the data array
 * @param opts Options for the batch processing
 * @returns A promise that resolves to an array of results
 */
export const asyncBatch = async <TData, TResult>(
    data: TData[],
    handler: (item: TData, info: AsyncBatchInfo) => Promise<TResult>,
    opts: {
        /**
         * The size of each batch
         */
        batchSize: number;
    }
): Promise<TResult[]> => {
    if (opts.batchSize <= 0) {
        throw new Error('Batch size must be greater than 0');
    }
    const batches = chunk(data, opts.batchSize);
    const results: TResult[] = [];

    let batchIndex = 0;
    for (const batch of batches) {
        const batchResults = await Promise.all(
            batch.map((item, index) =>
                handler(item, {
                    batchNumber: batchIndex + 1,
                    itemInBatchNumber: index + 1,
                    itemNumber: batchIndex * opts.batchSize + index + 1,
                    batchCount: batches.length,
                    itemCount: data.length,
                    batchSize: batch.length,
                })
            )
        );
        results.push(...batchResults);
        batchIndex++;
    }

    return results;
};

/**
 * Map over some data asynchronously, with a provided concurrency.
 *
 * The processing of the next item will start once any of the previous items have finished processing,
 * such that the amount of pending items is always equal to or less than @opts.concurrency.
 *
 * This does not guarantee that the items will be processed in order, but it does guarantee that the results
 * will be returned in order.
 *
 * @param data An array of data to process
 * @param handler The handler to run for each item in the data array
 * @param opts Options for the concurrent processing
 * @returns A promise that resolves to an array of results
 */
export const asyncMap = async <TData, TResult>(
    data: TData[],
    mapper: (item: TData, info: AsyncMapInfo) => Promise<TResult>,
    opts: {
        /**
         * How many items can be processed concurrently
         */
        concurrency: number;
    }
): Promise<TResult[]> => {
    if (opts.concurrency <= 0) {
        throw new Error('Concurrency must be greater than 0');
    }
    return new Promise<TResult[]>(async (resolve) => {
        const pendingData = data.slice();
        const results: TResult[] = new Array(data.length);
        const processNext = async () => {
            const itemIndex = data.length - pendingData.length;
            const item = pendingData.shift();
            if (!item) {
                return Promise.resolve();
            }
            console.log('HANDLE INDEX', itemIndex);
            const result = await mapper(item, {
                itemNumber: itemIndex + 1,
                itemCount: data.length,
                concurrency: opts.concurrency,
            });
            results[itemIndex] = result;

            return processNext();
        };

        await Promise.all(Array.from({ length: opts.concurrency }).map(processNext));
        resolve(results);
    });
};
