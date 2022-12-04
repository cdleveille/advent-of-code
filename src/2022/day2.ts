import { Day } from "../types";
import { day2Input } from "./input";

export const day2: Day = () => {
	const points: Record<string, number> = {
		win: 6,
		draw: 3,
		loss: 0,
		rock: 1,
		paper: 2,
		scissors: 3
	};

	// part 1
	const gameResultPart1: Record<string, number> = {
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
	const yourMovePart1: Record<string, number> = {
		X: points.rock,
		Y: points.paper,
		Z: points.scissors
	};
	const partOneAnswer = day2Input.reduce((total, game) => {
		return total + gameResultPart1[game] + yourMovePart1[game[1]];
	}, 0);

	// part 2
	const gameResultPart2: Record<string, number> = {
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
	const yourMovePart2: Record<string, number> = {
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
	const partTwoAnswer = day2Input.reduce((total, game) => {
		return total + gameResultPart2[game] + yourMovePart2[game];
	}, 0);

	return { partOneAnswer, partTwoAnswer };
};
