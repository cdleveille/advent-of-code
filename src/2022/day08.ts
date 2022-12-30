import { Day } from "../types";
import { getDayNumberFromFilename, InputParser, Runtime } from "../util";

export default (() => {
	Runtime.start("partOne");

	const input = InputParser.fileToStringArray("./src/2022/input/day08.txt");

	interface ICoord {
		x: number;
		y: number;
	}

	interface ITree extends ICoord {
		height: number;
	}

	const trees: ITree[] = [];
	input.map((row, y) => {
		row.split("").map((height, x) => {
			trees.push({ x, y, height: parseInt(height) });
		});
	});

	const partOneAnswer = trees.reduce((count, tree) => {
		// count the number of trees in each direction that are at least as tall as the target tree
		// if 0 are found in a direction, mark the target tree as visible and move onto the next

		const left = trees.filter(t => t.y === tree.y && t.x < tree.x && t.height >= tree.height).length;
		if (left === 0) return count + 1;

		const up = trees.filter(t => t.x === tree.x && t.y < tree.y && t.height >= tree.height).length;
		if (up === 0) return count + 1;

		const right = trees.filter(t => t.y === tree.y && t.x > tree.x && t.height >= tree.height).length;
		if (right === 0) return count + 1;

		const down = trees.filter(t => t.x === tree.x && t.y > tree.y && t.height >= tree.height).length;
		if (down === 0) return count + 1;

		return count;
	}, 0);

	const partOneRuntime = Runtime.end("partOne");

	Runtime.start("partTwo");

	const partTwoRuntime = Runtime.end("partTwo");

	const dayNumber = getDayNumberFromFilename(__filename);

	return {
		dayNumber,
		partOneAnswer: partOneAnswer,
		partTwoAnswer: null,
		partOneRuntime,
		partTwoRuntime
	};
}) as Day;
