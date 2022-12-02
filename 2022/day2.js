import { day2Input as input } from "./input.js";

// part 1
const gameResultPart1 = {
	AX: 3,
	AY: 6,
	AZ: 0,
	BX: 0,
	BY: 3,
	BZ: 6,
	CX: 6,
	CY: 0,
	CZ: 3
};
const yourMovePart1 = {
	X: 1,
	Y: 2,
	Z: 3
};
const pointsPart1 = input.reduce((total, game) => {
	total += gameResultPart1[game] + yourMovePart1[game[1]];
	return total;
}, 0);
console.log(`Part 1: ${pointsPart1}`);

// part 2
const gameResultPart2 = {
	AX: 0,
	AY: 3,
	AZ: 6,
	BX: 0,
	BY: 3,
	BZ: 6,
	CX: 0,
	CY: 3,
	CZ: 6
};
const yourMovePart2 = {
	AX: 3,
	AY: 1,
	AZ: 2,
	BX: 1,
	BY: 2,
	BZ: 3,
	CX: 2,
	CY: 3,
	CZ: 1
};
const pointsPart2 = input.reduce((total, game) => {
	total += gameResultPart2[game] + yourMovePart2[game];
	return total;
}, 0);
console.log(`Part 2: ${pointsPart2}`);
