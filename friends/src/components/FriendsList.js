import React from "react";

class FriendsList extends React.Component {
  constructor() {
    super();
    this.state = {
      id: {}
    };
  }

  handleChange = event => {
    this.setState({
      id: event.target.value
    });
  };

  deleteFriend = event => {
    event.preventDefault();
    console.log(`current event: ${this.state.id}`);
    this.props.deleteFriend(this.state.id);
  };

  render() {
    return (
      <div>
        {this.props.propsFriends.map(friend => (
          <div key={friend.id}>
            <h1> {friend.name} </h1>
            <form onSubmit={this.deleteFriend}>
              <button
                type="submit"
                name="id"
                value={friend.id}
                onClick={this.handleChange}
              >
                X
              </button>
            </form>
          </div>
        ))}
      </div>
    );
  }
}

export default FriendsList;
