import React, { useState } from "react";

const App = () => {
  const [activePage, setActivePage] = useState("Home");

  const navStyle = {
    display: "flex",
    gap: "15px",
    padding: "10px",
    backgroundColor: "#282c34",
    color: "white",
    cursor: "pointer",
  };

  const pageStyle = {
    padding: "20px",
    minHeight: "200px",
    backgroundColor: "#f9f9f9",
    border: "1px solid #ccc",
    marginTop: "10px",
  };

  const renderPage = () => {
    if (activePage === "Home") {
      return <h2>Welcome to Home</h2>;
    } else if (activePage === "About") {
      return <h2>About Us</h2>;
    } else if (activePage === "Contact") {
      return <h2>Contact Us</h2>;
    }
  };

  return (
    <div>
      {/* Navbar */}
      <nav style={navStyle}>
        <span onClick={() => setActivePage("Home")}>Home</span>
        <span onClick={() => setActivePage("About")}>About</span>
        <span onClick={() => setActivePage("Contact")}>Contact</span>
      </nav>

      {/* Page Content */}
      <div style={pageStyle}>{renderPage()}</div>
    </div>
  );
};

export default App;
