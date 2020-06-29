import React from 'react';
import './App.css';
import Menu from './components/menu/Menu';
import Mqtt from './components/mqtt/Mqtt';

const App = () => {
  
  console.log('render app');
  return (
    <div className="App">
            <Menu/>
            <Mqtt/>
      </div>
  );
}


export default App;
