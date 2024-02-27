// import React from 'react';
import { VictoryChart, VictoryBar, VictoryPolarAxis, VictoryTheme } from 'victory';
import { IChartProps } from '../types';

const Chart = (props: Readonly<IChartProps>) => {
	const data = props?.data;

	return (
		<VictoryChart polar theme={VictoryTheme.material}>
			{Object.keys(data).map((key, i) => {
				if (key !== '_id') {
					return <VictoryPolarAxis dependentAxis key={i} label={key} labelPlacement='perpendicular' style={{ tickLabels: { fill: 'none' } }} axisValue={key} />;
				}
			})}
			<VictoryBar
				style={{ data: { fill: 0o0, width: 25 } }}
				data={[
					{ x: 'financial', y: data.financial },
					{ x: 'fitness', y: data.fitness },
					{ x: 'dietary', y: data.dietary },
					{ x: 'social', y: data.social },
					{ x: 'professional', y: data.professional },
				]}
			/>
		</VictoryChart>
	);
};

export default Chart;
