import React from "react";
import axios from "axios";

import FriendsList from "./components/FriendsList";
import NewFriend from "./components/NewFriend";
import UpdateFriend from "./components/UpdateFriend";

import { Route, NavLink } from "react-router-dom";

import "./App.css";

//creating the main class component
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }
  //Getting data from the server
  componentDidMount() {
    axios
      .get([`http://localhost:5000/friends`])
      .then(response => {
        this.setState(() => ({ friends: response.data }));
      })
      .catch(error => {
        console.error("Server Error", error);
      });
  }

  //method to create new friends
  addFriend = friend => {
    console.log(friend);
    axios
      .post(`http://localhost:5000/friends`, friend)
      .then(response => {
        this.setState(() => ({ friends: response.data }));
      })
      .catch(error => {
        console.error("Server Error", error);
      });
  };

  //delete friend
  deleteFriend = id => {
    console.log(`current id: ${id}`);

    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(response => {
        this.setState(() => ({ friends: response.data }));
      })
      .catch(error => {
        console.error("Server Error", error);
      });
  };

  //Update friend
  updateFriend = (friend, friendId) => {
    console.log(`current id: ${friend}`);

    axios
      .put(`http://localhost:5000/friends/${friendId}`, friend)
      .then(response => {
        this.setState(() => ({ friends: response.data }));
        console.log("Your Friend has been updated!");
      })
      .catch(error => {
        console.error("Server Error", error);
      });
  };

  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-dark">
          <NavLink to="/" className="btn btn-primary">
            Home
          </NavLink>

          <NavLink to="/newfriend" className="btn btn-primary">
            Add New Friend
          </NavLink>
        </nav>
        <br />
        <Route
          exact
          path="/newfriend"
          render={props => <NewFriend {...props} addFriend={this.addFriend} />}
        />
        <Route
          exact
          path="/"
          render={props => (
            <FriendsList
              {...props}
              propsFriends={this.state.friends}
              deleteFriend={this.deleteFriend}
            />
          )}
        />
        <Route
          path="/update/:id"
          render={props => (
            <UpdateFriend
              {...props}
              updateFriend={this.updateFriend}
              propsFriends={this.state.friends}
            />
          )}
        />
      </div>
    );
  }
}
export default App;
