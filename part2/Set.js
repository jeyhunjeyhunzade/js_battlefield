// Initialize set with array
const s1 = new Set(["val1", "val2", "val3"]);

for (let value of s1.values()) {
  alert(value);
} // val1 // val2 // val3

s1.forEach((val, dupVal) => alert(`${val} -> ${dupVal}`));
// val1 -> val1
// val2 -> val2
// val3 -> val3
// ----------------------------------------------------------------
const s = new Set();
alert(s.has("Matt")); // false
alert(s.size); // 0
s.add("Matt").add("Frisbie");
alert(s.has("Matt")); // true
alert(s.size); // 2
s.delete("Matt");
alert(s.has("Matt")); // false
alert(s.has("Frisbie")); // true
alert(s.size); // 1
s.clear(); // destroys all values in this Set instance

alert(s.has("Matt")); // false
alert(s.has("Frisbie")); // false
alert(s.size); // 0
// ----------------------------------------------------------------

const s2 = new Set();
const functionVal = function () {};
const symbolVal = Symbol();
const objectVal = new Object();
s.add(functionVal);
s.add(symbolVal);
s.add(objectVal);
alert(s.has(functionVal)); // true
alert(s.has(symbolVal)); // true
alert(s.has(objectVal)); // true
// ----------------------------------------------------------------

const s3 = new Set(["val1"]);
// String primitive as value is unaltered
for (let value of s3.values()) {
  value = "newVal";
  alert(value); // newVal
  alert(s3.has("val1")); // true
}

const valObj = { id: 1 };
const s4 = new Set([valObj]);
// Value object property is altered, but the object still exists
// inside the set
for (let value of s.values()) {
  value.id = "newVal";
  alert(value); // {id: "newVal"}
  alert(s.has(valObj)); // true
}
alert(valObj); // {id: "newKey"}
// ----------------------------------------------------------------
