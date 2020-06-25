import React from "react";

// function App1(props) {
//   console.log(props);
//   return (
//     <div className="App1">
//       <div className="Header">
//         This is {props.title ? props.title : "Default Name"}
//       </div>
//     </div>
//   );
// }

class App1 extends React.Component {
  render() {
    return (
      <div className="App1">
        <div className="Header">This is {this.props.title}</div>
      </div>
    );
  }
}
export default App1;
