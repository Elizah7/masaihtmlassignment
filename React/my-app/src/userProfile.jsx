import React, { useState, useEffect } from "react";
import UserCard from "./useCard";

const UserProfiles = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) throw new Error("Failed to fetch users");
        const data = await res.json();
        setUsers(data);
        setFilteredUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    setFilteredUsers(
      users.filter(user =>
        user.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, users]);

  if (loading) return <h2 style={{ textAlign: "center" }}>Loading users...</h2>;
  if (error) return <h2 style={{ textAlign: "center", color: "red" }}>{error}</h2>;

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>User Profiles</h1>
      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={{
          padding: "8px",
          marginBottom: "20px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          width: "250px"
        }}
      />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "10px"
        }}
      >
        {filteredUsers.map(user => (
          <UserCard
            key={user.id}
            name={user.name}
            email={user.email}
            city={user.address.city}
          />
        ))}
      </div>
    </div>
  );
};

export default UserProfiles;
