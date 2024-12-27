export type AsyncBatchInfo = {
    /**
     * The number of the current batch (1 -> batchCount)
     */
    batchNumber: number;
    /**
     * The number of the current item in the current batch (1 -> batchSize)
     */
    itemInBatchNumber: number;
    /**
     * The number of the current item in the entire data array (1 -> itemCount)
     */
    itemNumber: number;
    /**
     * The total amount of items in the data array
     */
    itemCount: number;
    /**
     * The total amount of batches
     */
    batchCount: number;
    /**
     * The size of the current batch
     */
    batchSize: number;
};

export type AsyncMapInfo = {
    /**
     * The number of the current item in the entire data array (1 -> itemCount)
     */
    itemNumber: number;
    /**
     * The total number of items in the data array
     */
    itemCount: number;
    /**
     * How many items can be processed concurrently
     */
    concurrency: number;
};
