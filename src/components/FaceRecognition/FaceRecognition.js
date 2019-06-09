import React from 'react';
import FaceBoxes from './FaceBoxes/FaceBoxes';

const FaceRecognition = ({ regions, imgUrl }) => {
	return (
		<div className="center">
			<div className="absolute mt2">
				<FaceBoxes regions={regions} />
				<img alt="" src={imgUrl} style={{width:"auto", height:"500px"}}/>
			</div>
		</div>
	)
};

export default FaceRecognition;
