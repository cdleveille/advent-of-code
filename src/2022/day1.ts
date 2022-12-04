import { day1Input as input } from "./input";

export const day1 = () => {
	console.log("\nDay 1");

	// part 1
	const part1Total = input.reduce((acc, list) => {
		const listTotal = list.reduce((acc, item) => {
			return acc + item;
		}, 0);
		if (listTotal > acc) acc = listTotal;
		return acc;
	}, 0);
	console.log(`Part 1: ${part1Total}`);

	// part 2
	const part2Total = input
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
	console.log(`Part 2: ${part2Total}`);
};
