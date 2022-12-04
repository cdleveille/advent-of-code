import { day1 as day1_2022 } from "./2022/day1";
import { day2 as day2_2022 } from "./2022/day2";
import { day3 as day3_2022 } from "./2022/day3";
import { day4 as day4_2022 } from "./2022/day4";

interface IYear {
	label: string;
	days: (() => void)[];
}

const year2022: IYear = {
	label: "2022",
	days: [day1_2022, day2_2022, day3_2022, day4_2022]
};

const years = [year2022];

years.map(year => {
	console.log(`\n---------- ${year.label} ----------`);
	year.days.map(day => day());
});
