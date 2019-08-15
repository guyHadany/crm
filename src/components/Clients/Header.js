import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className='header'>
                <div>FirstName</div>
                <div>Surname</div>
                <div>Country</div>
                <div>FirstContact</div>
                <div>Email</div>
                <div>Sold</div>
                <div>Owner</div>
            </div>
        );
    }
}

export default Header;