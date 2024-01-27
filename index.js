class Node {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
}
class linkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
}
class hashMap {
  constructor() {
    this.defaultCapacity = 16;
    this.buckets = new Array(this.defaultCapacity);
  }
  hash(name, surname) {
    function stringToNumber(string) {
      console.log("Run");
      let hashCode = 0;
      let primeNumber = 31;
      for (let i = 0; i < string.length; i++) {
        hashCode = primeNumber * hashCode + string.charCodeAt(i);
        hashCode = hashCode % 5;
      }
      console.log(hashCode);
      return hashCode;
    }
    console.log(stringToNumber(name));
    console.log("Doesn");
    return stringToNumber(name) + stringToNumber(surname);
  }

  set(name, surname) {
    const hashedVal = hash(name, surname);
    let fullName = new Node(name, surname);
    let objName = { name: fullName };

    console.log(hashedVal);
    this.buckets.splice(hashedVal, 0, objName);
  }
  get() {}
  has() {}
  remove() {}
  length() {}
  clear() {}
  keys() {}
  values() {}
  entries() {}
}

const newHashMap = new hashMap();

newHashMap.hash("Pozdro", "Poćwicz");
