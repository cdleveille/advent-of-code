export type Day = () => IDay;

export interface IDay {
	partOneAnswer: any;
	partTwoAnswer: any;
}

export interface IYear {
	label: string;
	days: Day[];
}
