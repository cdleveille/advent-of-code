import { Day } from "../types";
import { day04Input } from "./input";

export default (() => {
	const isInRange = (value: number, min: number, max: number) => {
		return value >= min && value <= max;
	};

	const { partOneAnswer, partTwoAnswer } = day04Input.reduce(
		(count, rangePair) => {
			const [leftRange, rightRange] = rangePair.split(",");
			const [leftRangeMin, leftRangeMax] = leftRange.split("-").map(val => parseInt(val));
			const [rightRangeMin, rightRangeMax] = rightRange.split("-").map(val => parseInt(val));

			// part 1 (either range completely contains the other)
			if (
				(leftRangeMin >= rightRangeMin && leftRangeMax <= rightRangeMax) ||
				(rightRangeMin >= leftRangeMin && rightRangeMax <= leftRangeMax)
			)
				count.partOneAnswer++;

			// part 2 (any range overlap)
			if (
				isInRange(leftRangeMin, rightRangeMin, rightRangeMax) ||
				isInRange(leftRangeMax, rightRangeMin, rightRangeMax) ||
				isInRange(rightRangeMin, leftRangeMin, leftRangeMax) ||
				isInRange(rightRangeMax, leftRangeMin, leftRangeMax)
			)
				count.partTwoAnswer++;
			return count;
		},
		{ partOneAnswer: 0, partTwoAnswer: 0 }
	);

	return { partOneAnswer, partTwoAnswer };
}) as Day;
