const fs = require("fs");
const crypto = require("crypto");

const finalHex = [];
let resStr = "";

const files = fs.readdirSync("./task2/");

files.forEach((fName) => {
  const buff = fs.readFileSync(`./task2/${fName}`);
  const hash = crypto.createHash("sha3-256").update(buff).digest("hex");
  finalHex.push(hash);
});

finalHex.sort();
resStr = finalHex.join("");

resStr += "mrjeyhun.work@gmail.com";
resStr = crypto.createHash("sha3-256").update(resStr).digest("hex");
console.log("resStr: " + resStr);
