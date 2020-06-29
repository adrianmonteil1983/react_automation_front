const initialState = {
  Pending: false,
  mqttClient:{}
}

export const mqttConnection = (state = initialState, action = {}) => {
  switch(action.type){
    case 'PENDING':
      return Object.assign({}, state,{Pending: true})
    case 'CONNECTED':
      return Object.assign({}, state, {mqttClient: action.payload}, {Pending: false});
    default:
      return state
  }   
}

const initialStateMemory = {
  lookUpTable:''
}

export const memory = (state = initialStateMemory, action = {}) => {
  switch(action.type){
    case 'UPDATED':
      return Object.assign({}, state, {lookUpTable: action.payload});
    default:
      return state
  }   
}

const initialStateGraph = {
  graphTable:[]
}

export const graph = (state = initialStateGraph, action = {}) => {
  switch(action.type){
    case 'GRAPH':
      return Object.assign({}, state, {graphTable:action.payload});
    default:
      return state
  }   
}