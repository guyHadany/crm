import React, { Component } from 'react';
import {ToastsContainer, ToastsStore} from 'react-toasts';

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
            return ToastsStore.error("All fields must be filled")
        } else {
            this.props.addClient(
                {
                    name: `${this.state.Firstname} ${this.state.Surname}`,
                    country: this.state.Country,
                    owner: this.state.Owner,
                    firstContact: new Date(),
                    sold: false,
                    emailType: null,
                    email: ''
                }
            )
            ToastsStore.success("Add new client!")
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
                <div className="actionInputSections">First name:<input id="input" name="Firstname" placeholder="First name..." onInput={this.handleInput} required ></input></div>
                <div className="actionInputSections">Surname:<input id="input" name="Surname" placeholder="Surname..." onInput={this.handleInput} required ></input></div>
                <div className="actionInputSections">Country:<input id="input" name="Country" placeholder="Country..." onInput={this.handleInput} required ></input></div>
                <div className="actionInputSections">Owner:<input id="input" name="Owner" placeholder="Owner..." onInput={this.handleInput} required ></input></div>
                <div className="addButton" id='Button' onClick={this.addClient}>Add New Client</div>
            </div>
        );
    }
}

export default Add;