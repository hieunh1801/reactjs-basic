import React from "react";

const ListItemView = (item) => <li key={item.toString()}>{item}</li>;

const ListView = (props) => {
  const data = props.data ? props.data : [];
  return data.map((number) => ListItemView(number));
};

class App5 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listNumber: [1, 2, 3, 4, 5, 7, 8, 9, 10],
    };
  }
  render() {
    return (
      <div>
        <div>List Rendering</div>
        <ListView data={this.state.listNumber}></ListView>
      </div>
    );
  }
}
export default App5;
