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
                // To update load capacity
                this.capacity = this.capacity * 2;
                // To save a copy of the old array
                let oldArr = [...this.arr];
                // To reset the array
                this.arr = new Array(this.capacity);
                // Set this.amount to 0 so it wont get inflated
                this.amount = 0;
                // To loop through old array and add each item to new hashMap
                oldArr.forEach( elem => {
                    if (elem === undefined) {

                    } else {
                        elem.forEach( e => {
                            this.set(e.key, e.value)
                        });
                    }
                })
                 
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
        // get key from arr
        let hashKey = this.hash(key);
        if (!this.arr[hashKey] || this.arr[hashKey].length === 0) {
            return null;
        } else {
            for (elem of this.arr[hashKey]) {
                if (elem.key === key) {
                    return elem.value;
                }
            }
            return null;
        }
    }
    has(key) {
        // Hash key and see if bucket contains key
        // Hashed key to search
        let hashKey = this.hash(key);
        if (!this.arr[hashKey] || this.arr[hashKey].length === 0) {
            return false;
        } else {
            for (elem of this.arr[hashKey]) {
                if (elem.key === key) {
                    return true
                }
            }
            return false;
        }
    }
    remove(key) {
        // remove key from hashtable
        let hashKey = this.hash(key);
        if (!this.arr[hashKey] || this.arr[hashKey].length === 0) {
            return false;
        } else {
            for (let i = 0; i < this.arr[hashKey].length; i++) {
                if (this.arr[hashKey][i].key === key) {
                    // Remove elem from bucket
                    this.arr[hashKey].splice(i, 1);
                    // Decrease amount
                    this.amount--;
                    return true;
                }
            }
            return false;
        }
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