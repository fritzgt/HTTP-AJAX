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
    // console.log(this.state.friends);
  }

  //method to create new friends
  addFriend = friend => {
    console.log(friend);
    axios.post(`http://localhost:5000/friends`, friend).then(response => {
      this.setState(() => ({ friends: response.data }));
      // console.log(response);
      // console.log(response.data);
    });
  };

  //delete friend
  deleteFriend = id => {
    console.log(`current id: ${id}`);

    axios.delete(`http://localhost:5000/friends/${id}`).then(response => {
      this.setState(() => ({ friends: response.data }));
      // console.log(response);
      // console.log(response.data);
    });
  };

  //Update friend
  updateFriend = (friend, friendId) => {
    console.log(`current id: ${friend}`);

    axios
      .put(`http://localhost:5000/friends/${friendId}`, friend)
      .then(response => {
        this.setState(() => ({ friends: response.data }));
        // console.log(response);
        // console.log(response.data);
      });
  };

  render() {
    return (
      <div className="App">
        <NavLink to="/" className="btn btn-primary">
          Home
        </NavLink>

        <h1> Friends React App</h1>

        <Route
          exact
          path="/"
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
