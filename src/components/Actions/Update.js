import React, { Component } from 'react';
import Input from './Input';

class Update extends Component {

    constructor() {
        super()
        this.state = {
          clientName: '',
          newOwner: '',
          newEmailType: ''
        }
      }

    checkDuplicate = (data, key) => {
        let obj = {}
        for (let d of data) {
            if (obj[d[key]]) {
                obj[d[key]] = d.owner
            } else {
                obj[d[key]] = d.amount
            }

        }
        return Object.entries(obj)
    }


    getName = (name) => {
        this.setState({clientName: name})
    }

    handleOwner = (e) => {
        let value = e.target.value
        this.setState({newOwner: value})
    }

    handleMail = (e) => {
        let value = e.target.value
        this.setState({newEmailType: value})
    }

    getClientId = () => {
        let client = this.props.clients.find(c => c.name.toLowerCase() === this.state.clientName.toLowerCase())  
        if(!client){
            return null
        }
        return client._id
    }

    updateOwner = () => {
        if(!this.getClientId()){
            return alert('not existed client!')
        }
        this.props.update(this.getClientId(), 'owner', this.state.newOwner)
    }

    updateEmailType = () => {
        this.props.update(this.getClientId(), 'emailType', this.state.newEmailType)
    }

    updateSale = () => {
        this.props.update(this.getClientId(), 'sold', true)
    }

    



    render() {
        return (
            <div>
                <Input clients={this.props.clients} getName={this.getName}/>
                <div>
                    <span>Transfer ownership to</span>
                    <select onInput={this.handleOwner}>
                    {this.checkDuplicate(this.props.clients, 'owner').map((c, i) => <option key={i}>{c[0]}</option>)}
                    </select>
                    <button onClick={this.updateOwner}>TRANSFER</button>
                </div>
                <div>
                    <span>Send email:</span>
                    <select onInput={this.handleMail}>
                    {this.checkDuplicate(this.props.clients, 'emailType').map((c, i) => <option key={i}>{c[0]}</option>)}
                    </select>
                    <button onClick={this.updateEmailType}>SEND</button>
                </div>
                <div>
                    <span>Declare sale!</span>
                    <button onClick={this.updateSale}>DECLARE</button>
                </div>
                <div></div>
            </div>
        );
    }
}

export default Update;