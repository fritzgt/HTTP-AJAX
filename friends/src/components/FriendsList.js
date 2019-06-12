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
      <div className="row">
        {this.props.propsFriends.map(friend => (
          <div className="col-sm-6" key={friend.id}>
            <div className="card">
              <div className="card-body">
                {/* content */}

                <h5 className="card-title">{friend.name}</h5>
                <p className="card-text">Age: {friend.age}</p>
                <p className="card-text"> {friend.email}</p>
                {/* end of content */}
                {/* Delete button */}
                <form onSubmit={this.deleteFriend}>
                  <button
                    href="#"
                    className="btn btn-danger"
                    type="submit"
                    name="id"
                    value={friend.id}
                    onClick={this.handleChange}
                  >
                    x
                  </button>
                  {/* End of Delete button */}
                </form>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default FriendsList;
