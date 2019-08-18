import React, { Component } from 'react';
import {
   LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
 } from 'recharts';
 
class Chart3 extends Component {
   render() {
     console.log(this.props.salesSince);
        return (
           <LineChart
             width={500}
             height={300}
             data={this.props.salesSince}
             margin={{
               top: 5, right: 30, left: 20, bottom: 5,
             }}
           >
             <CartesianGrid strokeDasharray="3 3" />
             <XAxis dataKey="day" />
             <YAxis />
             <Tooltip />
             <Legend />
             <Line type="monotone" dataKey="sales" stroke="#8884d8" activeDot={{ r: 8 }} />
             {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
           </LineChart>
         );
   }
}
export default Chart3;


