# Controlled Components

### Input form

```jsx
class App6 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };

    this.handleOnChangeName = this.handleOnChangeName.bind(this);
    this.handleOnChangePassword = this.handleOnChangePassword.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }
  handleOnChangeName(event) {
    console.log();
    this.setState({ username: event.target.value });
  }
  handleOnChangePassword(event) {
    this.setState({ password: event.target.value });
  }
  handleOnSubmit(event) {
    event.preventDefault();
    console.log("On Submit", this.state);
  }
  render() {
    return (
      <div>
        <div>Form Controll</div>
        <form onClick={this.handleOnSubmit}>
          <label> Username: </label>
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleOnChangeName}
          ></input>

          <label> Password: </label>
          <input
            type="text"
            value={this.state.password}
            onChange={this.handleOnChangePassword}
          ></input>

          <input type="submit" value="Submit"></input>
        </form>
      </div>
    );
  }
}
```
