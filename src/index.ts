import { day1 as day1_2022 } from "./2022/day1";
import { day2 as day2_2022 } from "./2022/day2";
import { day3 as day3_2022 } from "./2022/day3";
import { day4 as day4_2022 } from "./2022/day4";

const days = [day1_2022, day2_2022, day3_2022, day4_2022];
days.map(day => day());
