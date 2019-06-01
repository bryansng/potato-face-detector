import React from 'react';
import './FaceBoxes.css';

const FaceBoxes = ({ regions }) => {
	return (
		<div className="bounding-box-container">
			{
				regions.map((region, i) => {
					console.log(region);
					const boxie = region.region_info.bounding_box;
					console.log(boxie);
					return (typeof region !== undefined) ?
					(
						<div
							key={i}
							className="bounding-box"
							style={{
								top:boxie.top_row*100+"%", 
								bottom:100-boxie.bottom_row*100+"%", 
								right:100-boxie.right_col*100+"%", 
								left:boxie.left_col*100+"%"}}
							>
						</div>
					) :
					<div key={i}></div>
				})
			}
		</div>
	)
};

export default FaceBoxes;
