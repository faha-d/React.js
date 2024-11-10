import { useState } from "react";

const Friends = () => {
  const [friends, setFriends] = useState(["Fahad", "Rafay", "Huzaifa"]);
  
  const [movie, setMovie] = useState({
    title: "DeadPool & Wolverine",
    ratings: 8,
  });

  const [films, setFilms] = useState([
    { id: 1, title: "Black Panther" },
    { id: 2, title: "Venom" },
  ]);

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
    setMovie({ ...movie, ratings: 5 });
  };

  const updateFilm = () => {
    setFilms(
      films.map((m) => (m.id === 1 ? { ...m, title: "Carnage" } : m))
    );
  };

  return (
    <>
      <ul>
        {friends.map((friend) => (
          <li key={friend}>{friend}</li>
        ))}
      </ul>

      <button onClick={addFriend}>Add Friend</button>
      <button onClick={removeFriend}>Remove Friend</button>
      <button onClick={updateFriendName}>Update Friend Name</button>

      <h1>{movie.title}</h1>
      <h2>{movie.ratings}</h2>
      <button onClick={updateRating}>Update Rating</button>

      <ul>
        {films.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>

      <button onClick={updateFilm}>Update Film</button>
    </>
  );
};

export default Friends;
