import React from "react";
// import { Link } from "react-router-dom";

class UpdateFriend extends React.Component {
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
      [event.target.name]: event.target.value,
      id: this.props.match.params.id
    });
  };

  //submit update
  handleSubmit = event => {
    event.preventDefault();
    //clear input/state after submit
    const friendId = this.props.match.params.id;
    console.log(friendId);
    this.setState({
      name: "",
      age: "",
      email: ""
    });
    this.props.updateFriend({ ...this.state }, friendId);
    this.props.history.push("/");
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="container">
        {/* {this.props.propsFriends.map(event => (
          <h4>{event.name}</h4>
        ))} */}

        <br />
        <h1>Edit current friend</h1>
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

export default UpdateFriend;
