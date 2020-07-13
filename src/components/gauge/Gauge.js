import React, { Component } from 'react';
import Gauge from 'react-svg-gauge';

export default class App extends Component {
    render() {
        return (
            <div>
                <Gauge value={this.state.value} width={400} height={320} label="ELECTRIC" />
            </div>
        );
    }
}
