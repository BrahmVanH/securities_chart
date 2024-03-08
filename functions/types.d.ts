interface ISecuritiesRating {
	financial: number;
	fitness: number;
	mental: number;
	dietary: number;
	social: number;
	professional: number;
}

export interface IEntry {
	text?: string;
	securitiesRating?: ISecuritiesRating;
}
