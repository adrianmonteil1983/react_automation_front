import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { connectMQTT } from '../../action/actions';
import Graph from '../../components/graph/Graph';
import './GraphGrid.css';


const GraphGrid = () => {
  const dispatch = useDispatch();
  const mqttClient = useSelector((state) => state.mqttConnection.mqttClient);
  
  let interval = null;

  if (performance.navigation.type === 1 && mqttClient.connected) {
    clearInterval(interval);
  } 

  useEffect(() => {
    if(!mqttClient.connected){
      dispatch(connectMQTT());
    }else if(mqttClient.connected){
      mqttClient.publish('reactAutomation/getDataGraph');
      interval = setInterval(() => mqttClient.publish('reactAutomation/getDataGraph'),5000);
      //mqttClient.publish('reactAutomation/dataGraph');
    }
  },[mqttClient])

  useEffect(() => {
    if(mqttClient.connected && 'reactAutomation/retrive' in mqttClient._resubscribeTopics){
      return() => {console.log('clear graph');clearInterval(interval)};
    } 
  })

  return(
    <div id='chart'>
      <Graph/>
    </div>
  )
}

export default GraphGrid;