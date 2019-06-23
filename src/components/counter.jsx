import React, { Component } from "react";

class Counter extends Component {
  render() {
    const { increment, id, handleDelete, value, decrement } = this.props;
    return (
      <div className="row">
        <div className="col-xl-1">
          <button className={this.getBadge(value)}>{this.format(value)}</button>
        </div>
        <div className="col-xl-3">
          <button className="btn btn-primary m-2" onClick={() => increment(id)}>
            +
          </button>
          <button
            className="btn btn-secondry m-2"
            disabled={value === 0?true:false}
            onClick={() => decrement(id)}
          >
            -
          </button>
          <button className="btn btn-danger" onClick={() => handleDelete(id)}>
            X
          </button>
        </div>
      </div>
    );
  }
  format=(value)=>{
    return value ===0?"Zero":value;
  }
  componentDidUpdate = (preProps, preState) => {
    console.log("preProps", preProps);
    console.log("preState", preState);
  };

  getBadge=(value)=>{
    return value === 0 ? "badge badge-warning" : "badge badge-primary"
  }
}

export default Counter;
