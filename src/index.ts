import { year2022 } from "./2022";

const years = [year2022];

years.map(year => {
	console.log(`\n---------- ${year.label} ----------\n`);
	year.days.map((day, i) => {
		console.log(`Day ${i + 1}`);
		const { partOneAnswer, partTwoAnswer } = day();
		console.log(`Part 1: ${partOneAnswer}\nPart 2: ${partTwoAnswer}\n`);
	});
});
