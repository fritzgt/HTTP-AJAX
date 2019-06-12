import React from "react";
import axios from "axios";

import FriendsList from "./components/FriendsList";
import NewFriend from "./components/NewFriend";
import UpdateFriend from "./components/UpdateFriend";

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
  updateFriend = id => {
    console.log(`current id: ${id}`);

    axios.put(`http://localhost:5000/friends/${id}`).then(response => {
      this.setState(() => ({ friends: response.data }));
      // console.log(response);
      // console.log(response.data);
    });
  };

  render() {
    return (
      <div className="App">
        <h1> Friends React App</h1>
        <NewFriend addFriend={this.addFriend} />
        {/* <UpdateFriend
          updateFriend={this.updateFriend}
          propsFriends={this.state.friends}
        /> */}
        <FriendsList
          propsFriends={this.state.friends}
          deleteFriend={this.deleteFriend}
        />
      </div>
    );
  }
}
export default App;
