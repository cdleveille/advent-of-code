import { day4Input } from "./input";

export const day4 = () => {
	console.log("\nDay 4");

	const isInRange = (value: number, min: number, max: number) => {
		return value >= min && value <= max;
	};

	// part 1
	const part1Count = day4Input.reduce((count, rangePair) => {
		const [leftRange, rightRange] = rangePair.split(",");
		const [leftRangeMin, leftRangeMax] = leftRange.split("-").map(val => parseInt(val));
		const [rightRangeMin, rightRangeMax] = rightRange.split("-").map(val => parseInt(val));
		if (
			(leftRangeMin >= rightRangeMin && leftRangeMax <= rightRangeMax) ||
			(rightRangeMin >= leftRangeMin && rightRangeMax <= leftRangeMax)
		)
			return count + 1;
		return count;
	}, 0);
	console.log(`Part 1: ${part1Count}`);

	// part 2
	const part2Count = day4Input.reduce((count, rangePair) => {
		const [leftRange, rightRange] = rangePair.split(",");
		const [leftRangeMin, leftRangeMax] = leftRange.split("-").map(val => parseInt(val));
		const [rightRangeMin, rightRangeMax] = rightRange.split("-").map(val => parseInt(val));
		if (
			isInRange(leftRangeMin, rightRangeMin, rightRangeMax) ||
			isInRange(leftRangeMax, rightRangeMin, rightRangeMax) ||
			isInRange(rightRangeMin, leftRangeMin, leftRangeMax) ||
			isInRange(rightRangeMax, leftRangeMin, leftRangeMax)
		)
			return count + 1;
		return count;
	}, 0);
	console.log(`Part 2: ${part2Count}`);
};
