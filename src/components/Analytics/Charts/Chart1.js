import React, { Component } from 'react';
import {
    ComposedChart,Label, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
    Legend,
} from 'recharts';



class Chart1 extends Component {

    render() {
        return (
            <ComposedChart
            layout="vertical"
            width={500}
            height={300}
            data={this.props.TopEmployees}
            margin={{
                top: 20, right: 20, bottom: 20, left: 20,
            }}
        >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis type="number">
            </XAxis>
            <YAxis dataKey="name" type="category" />
            <Tooltip />
            <Legend />
            <Bar dataKey="sales" barSize={20} fill="#413ea0" />
        </ComposedChart>
        );
    }

}

export default Chart1;