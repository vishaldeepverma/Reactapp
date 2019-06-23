import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { resetCounters, counters, increment, handleDelete,decrement } = this.props;
    if (counters.length === 0)
      return <h4>No counter component left</h4>;
    return (
      <div>
        <div class="row">
          <div class="col-xs-1">
            <button className="btn btn-primary m-2" onClick={resetCounters}>
              Reset
        </button>
          </div>
        </div>
        {counters.map(counter => {
          return (
            <Counter
              key={counter.id}
              value={counter.value}
              increment={increment}
              decrement={decrement}
              id={counter.id}
              handleDelete={handleDelete}
            />
          );
        })}
      </div>
    );
  }
}

export default Counters;
