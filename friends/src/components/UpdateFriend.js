import React from "react";

class UpdateFriend extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      id: ""
    };
  }

  handleChange = event => {
    // console.log("event name", event.target.name);
    // console.log("event value", event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  updateFriend = () => {
    const correctFriend = this.props.propsFriends;
    correctFriend.map(friend => {
      if (friend.id === this.state.id) {
        this.setState({
          friends: friend
        });
      }
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.props.updateFriend}>
          <input
            placeholder="Name"
            type="text"
            name="name"
            onChange={this.handleChange}
            value={this.state.friends.name}
          />
          <input
            placeholder="id"
            type="number"
            name="id"
            onChange={this.handleChange}
            value={this.state.id}
          />
        </form>
      </div>
    );
  }
}

export default UpdateFriend;
