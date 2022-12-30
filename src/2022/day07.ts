import { Day } from "../types";
import { getDayNumberFromFilename, Runtime } from "../util";

export default (() => {
	Runtime.start("partOne");

	// class Node {
	// 	parent: Node;
	// 	name: string;
	// 	size: number;

	// 	constructor(parent: Node, name: string, size: number) {
	// 		this.parent = parent;
	// 		this.name = name;
	// 		this.size = size;
	// 	}
	// }

	// step 1: build tree

	// step 2: traverse tree

	const partOneRuntime = Runtime.end("partOne");

	Runtime.start("partTwo");

	const partTwoRuntime = Runtime.end("partTwo");

	const dayNumber = getDayNumberFromFilename(__filename);

	return {
		dayNumber,
		partOneAnswer: null,
		partTwoAnswer: null,
		partOneRuntime,
		partTwoRuntime
	};
}) as Day;
