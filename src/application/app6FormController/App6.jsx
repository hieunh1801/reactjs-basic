import React from "react";

class App6 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      essay: "default message",
    };
  }

  handleOnChangeEssay = (event) => {
    console.log(event.target.value);
    this.setState({ essay: event.target.value });
  };
  handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div>
        <div>Form Controll</div>
        <form onSubmit={this.handleOnSubmit}>
          <label> Essay: </label>
          <textarea
            type="text"
            value={this.state.essay}
            onChange={this.handleOnChangeEssay}
          ></textarea>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    );
  }
}

export default App6;
