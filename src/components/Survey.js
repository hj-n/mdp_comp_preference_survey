import React, { useState } from 'react';
import Scatterplot from './Scatterplot';

import "./Survey.css"


const Survey = (props) => {

	const column = props.column;
	const projectionNum = props.projectionNum;


	const projectionOrder = props.projectionOrder;


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


	const onChangeScoreRadio = (score) => {
		return (e) => {
			const currScores = [...projectionScores];
			currScores[currProjIdx] = score;
			setProjectionScores(currScores);
		}
	}

	const onClickButton = (newProjIdx) => {
		return (e) => {
			if (newProjIdx === -1 || newProjIdx === projectionNum) {
				return;
			}
			setCurrProjIdx(newProjIdx);
		}
	}

	const isScoringFinished = () =>{
		return projectionScores.every(score => score !== -1);
	}

	const onClickSaveButton = (e) => {
		// change the order of projection scores to match the order of projectionOrder
		const newProjectionScores = [];
		for (let oIdx = 0; oIdx < projectionOrder.length; oIdx++) {
			// find index that have oIdx as value in projectionOrder
			
			const index = projectionOrder.indexOf(oIdx);
			// console.log(index, projectionScores);
			newProjectionScores.push(projectionScores[index]);

			// console.log(newProjectionScores)

			// newProjectionScores.push(projectionScores[projectionOrder[i]]);
		}

		(async () => {
			const fileName = props.isLabel ? "label.json" : "nolabel.json";
			const json = JSON.stringify(newProjectionScores);
			const blob = new Blob([json],{type:'application/json'});
			const href = await URL.createObjectURL(blob);
			const link = document.createElement('a');
			link.href = href;
			link.download = fileName;
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);

		})();
		

	}

	return (
		<div>
			<div style={{display: "flex"}}>
				<div>
					<Scatterplot
						size={props.mainViewSize}
						isLabel={props.isLabel}
						projectionIdx={projectionOrder[currProjIdx]}
						radius={props.mainViewRadius}
						makeScoreBar={false}
					/>
					<div style={{display: "flex", justifyContent: "center"}}>
						<button onClick={onClickButton(currProjIdx - 1)}>Prev</button>
						<div style={{display: "flex"}}>
							{/* Convert below radio code to for-loop form */}
							{[1, 2, 3, 4, 5].map((score) => {
								return (
									<div className="radioScore" key={score}>
										<input type="radio" id={score} name="score" value={score} 
													checked={projectionScores[currProjIdx] === score}
													onChange={onChangeScoreRadio(score)}
										></input> {score} 
								</div>)
							})}
						</div>
						<button onClick={onClickButton(currProjIdx + 1)}>Next</button>
					</div>
					<div style={{display: "flex", justifyContent: "center"}}>
						<button style={{ width: 200}} disabled={!isScoringFinished()} onClick={onClickSaveButton}>Save the result!!</button>
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
												isCurr={currProjIdx === i * column + j ? true: false}
												score={projectionScores[i * column + j]}
												setCurrProjIdx={setCurrProjIdx}
												idx={i * column + j}
												makeScoreBar={true}
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