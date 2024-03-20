import React, { useEffect } from 'react';
import { VictoryChart, VictoryBar, VictoryPolarAxis, VictoryTheme } from 'victory';
import { IChartFCProps } from '../types';

const Chart: React.FC<IChartFCProps> = (props: Readonly<IChartFCProps>) => {
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
					{ x: 'financial', y: data.securitiesRating?.financial },
					{ x: 'fitness', y: data.securitiesRating?.fitness },
					{ x: 'dietary', y: data.securitiesRating?.dietary },
					{ x: 'social', y: data.securitiesRating?.social },
					{ x: 'professional', y: data.securitiesRating?.professional },
				]}
			/>
		</VictoryChart>
	);
};

export default Chart;
