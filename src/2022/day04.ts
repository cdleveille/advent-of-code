import { Day } from "../types";
import { getDayNumberFromFilename, Runtime } from "../util";
import { day04Input } from "./input";

export default (() => {
	Runtime.start("partOne");
	// part 1
	const isInRange = (value: number, min: number, max: number) => {
		return value >= min && value <= max;
	};

	const { partOneAnswer } = day04Input.reduce(
		(count, rangePair) => {
			const [leftRange, rightRange] = rangePair.split(",");
			const [leftRangeMin, leftRangeMax] = leftRange.split("-").map(val => parseInt(val));
			const [rightRangeMin, rightRangeMax] = rightRange.split("-").map(val => parseInt(val));

			// either range completely contains the other
			if (
				(leftRangeMin >= rightRangeMin && leftRangeMax <= rightRangeMax) ||
				(rightRangeMin >= leftRangeMin && rightRangeMax <= leftRangeMax)
			)
				count.partOneAnswer++;
			return count;
		},
		{ partOneAnswer: 0 }
	);
	const partOneRuntime = Runtime.end("partOne");

	Runtime.start("partTwo");
	// part 2
	const { partTwoAnswer } = day04Input.reduce(
		(count, rangePair) => {
			const [leftRange, rightRange] = rangePair.split(",");
			const [leftRangeMin, leftRangeMax] = leftRange.split("-").map(val => parseInt(val));
			const [rightRangeMin, rightRangeMax] = rightRange.split("-").map(val => parseInt(val));

			// any range overlap
			if (
				isInRange(leftRangeMin, rightRangeMin, rightRangeMax) ||
				isInRange(leftRangeMax, rightRangeMin, rightRangeMax) ||
				isInRange(rightRangeMin, leftRangeMin, leftRangeMax) ||
				isInRange(rightRangeMax, leftRangeMin, leftRangeMax)
			)
				count.partTwoAnswer++;
			return count;
		},
		{ partTwoAnswer: 0 }
	);
	const partTwoRuntime = Runtime.end("partTwo");

	return {
		dayNumber: getDayNumberFromFilename(__filename),
		partOneAnswer,
		partTwoAnswer,
		partOneRuntime,
		partTwoRuntime
	};
}) as Day;
