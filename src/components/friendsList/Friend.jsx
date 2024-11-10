import { useState } from "react";

const Friends = () => {
  const [friends, setFriends] = useState(["Fahad", "Rafay", "Huzaifa"]);

  const [movie, setMovie] = useState({
    title: "DeadPool & Wolverine",
    ratings: 8,
  });

  const addFriend = () => {
    setFriends([...friends, "Talha"]);
  };

  const removeFriend = () => {
    setFriends(friends.filter((f) => f !== "Rafay"));
  };

  const updateFriendName = () => {
    setFriends(friends.map((f) => (f === "Fahad" ? "Muhammad Fahad" : f)));
  };

  const updateRating = () => {
    setMovie({...movie, ratings: 5})
  };

  return (
    <>
      {friends.map((friend) => (
        <li key={Math.random() * friends.length}>{friend}</li>
      ))}

      <button onClick={addFriend}>Add Friend</button>
      <button onClick={removeFriend}>Remove Friend</button>
      <button onClick={updateFriendName}>Update Friend Name</button>

      <h1>{movie.title}</h1>
      <h2>{movie.ratings}</h2>
      <button onClick={updateRating}>Update Rating</button>
    </>
  );
};
export default Friends;
