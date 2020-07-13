import {connect as MQTT} from 'mqtt';


const connectionPort = () => {
  return (typeof window.orientation !== 'undefined') || (navigator.userAgent.indexOf('IEMobile') !== -1) ? '8080': '8081'
}

export const connectMQTT = () => async (dispatch) => {
  dispatch({type: 'PENDING'});
  const client = await MQTT.connect(`wss://test.mosquitto.org:8081`)
  client.on('connect', () => {
    console.log('mqtt connected',client);
    client.subscribe(['reactAutomation', 'reactAutomation/retrive','reactAutomation/memory'])
    client.on('message',(topic, message) => {
    console.log(topic)
      switch(topic){
        case 'reactAutomation/retrive':
          dispatch(updateGraph(JSON.parse(message)));
          break;
        case 'reactAutomation/memory':
          dispatch(updateMemory(message.toString()));
          break;
        default:
      };
    })

    dispatch({type: 'CONNECTED', payload: client});
  })
}

export const updateMemory = (memory) => {
  return {type: 'UPDATED', payload: memory}
}

export const updateGraph = (value) => {
  return {type: 'GRAPH', payload: value}
}
