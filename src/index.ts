import year2022 from "./2022";
import { isValidAnswer } from "./util";

const years = [year2022];

years.map(year => {
	console.log(`\n---------- ${year.label} ----------`);
	year.days.map((day, i) => {
		const { partOneAnswer, partTwoAnswer } = day();
		if (isValidAnswer({ partOneAnswer, partTwoAnswer }))
			console.log(`Day ${i + 1}: { Part 1: ${partOneAnswer}, Part 2: ${partTwoAnswer} }`);
	});
	console.log("");
});
