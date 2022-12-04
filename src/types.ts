export type Day = () => IDay;

export interface IDay {
	partOneAnswer: number | string | null;
	partTwoAnswer: number | string | null;
	partOneRuntime: number;
	partTwoRuntime: number;
}

export interface IYear {
	label: string;
	days: Day[];
}
