import React, { PureComponent } from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
    {
        name: '01/20', uv: 0, pv: 0, amt: 2400,
    },
    {
        name: '01/26', uv: 0, pv: 4, amt: 2210,
    },
    {
        name: '02/01', uv: 0, pv: 15, amt: 2290,
    },
    {
        name: '02/07', uv: 0, pv: 0, amt: 2000,
    },
    {
        name: '02/12', uv: 0, pv: 0, amt: 2181,
    },
    {
        name: '02/17', uv: 0, pv: 1, amt: 2500,
    },
    {
        name: '02/22', uv: 0, pv: 0, amt: 2100,
    },
];

export default class Chart extends PureComponent {
    render() {
        return (
            <>
            <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 20, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="category" dataKey="name"/>
                <YAxis type="number"/>
                {/*<Tooltip />*/}
                {/*<Legend />*/}
                <Line dataKey="pv" stroke="#8884d8" />
                <Line dataKey="uv" stroke="#82ca9d" />
            </LineChart>
            </>
        );
    }
}
