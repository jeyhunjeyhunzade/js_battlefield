let re = null;
for (let i = 0; i < 10; i++) {
  re = /cat/g;
  re.test("catastrophe"); // true, false false false...
}
for (let i = 0; i < 10; i++) {
  re = new RegExp("cat", "g"); // initialize new every iteration
  re.test("catastrophe"); // true all time
}
