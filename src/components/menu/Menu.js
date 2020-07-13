import React from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';


const Menu = () => {
	return(
			<div id='menu'>
			<div>
				<Link to={{pathname:'/kitchen'}}>
					<img src="https://img.icons8.com/ios-filled/125/000000/tableware.png" alt='tv' />
				</Link>
			</div>
			<div >
				<Link to='/bedroom'>
					<img src="https://img.icons8.com/ios-filled/125/000000/bedroom.png" alt='light'/>
				</Link>
			</div>
			<div >
				<Link to='/livingroom'>
					<img src="https://img.icons8.com/ios-filled/125/000000/sofa.png" alt='camera'/>
				</Link>
			</div>
			<div >
				<Link to='/bathroom'>
						<img src="https://img.icons8.com/ios-filled/125/000000/shower-and-tub.png" alt='temp'/>
				</Link>
			</div>
			<div >
				<Link to='/weather'>
					<img src="https://img.icons8.com/ios-filled/125/000000/temperature.png" alt='blinds'/>
				</Link>
			</div>
			<div >
				<Link to='graph'>
					<img src="https://img.icons8.com/ios-filled/125/000000/combo-chart.png" alt='conso'/>
				</Link>
			</div>
		</div>	
	)
}

export default Menu;