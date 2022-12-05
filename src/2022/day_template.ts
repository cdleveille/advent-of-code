import { Day } from "../types";
import { getDayNumberFromFilename, Runtime } from "../util";

export default (() => {
	Runtime.start("partOne");

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
