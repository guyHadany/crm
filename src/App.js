import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Clients from './components/Clients/Clients';
import Analytics from './components/Analytics/Analytics';
import Actions from './components/Actions/Actions';
import axios from 'axios';


class App extends Component {
  constructor() {
    super()
    this.state = {
      data: [],
    }
  }

  async componentDidMount() {
    this.getClients()
  }

  async getClients() {
    let response = await axios.get("http://localhost:5000/clients")
    this.setState({ data: response.data })
  }

  update = async (id, key, value) => {
    let obj = { id, key, value }
    await axios.put("http://localhost:5000/client", obj)
    this.getClients()
  }

  addClient = async (newClient) => {
    await axios.post("http://localhost:5000/client", newClient)
    this.getClients()
  }

  upatePopUpInfo = async (name, surname, country, clientID) => {
    await axios.put(`http://localhost:5000/client/${clientID}`, { name: `${name} ${surname}`, country })
    this.getClients()
  }

  deleteClient = async (clientID) => {
    await axios.delete(`http://localhost:5000/client/${clientID}`)
    this.getClients()
  }


  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route path="/" exact component={Home} />
          <Route path="/clients" exact render={() => <Clients clients={this.state.data} upatePopUpInfo={this.upatePopUpInfo} deleteClient={this.deleteClient}/>} />
          <Route path="/actions" exact render={() => <Actions clients={this.state.data} update={this.update} addClient={this.addClient} />} />
          <Route path="/analytics" exact render={() => <Analytics clients={this.state.data} />} />
        </div>
      </Router>
    );
  }
}

export default App;