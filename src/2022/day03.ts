import { Day } from "../types";
import { Runtime } from "../util";
import { day03Input } from "./input";

export default (() => {
	Runtime.start("partOne");
	// part 1
	const getPriority = (item: string) =>
		item.toUpperCase() === item ? parseInt(item, 36) + 17 : parseInt(item, 36) - 9;
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
	const partOneRuntime = Runtime.end("partOne");

	// part 2
	Runtime.start("partTwo");
	const partTwoAnswer = day03Input.reduce((sum, rucksack, i) => {
		if (i % 3 !== 0) return sum;
		for (const item of rucksack) {
			if (day03Input[i + 1].includes(item) && day03Input[i + 2].includes(item)) {
				return sum + getPriority(item);
			}
		}
		return sum;
	}, 0);
	const partTwoRuntime = Runtime.end("partTwo");

	return { partOneAnswer, partTwoAnswer, partOneRuntime, partTwoRuntime };
}) as Day;
