import React, { Component } from 'react';
import Chart1 from './Charts/Chart1';
import Chart2 from './Charts/Chart2';
import Chart3 from './Charts/Chart3';
import Chart4 from './Charts/Chart4';
let moment = require('moment')


class Charts extends Component {

    TopEmployees = () => {
        let arr1 = this.props.clients.filter(c => c.sold)
        let breakdown = {}
        for (let c of arr1) {
            if (breakdown[c.owner]) {
                breakdown[c.owner] += 1
            } else {
                breakdown[c.owner] = 1
            }
        }
        let arr = Object.values(breakdown);
        let max = Math.max(...arr);
        let topEmployee = Object.keys(breakdown).find(key => breakdown[key] === max);
        let highestThree = []
        for (let i = 0; i < 3; i++) {
            highestThree.push({ name: topEmployee, sell: max })
            delete breakdown[topEmployee]
            arr = Object.values(breakdown)
            max = Math.max(...arr)
            topEmployee = Object.keys(breakdown).find(key => breakdown[key] === max)
        }
        return highestThree
    }

    salesSince = () => {
        let currentMonth = moment().format('L').split('/')[0]
        
        console.log(currentMonth)
    }

    render() {
        this.salesSince()
        return (
            <div>
                <Chart1 TopEmployees={this.TopEmployees()}/>
                <Chart2 TopEmployees={this.salesSince()}/>
                <Chart3 TopEmployees={this.TopEmployees()}/>
                <Chart4 TopEmployees={this.TopEmployees()}/>
            </div>
        );
    }
}

export default Charts;