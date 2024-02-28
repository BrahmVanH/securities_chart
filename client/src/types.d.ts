import { Entry } from './__generated__/graphql';

export interface IChartData {
	financial: number;
	fitness: number;
	dietary: number;
	social: number;
	professional: number;
}

export interface IEntry extends IChartData {
	date: string;
}

export interface IChartProps {
	data: FormattedEntry;
}

export type NavProps = {
	handleShowHistory: Function;
};

export interface ButtonProps {
	$margin?: string;
}

export type FormattedEntry = Entry & { formattedDate?: string };

export interface IEntryCardProps {
	entry?: FormattedEntry;
}

export interface IStarRatubgRatingProps {
	rating: number;
}
