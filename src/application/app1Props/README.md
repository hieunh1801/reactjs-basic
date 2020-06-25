# How to using Props

```jsx
// CÁCH 1: FUNCTIONAL COMPONENT
function App1(props) {
  console.log(props);
  return (
    <div className="App1">
      <div className="Header">
        This is {props.title ? props.title : "Default Name"}
      </div>
    </div>
  );
}

// CÁCH 2: CLASS COMPONENT
class App1 extends React.Component {
  render() {
    return (
      <div className="App1">
        <div className="Header">
          This is {this.props.title ? this.props.title : "Default Name"}
        </div>
      </div>
    );
  }
}
```

- using

```jsx
// khi truyền thì tên props là title
<App1 title="Application 1"></App1>

// trường hợp missing props thì component vẫn chạy bình thường
// tuy nhiên nếu cần phải lấy props để tính toán thì lại là chuyện khác
```
