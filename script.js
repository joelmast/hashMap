class HashMap {
    constructor() {
        this.loadFactor = 0.75;
        this.capacity = 16;
        this.amount = 0;
        this.arr = new Array(this.capacity);
    }
    hash(key) {
        let hashCode = 0;
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
            hashCode = hashCode % this.capacity;
        }

        return hashCode;
    }
    set(key, value) {
        let myHash = this.hash(key);
        if (!this.arr[myHash] || this.arr[myHash].length === 0) {
            this.arr[myHash] = [{key, value}]
            this.amount++;
            if (this.amount / this.capacity > this.loadFactor) {
                this.capacity = this.capacity * 2;
                oldArr = this.arr.splice();
                // iterate over array and add new ones
                 
            }
        } else {
            for(obj of this.arr[myHash]) {
                if (obj.key === key) {
                    obj.value = value;
                    return;
                }
            }
            this.arr[myHash].push({key, value});
            this.amount++;
        }

    }
    get(key) {

    }
    has(key) {

    }
    remove(key) {

    }
    length() {

    }
    clear() {

    }
    keys() {

    }
    values() {

    }
    entries() {

    }


}