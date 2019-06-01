import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
	return (
		<div>
			<p className="f3">
				{"This potato will detect faces on pictures. Give it a try."}
			</p>
			<div className="center">
				<div className="form w-60 center pa3 br3 shadow-5">
					<input
						className="f4 pa2 w-70"
						type="text"
						placeholder="Paste url of picture..."
						onChange={onInputChange}
					/>
					<button
						className="f4 grow link ph3 pv2 dib white bg-light-purple w-30 pointer"
						onClick={onButtonSubmit}>
						Detect
					</button>
				</div>
			</div>
		</div>
	)
};

export default ImageLinkForm;