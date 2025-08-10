import React from "react";

const UserCard = ({ name, email, city }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "15px",
        borderRadius: "8px",
        margin: "10px",
        backgroundColor: "#fff",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
      }}
    >
      <h3>{name}</h3>
      <p>Email: {email}</p>
      <p>City: {city}</p>
    </div>
  );
};

export default UserCard;
