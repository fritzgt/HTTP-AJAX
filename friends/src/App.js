import React from "react";
import axios from "axios";

// import FriendsList from "./components/FriendsList";

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
      .get("http://localhost:5000/friends")
      .then(response => {
        this.setState(() => ({ friends: response }));
      })
      .catch(error => {
        console.error("Server Error", error);
      });
  }

  render() {
    return (
      <div className="App">
        {/* <FriendsList propsFriends={this.state.friends} /> */}
        {this.state.friends.map(friend => (
          <h1>{friend.name}</h1>
        ))}
      </div>
    );
  }
}
export default App;
