import React, { Component } from 'react';
import Badge1 from './Badges/Badge1';
import Badge2 from './Badges/Badge2';
import Badge3 from './Badges/Badge3';
import Badge4 from './Badges/Badge4';
let moment = require('moment')


class Badges extends Component {

    hottestCountry = () => {
        let breakdown = {}
        for (let c of this.props.clients) {
            if (breakdown[c.country]) {
                breakdown[c.country] += 1
            } else {
                breakdown[c.country] = 1
            }
        }
        let arr = Object.values(breakdown);
        let max = Math.max(...arr);
        let hottestCountry = Object.keys(breakdown).find(key => breakdown[key] === max);
        return hottestCountry
    }

    render() {

        let currentMonth = moment().format('L').split('/')[0]
        let currentMonthString = moment().format('LLL').split(' ')[0]
        let currentYear = moment().format('L').split('/')[2] - 1
        let newestClients = this.props.clients.filter(c => c.firstContact.split('-')[0] === currentYear.toString() && c.firstContact.split('-')[1] === currentMonth)
        let sentMail = this.props.clients.filter(c => c.emailType != null).length
        let outstanding = this.props.clients.filter(c => c.sold == false).length


        return (

            <div className='badgesSection'>
                <Badge1 newestClients={newestClients.length} currentMonthString={currentMonthString} />
                <Badge2 sentMail={sentMail} />
                <Badge3 outstanding={outstanding} />
                <Badge4 hottestCountry={this.hottestCountry()}/>
            </div>

        );
    }
}

export default Badges;