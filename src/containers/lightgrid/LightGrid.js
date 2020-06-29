import React, { useEffect } from 'react';
import ErrorBoundary from '../../components/errorboundary/ErrorBoundary';
import Command from '../../components/command/Command';
import Reader from '../../components/reader/Reader';
import Footer from '../../components/footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { connectMQTT } from '../../action/actions';
import { camera_ip} from'../../keys';
//import Thermostat from '../../components/thermostat/Thermostat';

import './LightGrid.css';

const LightGrid = () => {
  const dispatch = useDispatch();
  const mqttClient = useSelector((state) => state.mqttConnection.mqttClient);
  let interval = null;

  if (performance.navigation.type === 1 && mqttClient.connected) {
    clearInterval(interval);
  } 

  useEffect(() => {
     if(!mqttClient.connected){
        dispatch(connectMQTT()) 
     }else if(mqttClient.connected){
        mqttClient.publish('reactAutomation/getDataMemory'); 
        interval = setInterval(() => mqttClient.publish('reactAutomation/getDataMemory'),1000);
     }
  },[mqttClient])

  useEffect(() => {
    if(mqttClient.connected && 'reactAutomation/memory' in mqttClient._resubscribeTopics){
      return() => { console.log('clear memory'); clearInterval(interval) };
    }  
  })
  
	return(
		<ErrorBoundary>
					<div id='lightGrid'>
						<div className='area'>
              <Command address={7} value={1} name={'on'}/>
              <Command address={7} value={0} name={'off'}/>
							<Reader address={0}/>
						</div>
						
            <div className='camera'>
              <iframe src={`${camera_ip}`} width='100%' height="100%" title="camera">
              </iframe>
						</div>
            <div className='area'>
              <Command address={6} value={1} name={'on'}/>
              <Command address={6} value={0} name={'off'}/>
							<Reader address={1}/>
						</div>
						<div id='bottom'>
							<Footer classNameLight='onHover'/>
						</div>
					</div>
		</ErrorBoundary>	
	)
}
		
export default LightGrid