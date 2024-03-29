import year2022 from "./2022";
import { isValidAnswer } from "./util";

const years = [year2022];

years.map(year => {
	console.log(`\n---------- ${year.label} ----------`);
	year.days.map(day => {
		const { dayNumber, partOneAnswer, partTwoAnswer, partOneRuntime, partTwoRuntime } = day();
		if (isValidAnswer({ partOneAnswer, partTwoAnswer }))
			console.log(
				`Day ${dayNumber}: { Part 1: ${partOneAnswer ?? "?"}${
					partOneRuntime ? ` (${partOneRuntime} ms)` : ""
				}, Part 2: ${partTwoAnswer ?? "?"}${partTwoRuntime ? ` (${partTwoRuntime} ms)` : ""} }`
			);
	});
	console.log("");
});
