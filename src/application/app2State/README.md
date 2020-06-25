# How to use State

- define

```jsx
import React from "react";
class App2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }
  componentDidMount() {
    this.timeID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timeID);
  }
  tick() {
    this.setState({
      date: new Date(),
    });
  }
  render() {
    console.log(this);
    return (
      <div className="Application2">
        <div className="Header">ReactJS State 2</div>
        <div>{this.state.date.toLocaleTimeString()}</div>
      </div>
    );
  }
}
export default App2;
```

- using

```jsx
<App2></App2>
```

## Using State right way

1. Do Not Modify State Directly

```jsx
```
