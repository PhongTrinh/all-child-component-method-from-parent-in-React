import React, { Component } from "react";
import Child from "../child/Child";

class Parent extends Component {
  constructor(props) {
    super(props);
    // create the child instance using react createRef
    this.child = React.createRef();
  }

  handleClick = () => {
    // Call the child method foo
    this.child.current.foo();
  }

  render() {
    return (
      <div>
        <Child ref={this.child}/>
        <button onClick={this.handleClick}>Call foo</button>
      </div>
    );
  }
}

export default Parent;
