import React from "react";

export default function(props) {
  return (
    <div>
      {props.propsFriends.map(friend => (
        <div key={friend.id}>
          <h1> {friend.name} </h1>
        </div>
      ))}
    </div>
  );
}
