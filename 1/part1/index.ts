import fs from "node:fs";

const input = fs.readFileSync("./input.txt", "utf-8");

const firstDigits = [...input.match(/^[a-z]*\d/gim)].map((e) => e[e.length - 1]);
const lastDigits = [...input.match(/\d[a-z]*$/gim)].map((e) => e[0]);

let digits = [];

for (let i = 0, n = firstDigits.length; i < n; i++) {
	digits.push(+(firstDigits[i] + lastDigits[i]));
}

const sum = digits.reduce((sum, e) => sum + e, 0);

console.log(sum);
