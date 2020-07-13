import React from 'react';
import { useSelector } from 'react-redux';
import './Command.css'

const Command = ({address, value, name}) => {
  const mqttClient = useSelector((state) => state.mqttConnection.mqttClient);
  return(
    <div className="keyCommand" onClick={() => mqttClient.publish('reactAutomation/sendCommand',[address,value].toString())}>
      {name}
    </div>
  )
}

export default Command;