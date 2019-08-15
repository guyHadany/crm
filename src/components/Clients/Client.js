import React, { Component } from 'react';
const moment = require ('moment')

class Client extends Component {
    render() {
        let client = this.props.client
        let firstName = client.name.split(' ')[0]
        let lastName = client.name.split(' ')[1]

        return (
            <div className='client'>
                <div>{firstName}</div>
                <div>{lastName}</div>
                <div>{client.country}</div>
                <div>{moment(client.firstContact).format('L')}</div>
                <div>{client.emailType ? client.emailType : 'Not sent!'}</div>
                <div>{client.sold ? <i className="fas fa-check"></i> : <i className="fas fa-times"></i>}</div>
                <div>{client.owner}</div>
            </div>
        );
    }
}

export default Client;