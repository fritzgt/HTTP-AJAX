import React from "react";
import axios from "axios";

import FriendsList from "./components/FriendsList";

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
        this.setState(() => ({ friends: response.data }));
      })
      .catch(error => {
        console.error("Server Error", error);
      });
    // console.log(this.state.friends);
  }

  render() {
    return (
      <div className="App">
        <FriendsList propsFriends={this.state.friends} />
      </div>
    );
  }
}
export default App;
