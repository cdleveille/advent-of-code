import fs from "fs";
import { performance } from "perf_hooks";

export const isValidAnswer = (answer: { partOneAnswer: any; partTwoAnswer: any }) => {
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

export const Runtime = {
	start: (label: string) => performance.mark(label),
	end: (label: string) => Math.round(performance.measure(`${label}RunTime`, label).duration * 100) / 100
};

export const InputParser = {
	fileToStringArray: (filePath: string) => fs.readFileSync(filePath, { encoding: "utf8", flag: "r" }).split(/\r?\n/)
};
