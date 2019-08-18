import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <div className="nav"><Link to='/clients'>Clients</Link></div>
                <div className="nav"><Link to='/actions'>Actions</Link></div>
                <div className="nav"><Link to='/analytics'>Analytics</Link></div>
           </div>
        )
    }
}
export default Navbar