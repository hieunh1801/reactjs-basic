import React from "react";
const UserGreeting = () => <div>Welcome to My Application</div>;

const GuestGreeting = () => <div>Required Login</div>;

class App4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
    };
  }
  handleLoginClick = () => {
    this.setState((state) => ({
      isLogin: !state.isLogin,
    }));
  };
  render() {
    return (
      <div>
        <div>Conditional Rendering</div>
        <div>{this.state.isLogin ? UserGreeting() : GuestGreeting()}</div>
        <button onClick={() => this.handleLoginClick()}>Login</button>
      </div>
    );
  }
}

export default App4;
