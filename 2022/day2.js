import { day2Input as input } from "./input.js";

const points = {
	win: 6,
	draw: 3,
	loss: 0,
	rock: 1,
	paper: 2,
	scissors: 3
};

// part 1
const gameResultPart1 = {
	AX: points.draw,
	AY: points.win,
	AZ: points.loss,
	BX: points.loss,
	BY: points.draw,
	BZ: points.win,
	CX: points.win,
	CY: points.loss,
	CZ: points.draw
};
const yourMovePart1 = {
	X: points.rock,
	Y: points.paper,
	Z: points.scissors
};
const pointsPart1 = input.reduce((total, game) => {
	total += gameResultPart1[game] + yourMovePart1[game[1]];
	return total;
}, 0);
console.log(`Part 1: ${pointsPart1}`);

// part 2
const gameResultPart2 = {
	AX: points.loss,
	AY: points.draw,
	AZ: points.win,
	BX: points.loss,
	BY: points.draw,
	BZ: points.win,
	CX: points.loss,
	CY: points.draw,
	CZ: points.win
};
const yourMovePart2 = {
	AX: points.scissors,
	AY: points.rock,
	AZ: points.paper,
	BX: points.rock,
	BY: points.paper,
	BZ: points.scissors,
	CX: points.paper,
	CY: points.scissors,
	CZ: points.rock
};
const pointsPart2 = input.reduce((total, game) => {
	total += gameResultPart2[game] + yourMovePart2[game];
	return total;
}, 0);
console.log(`Part 2: ${pointsPart2}`);
