import React, {useRef} from 'react';
import SplotCanvas from './SplotCanvas';

import * as d3 from 'd3';


const Scatterplot = (props) => {

	const size = props.size;
	const rectSize = props.size * 0.2;
	const projectionIdx = props.projectionIdx;
	const isLabel = props.isLabel;
	const score = props.score;

	let metadata;
	let ld;
	if (isLabel) {
	  metadata = require(`../data/label/metadata_${projectionIdx}.json`);
		ld = require(`../data/label/ld_${projectionIdx}.json`);
	}
	else {
		metadata = require(`../data/no_label/metadata_${projectionIdx}.json`);
		ld = require(`../data/no_label/ld_${projectionIdx}.json`);
	}
	const labelInfo = require(`../data/${metadata.dataset}_label.json`);

	const svgRef = useRef(null);

	if (props.makeScoreBar) {

		d3.select(svgRef.current).selectAll("rect").remove();
		if (score > 0)
			d3.select(svgRef.current)
				.selectAll("rect")
				.data(new Array(score).fill(0))
				.enter()
				.append("rect")
				.attr("x", (d, i) => {
					return i * rectSize;
				})
				.attr("y", 0)
				.attr("width", rectSize)
				.attr("height", rectSize)
				.attr("fill", "pink")

	}

	


	return (
		<div onClick={() => { props.setCurrProjIdx(props.idx)}}>
			<SplotCanvas
				size={size}
				ld={ld}
				label={labelInfo}
				isLabel={isLabel}
				radius={props.radius}
				isCurr={props.isCurr}
			/>
			{props.makeScoreBar & 
				<svg
					width={size}
					height={rectSize}
					ref={svgRef}
				/>
			}
			
		</div>
	)

};

export default Scatterplot;