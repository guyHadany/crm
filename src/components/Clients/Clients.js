import React, { Component } from 'react';
import Client from './Client';
import Filter from './Filter';
import Header from './Header';


class Clients extends Component {
    constructor() {
        super()
        this.state = {
            category: 'name',
            input: '',
            lowerIndex: 0,
            higherIndex: 20

        }
    }

    paginate = (e) => {
        let sign = e.target.outerText
        let changeBy = (sign === "<" ? -20 : 20)
        if (changeBy === -20 && this.state.lowerIndex === 0) { return }
        let lowerIndex = this.state.lowerIndex + changeBy
        let higherIndex = this.state.higherIndex + changeBy
        this.setState({
            lowerIndex,
            higherIndex
        })
    }

    filter = (input, category) => {
        this.setState({
            category,
            input
        })
    }

    render() {

        return (
            <div className='clients'>
                <Filter filter={this.filter} />
                <span> You have {this.props.clients.length} Clients</span>
                <div id="paginate-button">
                    <span onClick={this.paginate}>{"<"}</span><span> {this.state.lowerIndex}-{this.state.higherIndex} </span><span onClick={this.paginate}>{">"}</span>
                </div>
                <Header />
                {this.props.clients
                    .filter(c => c[this.state.category] === null ? null :
                        this.state.category === 'sold' ? c[this.state.category] === true :
                            c[this.state.category].toLowerCase().includes(this.state.input.toLowerCase()))
                    .filter(c => this.props.clients.indexOf(c) >= this.state.lowerIndex && this.props.clients.indexOf(c) < this.state.higherIndex)
                    .map((c, i) => <Client key={i} client={c} upatePopUpInfo={this.props.upatePopUpInfo} />)}
            </div>
        );
    }
}

export default Clients;