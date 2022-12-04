import { Day } from "../types";
import { day03Input } from "./input";

export default (() => {
	const getPriority = (item: string) =>
		item.toUpperCase() === item ? parseInt(item, 36) + 17 : parseInt(item, 36) - 9;

	// part 1
	const partOneAnswer = day03Input.reduce((sum, rucksack) => {
		const left = rucksack.slice(0, rucksack.length / 2);
		const right = rucksack.slice(rucksack.length / 2);
		for (const item of left) {
			if (right.includes(item)) {
				return sum + getPriority(item);
			}
		}
		return sum;
	}, 0);

	// part 2
	const partTwoAnswer = day03Input.reduce((sum, rucksack, i) => {
		if (i % 3 !== 0) return sum;
		for (const item of rucksack) {
			if (day03Input[i + 1].includes(item) && day03Input[i + 2].includes(item)) {
				return sum + getPriority(item);
			}
		}
		return sum;
	}, 0);

	return { partOneAnswer, partTwoAnswer };
}) as Day;
