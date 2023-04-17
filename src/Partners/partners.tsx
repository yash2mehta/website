import React from "react";

const partners: React.FC = () => {
  return (
    <div
      style={{
        backgroundColor: "#E55C56",
        height: "300px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <h1>Our Partners</h1>
      <button
        style={{
          backgroundColor: "#ECB8B5",
          color: "#800000",
          padding: "10px",
          fontSize: "90%",
          border: "none",
          cursor: "pointer",
          borderRadius: "30px",
          marginTop: "20px",
        }}
      >
        Become our partner
      </button>
    </div>
  );
};

export default Sponsors;
