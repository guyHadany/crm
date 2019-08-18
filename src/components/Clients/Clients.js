import React, { Component } from 'react';
import Client from './Client';
import Filter from './Filter';
import Header from './Header';


class Clients extends Component {
    constructor() {
        super()
        this.state = {
            category: 'owner',
            input: ''

        }
    }



    filter = (input, category) => {
        console.log(category)
        console.log(input)
       this.setState({
           category,
           input
       })
    }

    render() {

        return (
            <div className='clients'>
                <Filter filter={this.filter} value={this.state.input} />
                <Header />
                {this.props.clients.filter(c => c[this.state.category].toLowerCase().includes(this.state.input.toLowerCase())).map((c, i) => <Client key={i} client={c} upatePopUpInfo={this.props.upatePopUpInfo}/>)}
            </div>
        );
    }
}

export default Clients;