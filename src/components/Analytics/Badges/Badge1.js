import React, { Component } from 'react';

class Badge1 extends Component {
    render() {
        return (
            <div className='badge' id='monthClient'>
                    <div className='iconBudge'><i className='fas fa-chart-line'></i></div>
                    <div className='numberBudge'>{this.props.newestClients}</div>
                    <div className='textBudge'>New {this.props.currentMonthString} Clients</div>
                </div>
        );
    }
}

export default Badge1;