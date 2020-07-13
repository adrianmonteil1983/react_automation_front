import React from 'react';
import { useSelector } from 'react-redux';
import { LineChart,ResponsiveContainer, Line, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';
const Graph = () => {
    const data = useSelector((state) => state.graph.graphTable);
    console.log(data)
    
    return(
        <ResponsiveContainer>
        <LineChart 
        data={data}
        margin={{
          top: 5, right: 40, left: 20, bottom: 5,
        }}>
        <CartesianGrid strokeDasharray="3 3" fill='#777'/>
        <XAxis dataKey="value" stroke="#000"/>
        <YAxis stroke="#000" type='number' domain={[0,250]} />
        <Tooltip/>
        <Line type="monotone" dataKey="value" stroke="#00CCB6" activeDot={{ r: 8 }} />
      </LineChart>
      </ResponsiveContainer> 
    )
}

export default Graph;