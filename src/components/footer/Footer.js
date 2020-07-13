import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';


const Footer = (props) => {
	return(
		<div id='footer'>
			<div id='light'className={props.classNameLight}>
				<Link to={{pathname:'/kitchen'}}>
					<img src="https://img.icons8.com/ios-filled/52/000000/lamp.png" alt='light'/>
				</Link>
			</div>
			<div id='TV'>
				<Link to='TV'className={props.classNameTV}>
					<img src="https://img.icons8.com/ios-filled/52/000000/music-video.png"alt='tv'/>
				</Link>
			</div>
		</div>	
	)
}

export default Footer;