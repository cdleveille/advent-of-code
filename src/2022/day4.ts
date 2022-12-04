import { day4Input } from "./input";

export const day4 = () => {
	console.log("\nDay 4");

	const isInRange = (value: number, min: number, max: number) => {
		return value >= min && value <= max;
	};

	const { part1Count, part2Count } = day4Input.reduce(
		(count, rangePair) => {
			const [leftRange, rightRange] = rangePair.split(",");
			const [leftRangeMin, leftRangeMax] = leftRange.split("-").map(val => parseInt(val));
			const [rightRangeMin, rightRangeMax] = rightRange.split("-").map(val => parseInt(val));

			// part 1 (either range completely contains the other)
			if (
				(leftRangeMin >= rightRangeMin && leftRangeMax <= rightRangeMax) ||
				(rightRangeMin >= leftRangeMin && rightRangeMax <= leftRangeMax)
			)
				count.part1Count++;

			// part 2 (any range overlap)
			if (
				isInRange(leftRangeMin, rightRangeMin, rightRangeMax) ||
				isInRange(leftRangeMax, rightRangeMin, rightRangeMax) ||
				isInRange(rightRangeMin, leftRangeMin, leftRangeMax) ||
				isInRange(rightRangeMax, leftRangeMin, leftRangeMax)
			)
				count.part2Count++;
			return count;
		},
		{ part1Count: 0, part2Count: 0 }
	);
	console.log(`Part 1: ${part1Count}\nPart 2: ${part2Count}`);
};
