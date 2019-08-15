import React, { Component } from 'react';

class Badge2 extends Component {
    render() {
        return (
            
            <div className='badge' id='monthClient'>
                <div className='iconBudge'><i className='fas fa-envelope'></i></div>
                <div className='numberBudge'>{this.props.sentMail}</div>
                <div className='textBudge'>Emails Sent</div>
            </div>
        );
    }
}

export default Badge2;