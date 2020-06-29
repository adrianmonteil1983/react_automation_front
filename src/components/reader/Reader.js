import React from 'react';
import {useSelector} from 'react-redux';
import "./Reader.css";

const Reader = (props) => {
  const status = useSelector(state => state.memory.lookUpTable);
  console.log(status, 'status');
  let image = '';
  status[props.address] === '1'?image='on': image='off';
  
  return(
    <div className="image">
      <img alt='valeur' src={`https://img.icons8.com/color/85/000000/light-${image}.png`}/>
    </div>
      
  );
}
export default Reader;