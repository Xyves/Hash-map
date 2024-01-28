class hashMap {
  constructor() {
    this.defaultCapacity = 15;
    this.buckets = new Array(this.defaultCapacity).fill([]);
    this.keys = 0;
  }
  hash(value) {
    function stringToNumber(string) {
      let hashCode = 0;
      let primeNumber = 31;
      for (let i = 0; i < string.length; i++) {
        hashCode = primeNumber * hashCode + string.charCodeAt(i);
        hashCode = hashCode % 5;
      }
      return hashCode;
    }
    return stringToNumber(value);
  }

  set(key, value) {
    let hashedVal = this.hash(value);
    let newNode = new Node(key, value);
    this.buckets[hashedVal] = [...this.buckets[hashedVal], newNode];
    this.keys++;
  }
  get(key1) {
    for (let i = 0; i < this.buckets.length; i++) {
      if (this.buckets[i] != undefined) {
        const foundNode = this.buckets[i].find((node) =>
          node.hasOwnProperty(key1)
        );
        if (foundNode) {
          let value = Object.values(foundNode);
          console.log(value);
          return value;
        }
      }
    }
    console.log("Undefined");
    return undefined;
  }
  has(key1) {
    for (let i = 0; i < this.buckets.length; i++) {
      if (this.buckets[i] && this.buckets[i].length != 0) {
        const keyFound = this.buckets[i].some((object) =>
          object.hasOwnProperty(key1)
        );
        if (keyFound) {
          console.log("True " + key1 + " is found");
          return true;
        } else {
          console.log("False " + key1 + " is not found");
          return false;
        }
      }
    }
  }
  remove(removeKey) {
    for (let i = 0; i < this.buckets.length; i++) {
      if (this.buckets[i].length !== 0) {
        this.buckets[i] = this.buckets[i].filter((obj) => {
          if (removeKey in obj) {
            console.log("Deleting:", obj);
            this.keys--;
            return false;
          }
          return true;
        });
      }
    }
  }
  length() {
    console.log("Length = " + this.keys);
  }
  clear() {
    this.buckets = new Array(this.defaultCapacity).fill([]);
    this.keys = 0;
    console.log(this.buckets);
  }
  getKeys() {
    let storedKeys = [];
    for (let array of this.buckets) {
      if (array.length != 0) {
        console.log("XD");
        for (let obj of array) {
          console.log("!");
          for (let key in obj) {
            storedKeys.push(key);
          }
        }
      }
    }
    console.log(storedKeys);
  }
  values() {
    let storedValues = [];
    for (let array of this.buckets) {
      if (array.length != 0) {
        for (let obj of array) {
          for (const key in obj) {
            storedValues.push(obj[key]);
          }
        }
      }
    }
    console.log(storedValues);
  }
  entries() {
    let storedObj = [];
    for (let array of this.buckets) {
      if (array.length != 0) {
        for (let obj of array) {
          for (const key in obj) {
            storedObj.push([key, obj[key]]);
          }
        }
      }
    }
    console.log(storedObj);
  }
}
class Node {
  constructor(key, value) {
    this[key] = value;
  }
}
const newHashMap = new hashMap();

newHashMap.hash("City", "Stavanger");
// Set objects
newHashMap.set("car", "Ferrari");
newHashMap.set("mountain", "Fuji");
newHashMap.set("piece", "Queen");

// Print value of key(car)
newHashMap.get("car");

// Check if the key exists
newHashMap.has("Ra9");

// Remove object
// newHashMap.remove("car");

// Print all keys
// newHashMap.getKeys();

// Print all values
// newHashMap.values();

// Print keys+ values
// newHashMap.entries();

// removes all entries in the hash map.
// newHashMap.clear();

// returns the number of stored keys in the hash map.
// newHashMap.length();
