import React, { Component } from 'react';
import {
   BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

class Chart2 extends Component {
   render() {
       return (
           <BarChart
               width={650}
               height={270}
               data={this.props.countriesSalesArr}
               margin={{
                   top: 40, right: 30, left: 20, bottom: 5,
               }}
           >
               <CartesianGrid strokeDasharray="3 3" />
               <XAxis dataKey="name" />
               <YAxis />
               <Tooltip />
               <Legend />
               <Bar dataKey="sales" fill="#82ca9d" />
           </BarChart>
       );
   }
}
export default Chart2;