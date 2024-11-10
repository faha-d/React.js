import { useState } from "react";

const Friends = () => {
  const [friends, setFriends] = useState(["Fahad", "Rafay", "Huzaifa"]);

  const addFriend = () => {
    setFriends([...friends, "Talha"]);
  };

  const removeFriend = () => {
    setFriends(
      friends.filter((f) => {
        f !== "Rafay";
      })
    );
  };
  return (
    <>
      {friends.map((friend) => (
        <li key={Math.random() * friends.length}>{friend}</li>
      ))}

      <button onClick={addFriend}>Add Friend</button>
      <button onClick={removeFriend}>Remove Friend</button>
    </>
  );
};
export default Friends;
