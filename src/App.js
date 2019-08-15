import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Clients from './components/Clients/Clients';
import Analytics from './components/Analytics/Analytics';
import Actions from './components/Actions/Actions';
import data from './data.json';
// import axios from 'axios';


class App extends Component {
  constructor() {
    super()
    this.state = {
      data: [],
    }
  }

  componentDidMount() {
    setTimeout(() => {
      let response = data
      this.setState({ data: response })}, 100)
  }

  render() {
    return (
      <Router>
        <div>
        <Navbar />
        <Route path="/" exact component={Home}/>
        <Route path="/clients" exact render={() => <Clients state={this.state.data}/>} />
        <Route path="/actions" exact render={() => <Actions  state={this.state.data}/>} />
        <Route path="/analytics" exact render={() => <Analytics state={this.state.data}/>}/>
        </div>
      </Router>
    );
  }
}

export default App;