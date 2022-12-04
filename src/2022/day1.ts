import { Day } from "../types";
import { day1Input } from "./input";

export const day1: Day = () => {
	// part 1
	const partOneAnswer = day1Input.reduce((acc, list) => {
		const listTotal = list.reduce((acc, item) => {
			return acc + item;
		}, 0);
		if (listTotal > acc) acc = listTotal;
		return acc;
	}, 0);

	// part 2
	const partTwoAnswer = day1Input
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

	return { partOneAnswer, partTwoAnswer };
};
