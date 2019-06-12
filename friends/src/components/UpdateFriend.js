import React from "react";

export default function(props) {
  return (
    <div>
      {props.propsFriends.map(friend => (
        <form>
          <input
            placeholder="Age"
            type="text"
            name="age"
            onChange={props.updateFriend}
            value={friend.name}
          />
        </form>
      ))}
    </div>
  );
}
