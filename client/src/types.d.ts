interface ISecuritiesRating {
	financial: number;
	fitness: number;
	mental: number;
	dietary: number;
	social: number;
	professional: number;
}

export interface IEntry {
	date?: string;
	text?: string;
	securitiesRating?: ISecuritiesRating;
}

export type FormattedEntry = IEntry & { formattedDate?: string };

export interface IChartProps {
	data: FormattedEntry;
}

export type INavProps = {
	handleShowHistory: Function;
};

export interface ButtonProps {
	$margin?: string;
}

export interface IEntryCardProps {
	entry?: FormattedEntry;
}

export interface IStarRatubgRatingProps {
	rating: number;
}
