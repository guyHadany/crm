import React, { Component } from 'react';

class Input extends Component {

    constructor() {
        super()
        this.state = {
          names: ''
        }
      }

      handleInput=(e)=>{
        const value = e.target.value
        this.setState({names : value})
        this.props.getName(value)
        }

    updateClient = () => {
        this.props.updateClient(this.state.names)
    }

    render() {
        return (
            <div>
               <input id='input' list="browsers" name="browser" placeholder="Search Name..." onInput={this.handleInput}></input>
               <datalist id="browsers">
               {this.props.clients.filter( c => c.name.toLowerCase().includes(this.state.names.toLowerCase())).map((m, i) =><option key={i}> {m.name} </option>)}
               </datalist>
           </div>
        );
    }
}

export default Input;