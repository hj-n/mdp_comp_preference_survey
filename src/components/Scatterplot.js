import React from 'react';
import SplotCanvas from './SplotCanvas';


const Scatterplot = (props) => {

	const size = props.size;
	const projectionIdx = props.projectionIdx;
	const isLabel = props.isLabel;

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


	return (
		<div>
			<SplotCanvas
				size={size}
				ld={ld}
				label={labelInfo}
				isLabel={isLabel}
				radius={props.radius}
			/>
		</div>
	)

};

export default Scatterplot;