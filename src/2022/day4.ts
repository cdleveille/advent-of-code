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
		let rightContainsLeft = true;
		for (let n = leftRangeMin; n <= leftRangeMax; n++) {
			if (!isInRange(n, rightRangeMin, rightRangeMax)) {
				rightContainsLeft = false;
				break;
			}
		}
		if (rightContainsLeft) return count + 1;
		let leftContainsRight = true;
		for (let n = rightRangeMin; n <= rightRangeMax; n++) {
			if (!isInRange(n, leftRangeMin, leftRangeMax)) {
				leftContainsRight = false;
				break;
			}
		}
		if (leftContainsRight) return count + 1;
		return count;
	}, 0);
	console.log(`Part 1: ${part1Count}`);

	// part 2
	const part2Count = day4Input.reduce((count, rangePair) => {
		const [leftRange, rightRange] = rangePair.split(",");
		const [leftRangeMin, leftRangeMax] = leftRange.split("-").map(val => parseInt(val));
		const [rightRangeMin, rightRangeMax] = rightRange.split("-").map(val => parseInt(val));
		for (let n = leftRangeMin; n <= leftRangeMax; n++) {
			if (isInRange(n, rightRangeMin, rightRangeMax)) {
				return count + 1;
			}
		}
		return count;
	}, 0);
	console.log(`Part 2: ${part2Count}`);
};
