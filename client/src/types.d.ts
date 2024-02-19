export interface IChartData {
	financial: number;
	fitness: number;
	dietary: number;
	social: number;
	professional: number;
}

export interface IChartProps {
	data: IChartData;
}

export type NavProps = {
	handleShowHistory: Function;
};

export interface ButtonProps {
	margin?: string;
}
