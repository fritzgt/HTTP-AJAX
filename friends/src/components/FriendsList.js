import React from "react";

export default function(props) {
  return (
    <div>
      {props.propsFriends.map(friends => (
        <h1> {friends.name} </h1>
      ))}
    </div>
  );
}
