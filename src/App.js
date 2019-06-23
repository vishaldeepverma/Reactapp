import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  constructor() {
    super();
    console.log("constructor called: ", 1);
  }

 
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 1 },
      { id: 3, value: 2 },
      { id: 4, value: 3 },
      { id: 5, value: 0 }
    ]
  };
  render() {
    console.log("render called: ", 2);
    return (
      <div className="container-fluid">
        
        <Navbar counters={this.state.counters.filter((element)=>element.value>0)} />
        <Counters
          counters={this.state.counters}
          increment={this.increment}
          decrement={this.decrement}
          handleDelete={this.handleDelete}
          resetCounters={this.resetCounters}
        />
      </div>
    );
  }

  componentDidMount = () => {
    console.log("component did mount: ", 3);
  };
  resetCounters = () => {
    const counters = this.state.counters.filter(element => {
      element.value = 0;
      return element;
    });
    this.setState({ counters });
  };

  handleDelete = id => {
    console.log("element to delete has id : " + id);
    const counters = this.state.counters.filter(element => {
      if (element.id === id) return "";
      return element;
    });
    this.setState({ counters });
  };

  increment = key => {
    console.log("clicked", key);
    let counters = this.state.counters.filter(element => {
      if (element.id === key) {
        element.value++;
        return element;
      }
      return element;
    });
    this.setState({ counters });
  };
  decrement = key => {
    console.log("clicked", key);
    let counters = this.state.counters.filter(element => {
      if (element.id === key) {
        element.value--;
        return element;
      }
      return element;
    });
    this.setState({ counters });
  };
}

export default App;
