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
            highestThree.push({ name: topEmployee, sales: max })
            delete breakdown[topEmployee]
            arr = Object.values(breakdown)
            max = Math.max(...arr)
            topEmployee = Object.keys(breakdown).find(key => breakdown[key] === max)
        }
        return highestThree
    }

    countryChart = () => {

        let soldArray = this.props.clients.filter(c => c.sold)
        let countries = {}

        for (let c of soldArray) {
            if (countries[c.country]) {
                countries[c.country] += 1
            } else {
                countries[c.country] = 1
            }
        }

        let countriesArr = Object.entries(countries)
        let countriesSalesArr = countriesArr.map(c => { return { name: c[0], sales: c[1] } })
        return countriesSalesArr
    }

    salesSince = () => {

        let currentMonth = moment().format('L').split('/')[0]
        let currentYear = moment().format('L').split('/')[2] - 1
        let daysArr = this.props.clients.filter(c => c.firstContact.split('-')[1] === currentMonth && c.firstContact.split('-')[0] === currentYear.toString() && c.sold).map(c => moment(c.firstContact).format('L').split('/')[1])
        let days = {}

        for (let c of daysArr) {
            if (days[c]) {
                days[c] += 1
            } else {
                days[c] = 1
            }
        }
        let datesArr = Object.entries(days)
        let newDaysArr = datesArr.map(c => { return { day: c[0], sales: c[1] } })

        return newDaysArr
    }

    firstContact = () => {
        
    }

    render() {

        return (
            <div className="chartsSection">
                <div className="chart"><span className='chartTitle'>Top Employees</span>
               <Chart1 TopEmployees={this.TopEmployees()} />
                </div>
                <div className="chart"><span className='chartTitle'>Sales by Country</span>
                <Chart2 countriesSalesArr={this.countryChart()} />
                </div>
                <div className="chart"><span className='chartTitle'>Sales Since "last mounth"</span>
               <Chart3 salesSince={this.salesSince()}/>
                </div>
                <div className="chart"><span className='chartTitle'>Client Acquisition</span>
              <Chart4 />
                </div>
            </div>
        );
    }
}

export default Charts;