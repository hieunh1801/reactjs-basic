import React from "react";

class App3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  click = (unit, event) => {
    console.log(event);
    this.setState((state) => ({
      count: state.count + unit,
    }));
  };
  render() {
    return (
      <div className="Application3">
        Handling Event
        <div>Count {this.state.count}</div>
        <button onClick={(e) => this.click(1, e)}>Plus 1</button>
        <button onClick={(e) => this.click(-1, e)}>Sub 1</button>
      </div>
    );
  }
}

export default App3;
