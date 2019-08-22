import React, { Component } from 'react';
import Popup from "reactjs-popup";
import { ToastsContainer, ToastsStore } from 'react-toasts';
const moment = require('moment')


class Client extends Component {

    constructor(props) {
        super(props)
        this.state = {
            updateName: props.client.name.split(' ')[0],
            updateSurname: props.client.name.split(' ')[1],
            updateCountry: props.client.country,
        }
    }

    updateClient = () => {
        console.log(this.state.updateName)
        this.props.upatePopUpInfo(this.state.updateName, this.state.updateSurname, this.state.updateCountry, this.props.client._id)
        return ToastsStore.success("Updated Client!")
    }
    handleInput = (e) => {
        const value = e.target.value
        const name = e.target.name
        this.setState({ [name]: this.capitalFirstChart(value) })
    }

    capitalFirstChart(str) {
        return str.charAt(0).toUpperCase() + str.slice(1)
    }

    deleteClient = () => {
        this.props.deleteClient(this.props.client._id)
        console.log(this.state.updateName)
    }

    render() {
        let client = this.props.client
        let firstName = client.name.split(' ')[0]
        let lastName = client.name.split(' ')[1]

        return (
            <Popup trigger={
                <div className="client" onClick={this.popUp}>
                    <div>{firstName}</div>
                    <div>{lastName}</div>
                    <div>{client.country}</div>
                    <div>{moment(client.firstContact).format('L')}</div>
                    <div>{client.emailType ? client.emailType : 'Not sent!'}</div>
                    <div>{client.sold ? <i className="fas fa-check"></i> : <i className="fas fa-times"></i>}</div>
                    <div>{client.owner}</div>
                </div>}
                modal>
                {close => (
                    <div className="modal">
                        <a className="close" onClick={close}>
                            &times;</a>
                        <div className="header"> Update Client </div>
                        <div className="content">
                            <div className="contentPopup"><span>Name:</span><input placeholder=" Update Name.." className="input" name="updateName" type="text" onInput={this.handleInput}></input></div>
                            <div className="contentPopup"><span>Surname:</span> <input placeholder=" Update Suname.." name="updateSurname" type="text" onInput={this.handleInput}></input></div>
                            <div className="contentPopup" ><span>country:</span> <input placeholder=" Update Country.." name="updateCountry" type="text" onInput={this.handleInput}></input></div>
                        </div>
                        <div className="actions">
                            <span id="Button" onClick={this.deleteClient} className="deleteButton"> Delete </span>
                            <span id="Button" onClick={this.updateClient} className="updateButton"> Update </span>
                        </div>
                        <ToastsContainer store={ToastsStore} />
                    </div>
                )}
            </Popup>
        )
    }
}

export default Client