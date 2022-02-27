import React, { useState } from 'react';
import Scatterplot from './Scatterplot';

import SplotCanvas from './SplotCanvas';



const Survey = (props) => {

	const column = props.column;
	const projectionNum = props.projectionNum;


	// generate a array of projectionNum with random order
	const projectionOrder = [];
	for (let i = 0; i < projectionNum; i++) projectionOrder.push(i); 
	projectionOrder.sort(() => Math.random() - 0.5);

	const [projectionScores, setProjectionScores] = useState(Array(projectionNum).fill(-1));
	const [currProjIdx, setCurrProjIdx] = useState(0);

	return (
		<div>
			<Scatterplot
				size={props.mainViewSize}
				isLabel={props.isLabel}
				projectionIdx={projectionOrder[currProjIdx]}
				radius={props.mainViewRadius}
			/>
			SURVEY
		</div>
	)

};

export default Survey;