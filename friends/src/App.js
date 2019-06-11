import React from "react";
import axios from "axios";

import FriendsList from "./components/FriendsList";
import NewFriend from "./components/NewFriend";

import "./App.css";

//creating the main class component
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      name: "",
      age: null,
      email: ""
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

  //change handler
  handleChange = event => {
    console.log("event name", event.target.name);
    console.log("event value", event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  //method to create new friends
  createNewFriend = e => {
    e.preventDefault();
    let newFriend = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    };
    axios.post("http://localhost:5000/friends", newFriend).then(response => {
      console.log(response);
      console.log(response.data);
    });
  };

  render() {
    return (
      <div className="App">
        <NewFriend
          createNewFriend={this.createNewFriend}
          handleChange={this.handleChange}
        />
        <FriendsList propsFriends={this.state.friends} />
      </div>
    );
  }
}
export default App;
