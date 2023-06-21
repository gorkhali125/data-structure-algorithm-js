/**
    A hash table is a data structure that maps keys to values using a hash function.
    It provides efficient lookup and insertion operations.
    Hash tables are used when quick access to data is required, such as in caching, indexing, etc.
    They trade space for speed but may encounter collisions (two keys mapping to the same hash).
*/
class HashTable {
    constructor() {
        // hash table
        this.table = {};
    }

    /**
    Hashing function used to hash a key. 
    In this example, each charCode of a key is added and the sum is modulo by 37 to generate a hash key
    */
    hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % 37;
    }

    /**
    1. Setting a hash key for a value
    - To set a hash for a value, we need to pass the key
    - Hash of the key is calculated and the value is stored in the hashed key in the hash table
    */
    set(key, value) {
        const index = this.hash(key);
        this.table[index] = value;
    }

    /**
    2. Getting the value from a key
    - To get the value of a key, we need to pass the key
    - Hash of the key is calculated again and the value is retrieved from hash table for that hashed key
    */
    get(key) {
        const index = this.hash(key);
        return this.table[index];
    }
}

// Example Usage - Creating a hash table, setting and getting a value from key
const hashTable = new HashTable();
hashTable.set("name", "John");
console.log(hashTable.get("name")); // Output: John