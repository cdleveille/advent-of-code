import { Day } from "../types";
import { getDayNumberFromFilename, InputParser, Runtime } from "../util";

export default (() => {
	Runtime.start("partOne");

	class Stack<T> {
		items: T[];
		constructor() {
			this.items = [];
		}
		push(toPush: T | T[]) {
			this.items = this.items.concat(toPush);
		}
		pop(toPop?: number) {
			return this.items.splice(this.items.length - (toPop || 1));
		}
		top() {
			return this.items[this.items.length - 1];
		}
	}

	interface IMove {
		count: number;
		fromStack: number;
		toStack: number;
	}

	const buildStacks = (lines: string[]) => {
		const charIndexToStackIndex = (charPos: number) => (charPos - 1) / 4;
		const stacks: Stack<string>[] = [];
		for (let i = 7; i >= 0; i--) {
			for (let j = 1; j <= 33; j += 4) {
				const char = lines[i][j];
				if (char !== " ") {
					const stackIndex = charIndexToStackIndex(j);
					if (!stacks[stackIndex]) stacks[stackIndex] = new Stack<string>();
					stacks[stackIndex].push(char);
				}
			}
		}
		return stacks;
	};

	const buildMoves = (lines: string[]) => {
		const parseMove = (line: string) => {
			const parts = line.split(" ");
			return {
				count: parseInt(parts[1]),
				fromStack: parseInt(parts[3]) - 1,
				toStack: parseInt(parts[5]) - 1
			} as IMove;
		};
		const moves: IMove[] = [];
		for (let i = 10; i < lines.length; i++) {
			const line = lines[i];
			moves.push(parseMove(line));
		}
		return moves;
	};

	const getStackTops = (stacks: Stack<string>[]) => stacks.reduce((tops, stack) => tops + stack.top(), "");

	const lines = InputParser.fileToStringArray("./src/2022/input/day05.txt");
	const moves = buildMoves(lines);

	const partOneAnswer = (() => {
		const stacksPartOne = buildStacks(lines);
		moves.map(move => {
			for (let n = 0; n < move.count; n++) {
				const toMove = stacksPartOne[move.fromStack].pop();
				toMove && stacksPartOne[move.toStack].push(toMove);
			}
		});
		return getStackTops(stacksPartOne);
	})();

	const partOneRuntime = Runtime.end("partOne");

	Runtime.start("partTwo");

	const partTwoAnswer = (() => {
		const stacksPartTwo = buildStacks(lines);
		moves.map(move => {
			const toMove = stacksPartTwo[move.fromStack].pop(move.count);
			stacksPartTwo[move.toStack].push(toMove);
		});
		return getStackTops(stacksPartTwo);
	})();

	const partTwoRuntime = Runtime.end("partTwo");

	return {
		dayNumber: getDayNumberFromFilename(__filename),
		partOneAnswer,
		partTwoAnswer,
		partOneRuntime,
		partTwoRuntime
	};
}) as Day;
