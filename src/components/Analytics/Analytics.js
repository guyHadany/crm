import React, { Component } from 'react';
import Badges from './Badges';
import Charts from './Charts';


class Analytics extends Component {
    render() {
        return (
            <div>
                <Badges clients={this.props.clients}/>
                <Charts clients={this.props.clients}/>
                {/* <i className="fas fa-chart-line"></i>
                <i className="fas fa-envelope"></i>
                <i className="fas fa-user"></i>
                <i className="fas fa-globe-africa"></i> */}
            </div>
        );
    }
}

export default Analytics;