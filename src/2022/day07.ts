import { Day } from "../types";
import { getDayNumberFromFilename, Runtime } from "../util";

export default (() => {
	Runtime.start("partOne");
	// part one
	const partOneRuntime = Runtime.end("partOne");

	Runtime.start("partTwo");
	// part two
	const partTwoRuntime = Runtime.end("partTwo");

	return {
		dayNumber: getDayNumberFromFilename(__filename),
		partOneAnswer: null,
		partTwoAnswer: null,
		partOneRuntime,
		partTwoRuntime
	};
}) as Day;
