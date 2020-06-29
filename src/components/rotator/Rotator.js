import React, {Component} from 'react';
import './Rotator.css';


 

class Rotator extends Component {
	constructor(props){
		super(props);
		this.state = {
			mouse:{
				x: 0,
				y: 0,
			},
			angle: 0
		}
	}

	componentDidMount(){
		const button = document.querySelector(".rotator");
		console.log(button.getBoundingClientRect());
	}
	onSelect = (event) => {
		let angle = (Math.atan2(event.clientY - 570, event.clientX - 70) * 180 / Math.PI);
		this.setState({angle: angle});
		console.log(event.clientY, event.clientX, angle);
	}

	render(){

		return(
				<div className='rotator' onMouseMove={this.onSelect} style={{transform:`rotate(${this.state.angle}deg)`}}>
						<div className='insideRotator'>
						</div>
				</div>
		)
	}
			
	
}
export default Rotator;