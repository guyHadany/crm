import React, { Component } from 'react';
import Badges from './Badges';
import Charts from './Charts';


class Analytics extends Component {
    render() {
        return (
            <div>
                <Badges clients={this.props.clients}/>
                <Charts clients={this.props.clients}/>
            </div>
        );
    }
}

export default Analytics;