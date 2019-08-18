import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Clients from './components/Clients/Clients';
import Analytics from './components/Analytics/Analytics';
import Actions from './components/Actions/Actions';
import data from './data.json';
import axios from 'axios';


class App extends Component {
  constructor() {
    super()
    this.state = {
      data: [],
    }
  }

  async componentDidMount() {
    let response = await axios.get("http://localhost:5000/clients")
    this.setState({ data: response.data })
  }

//   update = (id, key, value) => {
//     let obj = { id, key, value }
//     axios.put("http://localhost:5000/client", obj)
// }

update = async (id, key, value) => {
  let obj = { id, key, value }
  await axios.put("http://localhost:5000/client", obj)
  this.componentDidMount()
}

addClient = async (newClient) => {
  await axios.post("http://localhost:5000/client", newClient)
  this.componentDidMount()
}

upatePopUpInfo = async (name, surname, country, clientID) => {
  console.log(surname);
  console.log(name);
  console.log(country);
  console.log(clientID);
await axios.put(`http://localhost:5000/client/${clientID}`, { name: `${name} ${surname}`, country })
this.componentDidMount()
}


  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route path="/" exact component={Home} />
          <Route path="/clients" exact render={() => <Clients clients={this.state.data} upatePopUpInfo={this.upatePopUpInfo}/>} />
          <Route path="/actions" exact render={() => <Actions clients={this.state.data} update={this.update} addClient={this.addClient}/>} />
          <Route path="/analytics" exact render={() => <Analytics clients={this.state.data} />} />
        </div>
      </Router>
    );
  }
}

export default App;