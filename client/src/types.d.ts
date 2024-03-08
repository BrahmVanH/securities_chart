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

export interface IChartFCProps {
	data: FormattedEntry;
}

export type INavFCProps = {
	handleShowHistory: Function;
};

export interface IButtonSCProps {
	$margin?: string;
	$width?: string;
	$useBorder?: boolean;
	$fontSize?: string;
}

export interface IInputSCProps {
	$width?: string;
}

export interface ILabelSCProps {
	$fontSize?: string;
}

export interface IEntryCardFCProps {
	entry?: FormattedEntry;
}

export interface IStarRatingFCRatingProps {
	rating: number;
}
