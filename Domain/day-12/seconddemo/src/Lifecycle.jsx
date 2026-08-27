import React from "react";

class Lifecycle extends React.Component {
  constructor() {
    super();

    console.log("Constructor is initialized");
  }

  componentDidMount() {
    console.log("Component is mounted");
  }

  componentDidUpdate() {
    console.log("Component is updated");
  }

  componentWillUnmount() {
    console.log("Removing component");
  }

  render() {
    console.log("Component render started");

    return (
      <div>
        Checking All Lifecycle Methods
      </div>
    );
  }
}

export default Lifecycle;