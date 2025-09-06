class TimeLimitedCache {
    constructor() {
        // Initialize a Map to store key-value pairs with expiration
        this.cache = new Map();
    }

    set(key, value, duration) {
        // Check if the key already exists in cache
        const alreadyExists = this.cache.get(key);

        // If it exists, clear the previous timeout to reset expiry
        if (alreadyExists) {
            clearTimeout(alreadyExists.timeoutId);
        }

        // Set a timeout to automatically delete the key after 'duration' ms
        const timeoutId = setTimeout(() => {
            this.cache.delete(key);
        }, duration);

        // Store the value and timeoutId in the cache
        this.cache.set(key, { value, timeoutId });

        // Return true if the key already existed, false otherwise
        return Boolean(alreadyExists);
    }

    get(key) {
        // If the key exists, return its stored value
        if (this.cache.has(key)) {
            return this.cache.get(key).value;
        }
        // If not found, return -1
        return -1;
    }

    count() {
        // Return the number of valid (non-expired) keys in the cache
        return this.cache.size;
    }
}