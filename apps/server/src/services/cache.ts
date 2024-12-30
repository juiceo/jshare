export type CacheEntry<TValue> = {
    createdAt: number;
    value: TValue;
};

export class InMemoryCache<TValue> {
    private cache: Map<string, CacheEntry<TValue>>;
    private ttl: number;

    constructor(args: { ttl: number }) {
        this.cache = new Map<string, CacheEntry<TValue>>();
        this.ttl = args.ttl;
    }

    get(key: string): TValue | undefined {
        const entry = this.cache.get(key);
        if (!entry) {
            return undefined;
        }
        if (entry.createdAt + this.ttl < Date.now()) {
            this.cache.delete(key);
            return undefined;
        }
        return entry.value;
    }

    set(key: string, value: TValue) {
        this.cache.set(key, {
            createdAt: Date.now(),
            value,
        });
    }

    delete(key: string) {
        this.cache.delete(key);
    }

    clear() {
        this.cache.clear();
    }
}
