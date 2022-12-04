export type Day = () => IDay;

export type Answer = number | string;

export interface IDay {
	partOneAnswer: Answer;
	partTwoAnswer: Answer;
}

export interface IYear {
	label: string;
	days: Day[];
}
