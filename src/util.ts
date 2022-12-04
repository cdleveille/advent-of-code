import { IDay } from "./types";

export const isValidAnswer = (answer: IDay) => {
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
