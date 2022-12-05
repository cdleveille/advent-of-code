import { Day } from "../types";
import { getDayNumberFromFilename, Runtime } from "../util";
import { day01Input } from "./input";

export default (() => {
	Runtime.start("partOne");

	const partOneAnswer = day01Input.reduce((acc, list) => {
		const listTotal = list.reduce((acc, item) => {
			return acc + item;
		}, 0);
		if (listTotal > acc) acc = listTotal;
		return acc;
	}, 0);

	const partOneRuntime = Runtime.end("partOne");

	Runtime.start("partTwo");

	const partTwoAnswer = day01Input
		.reduce(
			(acc, list) => {
				const listTotal = list.reduce((acc, item) => {
					return acc + item;
				}, 0);
				if (listTotal > acc[0]) {
					acc[2] = acc[1];
					acc[1] = acc[0];
					acc[0] = listTotal;
				} else if (listTotal > acc[1]) {
					acc[2] = acc[1];
					acc[1] = listTotal;
				} else if (listTotal > acc[2]) {
					acc[2] = listTotal;
				}
				return acc;
			},
			[0, 0, 0]
		)
		.reduce((acc, total) => {
			return acc + total;
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
