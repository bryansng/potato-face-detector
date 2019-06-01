import React from 'react';
import './Logo.css';
import Tilt from 'react-tilt'
import brain from './brain.png';

const Logo = () => {
	return (
		<div className="ma3 mt1">
			<Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} >
				<div className="Tilt-inner center">
					<img alt="Logo" src={brain} style={{height:"100px"}} />
				</div>
			</Tilt>
		</div>
	)
};

export default Logo;
