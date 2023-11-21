const m = new Map();
alert(m.has("firstName")); // false
alert(m.get("firstName ")); // undefined
alert(m.size); // 0

m.set("firstName", "Matt").set("lastName", "Frisbie");

alert(m.has("firstName")); // true
alert(m.get("firstName")); // Matt
alert(m.size); // 2
m.delete("firstName"); // deletes only this key/value pair

alert(m.has("firstName")); // false
alert(m.has("lastName")); // true
alert(m.size); // 1

m.clear(); // destroys the all key/value pairs in this map

const m2 = new Map([
  ["key1", "val1"],
  ["key2", "val2"],
  ["key3", "val3"],
]);
alert(m2.entries === m2[Symbol.iterator]); // true
for (let pair of m2.entries()) {
  alert(pair);
} // [key1,val1] // [key2,val2] // [key3,val3]

for (let key of m2.keys()) {
  alert(key);
} // key1 // key2 // key3

for (let key of m.values()) {
  alert(key);
} // value1 // value2 // value3

const m3 = new Map([
  ["key1", "val1"],
  ["key2", "val2"],
  ["key3", "val3"],
]);
m3.forEach((val, key) => alert(`${key} -> ${val}`)); // key1 -> val1
// key2 -> val2
// key3 -> val3
