# JavaScript HashMap Project

---

This project implements a basic **Hash Map** data structure in JavaScript, following the specifications from [The Odin Project's JavaScript Hashmap lesson](https://www.theodinproject.com/lessons/javascript-hashmap).

A hash map (also known as a hash table or dictionary) is a data structure that maps keys to values, allowing for efficient retrieval of values based on their associated keys. It uses a hash function to compute an index into an array of buckets or slots, from which the desired value can be found.

## Features

* **`set(key, value)`**: Adds a new key-value pair to the hash map. If the key already exists, its value is updated. Handles collisions using separate chaining (storing multiple entries in an array within each bucket).

* **Dynamic Resizing**: Automatically doubles its capacity and rehashes all existing key-value pairs when the load factor is exceeded, ensuring efficient performance as more data is added.

* **`get(key)`**: Retrieves the value associated with the given key. Returns `null` if the key is not found.

* **`has(key)`**: Checks if a key exists in the hash map. (To be implemented or already implemented based on previous conversation)

* **`remove(key)`**: Removes a key-value pair from the hash map. (To be implemented)

* **`length()`**: Returns the number of stored key-value pairs. (To be implemented)

* **`clear()`**: Removes all entries from the hash map. (To be implemented)

* **`keys()`**: Returns an array containing all unique keys. (To be implemented)

* **`values()`**: Returns an array containing all values. (To be implemented)

* **`entries()`**: Returns an array containing all key-value pairs (as `[key, value]` arrays). (To be implemented)
