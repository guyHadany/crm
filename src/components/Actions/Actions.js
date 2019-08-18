import React, { Component } from 'react';
import Update from './Update';
import Add from './Add';
import axios from 'axios';


class Actions extends Component {

    // update = (id, key, value) => {
    //     let obj = { id, key, value }
    //     axios.put("http://localhost:5000/client", obj)
    // }

    // addClient = (newClient) => {
    //     axios.post("http://localhost:5000/client", newClient)
    // }

    render() {
        return (
            <div className="actionSection">
                <div className="actionHeading">UPDATE</div>
                <Update clients={this.props.clients} update={this.props.update} />
                <br></br>
                <hr></hr>
                <div className="actionHeading">ADD CLIENT</div>
                <Add clients={this.props.clients} addClient={this.props.addClient} />
            </div>
        );
    }
}

export default Actions;