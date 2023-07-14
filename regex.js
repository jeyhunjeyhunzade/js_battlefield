// Match all instances of "at" in a string.
let pattern1 = /at/g;

// Match the first instance of "bat" or "cat", regardless of case.
let pattern2 = /[bc]at/i;

// Match all three-character combinations ending with "at", regardless of case.
let pattern3 = /.at/gi;

let re = null;
for (let i = 0; i < 10; i++) {
  re = /cat/g;
  re.test("catastrophe"); // once returns true, and then false
}
for (let i = 0; i < 10; i++) {
  re = new RegExp("cat", "g");
  re.test("catastrophe"); // always returns true
}
