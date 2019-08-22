import React, { Component } from 'react';
import Update from './Update';
import Add from './Add';


class Actions extends Component {

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