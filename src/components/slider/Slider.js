import React, {Component} from 'react';


const Slider = ({onInputChange, value}) => {
		
		return(
			<div>
				 <input onChange={onInputChange} type="range" min="1" max="100" value={value} className="slider" id="myRange"/>
			</div>
		)
	}
export default Slider;