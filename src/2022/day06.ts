import { Day } from "../types";
import { getDayNumberFromFilename, InputParser, Runtime } from "../util";

export default (() => {
	Runtime.start("partOne");

	const getFirstMarkerPosition = (input: string, markerLength: number) => {
		const allDistinct = (str: string) => new Set(str).size === str.length;
		for (let i = markerLength; i < input.length; i++) {
			if (allDistinct(input.slice(i - markerLength, i))) return i;
		}
	};

	const input = InputParser.fileToStringArray("./src/2022/input/day06.txt")[0];

	const partOneAnswer = getFirstMarkerPosition(input, 4);

	const partOneRuntime = Runtime.end("partOne");

	Runtime.start("partTwo");

	const partTwoAnswer = getFirstMarkerPosition(input, 14);

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
