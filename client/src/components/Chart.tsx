import React, { useEffect } from 'react';
import { VictoryChart, VictoryBar, VictoryPolarAxis, VictoryTheme } from 'victory';
import { IChartFCProps } from '../types';

const Chart: React.FC<IChartFCProps> = (props: Readonly<IChartFCProps>) => {
	const data = props?.data;

	useEffect(() => {
		console.log('typeof financial', typeof data.securitiesRating?.financial);
		console.log('typeof fitness', typeof data.securitiesRating?.fitness);
		console.log('typeof dietary', typeof data.securitiesRating?.dietary);
		console.log('typeof social', typeof data.securitiesRating?.social);
		console.log('typeof professional', typeof data.securitiesRating?.professional);
		

	}, [data]);

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
