const UsersInfo = () => {
  const users = [
    {
      id: 1,
      name: "Muhammad Fahad",
      email: "fahad@example.com",
      role: "Admin",
    },
    { id: 2, name: "John Doe", email: "john.doe@example.com", role: "Editor" },
    {
      id: 3,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      role: "Viewer",
    },
    {
      id: 4,
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      role: "Admin",
    },
    {
      id: 5,
      name: "Bob Brown",
      email: "bob.brown@example.com",
      role: "Viewer",
    },
  ];

  return (
    <section className="users-info">
      <h2>Users Information</h2>
      <ul>
        {users.map(({id, name, email, role}) => (
          <li key={id}>
            <p>{name}</p>
            <p>{email}</p>
            <p>{role}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default UsersInfo;
