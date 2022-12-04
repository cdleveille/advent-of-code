import { day3Input as input } from "./input";

export const day3 = () => {
	console.log("\nDay 3");

	const getPriority = (item: string) =>
		item.toUpperCase() === item ? parseInt(item, 36) + 17 : parseInt(item, 36) - 9;

	// part 1
	const part1Total = input.reduce((sum, rucksack) => {
		const left = rucksack.slice(0, rucksack.length / 2);
		const right = rucksack.slice(rucksack.length / 2);
		for (const item of left) {
			if (right.includes(item)) {
				return sum + getPriority(item);
			}
		}
		return sum;
	}, 0);
	console.log(`Part 1: ${part1Total}`);

	// part 2
	const part2Total = input.reduce((sum, rucksack, i) => {
		if (i % 3 !== 0) return sum;
		for (const item of rucksack) {
			if (input[i + 1].includes(item) && input[i + 2].includes(item)) {
				return sum + getPriority(item);
			}
		}
		return sum;
	}, 0);
	console.log(`Part 2: ${part2Total}`);
};
