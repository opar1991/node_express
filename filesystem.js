const { readFileSync, writeFileSync } = require("fs");
const first = readFileSync("./files/members.txt", "utf-8");
const second = readFileSync("./files/members2.txt", "utf-8");
console.log(first, second);
const date = new Date();

console.log(date);
writeFileSync(
  "./files/opar.txt",
  `Here is the outcome: ${first}, ${second}, Created On ${date}`,
  { flag: "a" }
);
