import React, { Component } from 'react';

class Add extends Component {

    constructor() {
        super()
        this.state = {
            Firstname: '',
            Surname: '',
            Country: '',
            Owner: '',
        }
    }

    capitalFirsChart(str) {
        return str.charAt(0).toUpperCase() + str.slice(1)
    }

    handleInput = async (e) => {
        const value = e.target.value
        let name = e.target.name
        this.setState({ [name]: this.capitalFirsChart(value) })
    }

    addClient = () => {
        if (this.checkValidation()) {
            return alert('Please fill in all the fields!')
        } else {
            this.props.addClient(
                {
                    name: `${this.state.Firstname} ${this.state.Surname}`,
                    country: this.state.Country,
                    owner: this.state.Owner
                }
            )
        }
    }

    checkValidation = () => {
        if (this.state.firstName === "" || this.state.Surname === "" || this.state.Country === "" || this.state.Owner === "") {
            return true
        } else {
            return false
        }
    }

    render() {
        return (
            <div>
                <div>First name:<input id="input" name="Firstname" placeholder="First name..." onInput={this.handleInput} required ></input></div>
                <div>Surname:<input id="input" name="Surname" placeholder="Surname..." onInput={this.handleInput} required ></input></div>
                <div>Country:<input id="input" name="Country" placeholder="Country..." onInput={this.handleInput} required ></input></div>
                <div>Owner:<input id="input" name="Owner" placeholder="Owner..." onInput={this.handleInput} required ></input></div>
                <button onClick={this.addClient}>Add Client</button>
            </div>
        );
    }
}

export default Add;