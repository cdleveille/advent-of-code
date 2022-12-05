import { Day } from "../types";
import { getDayNumberFromFilename, Runtime } from "../util";
import { day02Input } from "./input";

export default (() => {
	Runtime.start("partOne");

	const points: Record<string, number> = {
		win: 6,
		draw: 3,
		loss: 0,
		rock: 1,
		paper: 2,
		scissors: 3
	};
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
	const partOneAnswer = day02Input.reduce((total, game) => {
		return total + gameResultPart1[game] + yourMovePart1[game[1]];
	}, 0);

	const partOneRuntime = Runtime.end("partOne");

	Runtime.start("partTwo");

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
	const partTwoAnswer = day02Input.reduce((total, game) => {
		return total + gameResultPart2[game] + yourMovePart2[game];
	}, 0);

	const partTwoRuntime = Runtime.end("partTwo");

	const dayNumber = getDayNumberFromFilename(__filename);

	return {
		dayNumber,
		partOneAnswer,
		partTwoAnswer,
		partOneRuntime,
		partTwoRuntime
	};
}) as Day;
