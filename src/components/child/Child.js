import React, { Component } from "react";

class Child extends Component {
  // The child method foo
  foo() {
    alert("Hello world");
  }

  render() {
    return <div>Child content</div>;
  }
}

export default Child;
