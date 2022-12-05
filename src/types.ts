export type Day = () => IDay;

export type Answer = number | string | null | undefined;

export interface IDay {
	dayNumber: number;
	partOneAnswer: Answer;
	partTwoAnswer: Answer;
	partOneRuntime: number;
	partTwoRuntime: number;
}

export interface IYear {
	label: string;
	days: Day[];
}
