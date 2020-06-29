import React from 'react';
import Command from '../../components/command/Command'
import volp from '../../icons/volpbig.png';
import volm from '../../icons/volmbig.png';
import appletv from '../../icons/appletv.png';
import Netflix from '../../icons/Netflix.png';
import videogame from '../../icons/videogame.png';
import up from '../../icons/upbig.png';
import down from '../../icons/downbig.png';
import left from '../../icons/leftbig.png';
import right from '../../icons/rightbig.png';
import Footer from '../../components/footer/Footer';

import './AvGrid.css';


const AvGrid = () =>{
	return(
		<div id='AvGrid'>
				<div id='numericpad' className='areaAV'>
					<button>1</button>
					<button>2</button>
					<button>3</button>
					<button>4</button>
					<button>5</button>
					<button>6</button>
					<button>7</button>
					<button>8</button>
					<button>9</button>
				</div>
				<div id='numericpad' className='areaAV'>
					<img className="key" alt='volplus' src={volp}/>
					<img className="key" alt='arrowup' src={up}/>
					<img className="key" alt='volminus' src={volm}/>
					<img className="key" alt='arrowleft' src={left}/>
					<button>0</button>
					<img className="key" alt='volplus' src={right}/>
					<div className=""></div>
					<img className="key" alt='volplus' src={down}/>
					<div className=""></div>	
				</div>
				<div id='source' className='areaAV'>
					<img className="key" alt='netflix' src={Netflix}/>
					<img className="key" alt='console' src={appletv}/>
					<img className="key" alt='appletv' src={videogame}/>
				</div>
				<div id='music' className='areaAV'>	
				</div>
				<div id='bottom'>
					<Footer classNameTV={'onHover'}/>
				</div>		
		</div>
	)

}

export default AvGrid;