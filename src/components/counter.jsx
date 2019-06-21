import React, { Component } from "react";

//every class extends counter class
class Counter extends Component {
  constructor() {
    super();
    console.log(this);
  }

  state = {
    count: 1,
    tags: ["tag 1", "tag 2", "tag 3", "tag 4", "tag 5"],
    style: {
      fontSize: "50px"
    }
  };
  //state of component

  //overding render method
  //for react component JSX used
  render() {
    return (
      <React.Fragment>
        <span className={this.getBadge()}>{this.formatCount()}</span>
        <button
          className="btn btn-primary"
          onClick={() => this.increment("name")}
        >
          Increment
        </button>
      </React.Fragment>
    );
  }

  increment = name => {
    console.log(name);
    this.setState({ count: this.state.count + 1 });
  };

  //conditional rendering
  renderTags = () => {
    if (this.state.tags.length === 0)
      return (
        <span className="badge badge-danger" style={this.state.style}>
          There are no tags
        </span>
      );
    return (
      <ul>
        {this.state.tags.map(tag => {
          return <li key={tag}>{tag}</li>;
        })}
      </ul>
    );
  };

  //return "Zero" if count is 0
  formatCount = () => {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  };

  //returns badge className a/c to count if count is 0 return warning else primary
  getBadge = () => {
    let className = "badge m-2 badge-";
    return (className += this.state.count === 0 ? "warning" : "primary");
  };
}

export default Counter;
