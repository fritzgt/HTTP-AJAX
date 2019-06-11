import React from "react";

export default function(props) {
  return (
    <form onSubmit={props.createNewFriend}>
      <input
        placeholder="Name"
        type="text"
        name="name"
        onChange={props.handleChange}
      />
      <input
        placeholder="Age"
        type="number"
        name="age"
        onChange={props.handleChange}
      />
      <input
        placeholder="email"
        type="text"
        name="email"
        onChange={props.handleChange}
      />
      <button type="submit">Add</button>
    </form>
  );
}
