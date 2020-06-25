import React from "react";
import { getUsers } from "./api-service";
export default class App7 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }
  componentDidMount = async () => {
    const data = await getUsers();
    this.setState({ users: await data });
  };
  render() {
    console.log(this.state);
    return <div>Call Api</div>;
  }
}
