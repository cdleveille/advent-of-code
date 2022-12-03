import { day3Input as input } from "./input.js";

const getPriority = item => (item.toUpperCase() === item ? parseInt(item, 36) + 17 : parseInt(item, 36) - 9);

// part 1
const part1Total = input.reduce((sum, rucksack) => {
	const left = rucksack.slice(0, rucksack.length / 2);
	const right = rucksack.slice(rucksack.length / 2);
	for (const item of left) {
		if (right.includes(item)) {
			return sum + getPriority(item);
		}
	}
}, 0);
console.log(`Part 1: ${part1Total}`);

// part 2
const part2Total = input.reduce((sum, _rucksack, i) => {
	if (i % 3 !== 0) return sum;
	for (const item of input[i]) {
		if (input[i + 1].includes(item) && input[i + 2].includes(item)) {
			return sum + getPriority(item);
		}
	}
}, 0);
console.log(`Part 2: ${part2Total}`);
