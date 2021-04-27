import React from "react";

import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
	const dataPointValue = props.dataPoints.map(
		(dataPoint) => dataPoint.value
	);
	const totalMaximun = Math.max(...dataPointValue);

	return (
		<div className='chart'>
			{props.dataPoints.map((dataPoints) => (
				<ChartBar
					key={dataPoints.label}
					value={dataPoints.value}
					maxValue={totalMaximun}
					label={dataPoints.label}
				/>
			))}
		</div>
	);
};

export default Chart;
