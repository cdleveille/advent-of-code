import fs from "fs";
import { performance } from "perf_hooks";

import { Answer } from "./types";

export const isValidAnswer = (answer: { partOneAnswer: Answer; partTwoAnswer: Answer }) => {
	return (
		answer.partOneAnswer != null ||
		answer.partTwoAnswer != null ||
		answer.partOneAnswer != undefined ||
		answer.partTwoAnswer != undefined
	);
};

export const getFolderName = (fullPath: string) => {
	const parts = fullPath.split("\\");
	return parts[parts.length - 2];
};

export const getDayNumberFromFilename = (fullPath: string) => {
	const parts = fullPath.split("\\");
	const filename = parts[parts.length - 1].split(".")[0];
	return parseInt(filename.slice(3));
};

export const Runtime = {
	start: (label: string) => performance.mark(label),
	end: (label: string) => Math.round(performance.measure(`${label}RunTime`, label).duration * 100) / 100
};

export const InputParser = {
	fileToStringArray: (filePath: string) => fs.readFileSync(filePath, { encoding: "utf8", flag: "r" }).split(/\r?\n/)
};
