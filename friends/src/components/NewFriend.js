import React from "react";

class NewFriend extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: "",
      email: ""
    };
  }

  //change handler
  handleChange = event => {
    // console.log("event name", event.target.name);
    // console.log("event value", event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    //clear input/state after submit
    this.setState({
      name: "",
      age: "",
      email: ""
    });
    this.props.addFriend({ ...this.state });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-group">
        <h1> Add a new Friend below</h1>
        <input
          placeholder="Name"
          type="text"
          name="name"
          onChange={this.handleChange}
          value={this.state.name}
        />
        <input
          placeholder="Age"
          type="number"
          name="age"
          onChange={this.handleChange}
          value={this.state.age}
        />
        <input
          placeholder="email"
          type="text"
          name="email"
          onChange={this.handleChange}
          value={this.state.email}
        />
        <button type="submit">Add</button>
      </form>
    );
  }
}

export default NewFriend;
