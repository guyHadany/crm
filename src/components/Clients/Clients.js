import React, { Component } from 'react';
import Client from './Client';
import Filter from './Filter';
import Header from './Header';


class Clients extends Component {
    render() {
        return (
            <div className='clients'>
                <Filter />
                <Header />
                {this.props.state.map((c, i) => <Client key={i} client={c} />)}
            </div>
        );
    }
}

export default Clients;