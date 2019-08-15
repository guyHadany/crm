import React, { Component } from 'react';

class Badge4 extends Component {
    render() {
        return (
            <div className='badge' id='monthClient'>
                    <div className='iconBudge'><i className='fas fa-globe-africa'></i></div>
                    <div className='numberBudge'>{this.props.hottestCountry}</div>
                    <div className='textBudge'>Hottest Country</div>
                </div>
        );
    }
}

export default Badge4;