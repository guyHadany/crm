import React, { Component } from 'react';
import {
    ComposedChart,Label, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
    Legend,
} from 'recharts';

const data = [
    {
        name: 'Page A', uv: 590, pv: 300, amt: 1400,
    },
    {
        name: 'Page B', uv: 868, pv: 400, amt: 1506,
    }
];



class Chart1 extends Component {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/shjsn5su/';

    render() {
        return (
            <ComposedChart
                layout="vertical"
                width={500}
                height={400}
                data={data}
                margin={{
                    top: 20, right: 20, bottom: 20, left: 20,
                }}
            >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis type="number">
                <Label value="Pages of my website" offset={0} position="insideBottom" />
                </XAxis>
                <YAxis dataKey="name" type="category" />
                <Tooltip />
                <Legend />
                {/* <Area dataKey="amt" fill="#8884d8" stroke="#8884d8" /> */}
                <Bar dataKey="pv" barSize={20} fill="#413ea0" />
                {/* <Line dataKey="uv" stroke="#ff7300" /> */}
            </ComposedChart>
        );
    }

}

export default Chart1;