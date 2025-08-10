import React, { useState, useEffect } from "react";

const DailyQuote = () => {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchQuote = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();
      setQuote(data);
    } catch (error) {
      console.error("Error fetching quote:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
    const interval = setInterval(fetchQuote, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
        padding: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        fontFamily: "Arial, sans-serif"
      }}
    >
      <h1>Daily Quote Generator</h1>

      {loading ? (
        <div style={{ margin: "20px", fontSize: "18px" }}>⏳ Loading...</div>
      ) : (
        <blockquote
          style={{
            fontSize: "20px",
            fontStyle: "italic",
            textAlign: "center",
            maxWidth: "600px"
          }}
        >
          “{quote?.content}”
          <footer style={{ marginTop: "10px", fontWeight: "bold" }}>
            — {quote?.author}
          </footer>
        </blockquote>
      )}

      <button
        onClick={fetchQuote}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        Get New Quote
      </button>
    </div>
  );
};

export default DailyQuote;
