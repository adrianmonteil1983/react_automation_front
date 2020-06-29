import React,{Fragment,useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {connectMQTT} from '../../action/actions'

const Mqtt = () => {
  const dispatch = useDispatch();
  const mqttClient = useSelector((state) => state.mqttConnection.mqttClient);

  useEffect(() => {
    if(!mqttClient.connected){
      dispatch(connectMQTT())
      console.log('Mqtt is trying to connect')
    }
  },[])
  return(<Fragment/>) 
}

export default Mqtt;