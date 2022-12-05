import { IYear } from "../types";
import { getFolderName } from "../util";
import day01 from "./day01";
import day02 from "./day02";
import day03 from "./day03";
import day04 from "./day04";
import day05 from "./day05";

export default {
	label: getFolderName(__filename),
	days: [day01, day02, day03, day04, day05]
} as IYear;
