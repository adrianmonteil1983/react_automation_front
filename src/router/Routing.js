import React from 'react';
import App from '../App';
import { Provider } from 'react-redux';
import { Route, Link, BrowserRouter as Router} from 'react-router-dom';
import Home from '../components/home/Home';
import GraphGrid  from '../containers/graphgrid/GraphGrid';
import AvGrid from '../containers/avgrid/AvGrid';
import LightGrid from '../containers/lightgrid/LightGrid';
import WeatherGrid from '../containers/weathergrid/WeatherGrid';

const Routing = ({store}) => {
  return(
    <Provider store={store}>   
      <Router >
        <Link to='/'> <Home/> </Link>
          <>
            <Route exact path="/" component={App}/>
            <Route path="/kitchen" render={(props) => <LightGrid/>}/>
            <Route path="/bedroom" render={(props) => <LightGrid/>}/>
            <Route path="/livingroom" render={(props) => <LightGrid/>}/>
            <Route path="/bathroom"render={(props) => <LightGrid/>}/>
            <Route path="/weather" component={WeatherGrid}/>
            <Route path="/graph" render={(props) => <GraphGrid/>}/>
            <Route path="/TV" component={AvGrid}/>
          </>
      </Router> 
    </Provider> 
  )
} 

export default Routing;