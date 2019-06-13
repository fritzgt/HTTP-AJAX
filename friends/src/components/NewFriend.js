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
      <form onSubmit={this.handleSubmit} className="container">
        <br />
        <h1>Add New Friend</h1>
        <br />
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Name</label>
          <div className="col-sm-10">
            <input
              placeholder="Name"
              type="text"
              name="name"
              onChange={this.handleChange}
              value={this.state.name}
              className="form-control"
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Age</label>
          <div className="col-sm-10">
            <input
              placeholder="Age"
              type="number"
              name="age"
              onChange={this.handleChange}
              value={this.state.age}
              className="form-control"
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">email</label>
          <div className="col-sm-10">
            <input
              placeholder="email"
              type="text"
              name="email"
              onChange={this.handleChange}
              value={this.state.email}
              className="form-control"
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

export default NewFriend;
