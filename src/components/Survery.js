import React, { useState } from 'react';
import Scatterplot from './Scatterplot';

import "./Survey.css"


const Survey = (props) => {

	const column = props.column;
	const projectionNum = props.projectionNum;


	// generate a array of projectionNum with random order
	const projectionOrder = [];
	for (let i = 0; i < projectionNum; i++) projectionOrder.push(i); 
	projectionOrder.sort(() => Math.random() - 0.5);


	// generate a base array to construct a grid
	const baseArray = [];
	for (let i = 0; i < parseInt(projectionNum / column) + 1; i++) {
		const baseCurrArray = [];
		for (let j = 0; j < column; j++) {
			if (i * column + j < projectionNum) {
				baseCurrArray.push(true);
			}
			else {
				baseCurrArray.push(false);
			}
		}
		baseArray.push(baseCurrArray);
	}


	// state info
	const [projectionScores, setProjectionScores] = useState(Array(projectionNum).fill(-1));
	const [currProjIdx, setCurrProjIdx] = useState(0);

	return (
		<div>
			<div style={{display: "flex"}}>
				<div>
					<Scatterplot
						size={props.mainViewSize}
						isLabel={props.isLabel}
						projectionIdx={projectionOrder[currProjIdx]}
						radius={props.mainViewRadius}
					/>
					<div style={{display: "flex", justifyContent: "center"}}>
						<button>Prev</button>
						<div style={{display: "flex"}}>
							<div className="radioScore"><input type="radio" id="1" name="score" value="1"></input> 1 </div>
							<div className="radioScore"><input type="radio" id="2" name="score" value="2"></input> 2 </div>
							<div className="radioScore"><input type="radio" id="3" name="score" value="3"></input> 3 </div>
							<div className="radioScore"><input type="radio" id="4" name="score" value="4"></input> 4 </div>
							<div className="radioScore"><input type="radio" id="5" name="score" value="5"></input> 5 </div>
						</div>
						<button>Next</button>
					</div>
					
				</div>
				<div>
					{baseArray.map((row, i) => {
						return (
							<div key={i} style={{display: "flex"}}>
								{row.map((cell, j) => {
									if (cell) {
										return (
											<div key={`${i}-${j}`} style={{margin: props.gridMargin}}>
											<Scatterplot
												size={props.gridCellSize}
												isLabel={props.isLabel}
												projectionIdx={projectionOrder[i * column + j]}
												radius={props.gridCellRadius}
											/>
											</div>
										)
									}
								})}
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)

};

export default Survey;