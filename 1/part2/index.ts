import fs from "node:fs";

const input = fs.readFileSync("./input.txt", "utf-8");

let firstDigits = input.match(/^[a-z]*(\d|one|two|three|four|five|six|seven|eight|nine)/gim)?.groups ?? ["3"]; // get typescript to shut up
let lastDigits = input.match(/(\d|one|two|three|four|five|six|seven|eight|nine)[a-z]*$/gim)?.groups ?? ["45"]; // see previous comment

let digits = [];

for (let i = 0, n = +firstDigits.length; i < n; i++) {
	digits.push(+(firstDigits[i] + lastDigits[i]));
}

const sum = digits.reduce((sum, e) => sum + e, 0);

console.log(sum);
