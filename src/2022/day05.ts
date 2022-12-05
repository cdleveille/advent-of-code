import { Day } from "../types";
import { getDayNumberFromFilename, InputParser, Runtime } from "../util";

export default (() => {
	Runtime.start("partOne");
	// part one

	class Stack<T> {
		items: T[];
		constructor() {
			this.items = [];
		}
		push(item: T) {
			this.items.push(item);
		}
		pushMultiple(items: T[]) {
			this.items = this.items.concat(items);
		}
		pop() {
			return this.items.pop();
		}
		popMultiple(numToPop: number) {
			return this.items.splice(this.items.length - numToPop);
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
		const stacks = [
			new Stack<string>(),
			new Stack<string>(),
			new Stack<string>(),
			new Stack<string>(),
			new Stack<string>(),
			new Stack<string>(),
			new Stack<string>(),
			new Stack<string>(),
			new Stack<string>()
		];
		for (let i = 7; i >= 0; i--) {
			for (let j = 1; j <= 33; j += 4) {
				const char = lines[i][j];
				if (char !== " ") {
					stacks[charIndexToStackIndex(j)].push(char);
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

	const getStackTops = <T>(stacks: Stack<T>[]) => stacks.reduce((tops, stack) => tops + stack.top(), "");

	const lines = InputParser.fileToStringArray("./src/2022/input/day05.txt");
	const stacksPartOne = buildStacks(lines);
	const moves = buildMoves(lines);

	moves.map(move => {
		for (let n = 0; n < move.count; n++) {
			const toMove = stacksPartOne[move.fromStack].pop();
			toMove && stacksPartOne[move.toStack].push(toMove);
		}
	});

	const partOneAnswer = getStackTops(stacksPartOne);
	const partOneRuntime = Runtime.end("partOne");

	Runtime.start("partTwo");
	// part two

	const stacksPartTwo = buildStacks(lines);
	moves.map(move => {
		const toMove = stacksPartTwo[move.fromStack].popMultiple(move.count);
		stacksPartTwo[move.toStack].pushMultiple(toMove);
	});

	const partTwoAnswer = getStackTops(stacksPartTwo);
	const partTwoRuntime = Runtime.end("partTwo");

	return {
		dayNumber: getDayNumberFromFilename(__filename),
		partOneAnswer,
		partTwoAnswer,
		partOneRuntime,
		partTwoRuntime
	};
}) as Day;
