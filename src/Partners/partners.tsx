import React from "react";

const Sponsors: React.FC = () => {
  return (
    <>
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
        <h1 style={{ fontWeight: "bold", fontSize: "350%" }}>Our Partners</h1>
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
      <div
        style={{
          paddingTop: "30px",
          marginLeft: "30px",
          marginRight: "30px",
        }}
      >
        <h2 style={{ color: "#562D2D" }}>Platinum Sponsors</h2>
        <hr style={{ borderColor: "#562D2D" }} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "30px",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            height: "200px",
            width: "200px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="/DBS logo.jpg"
            alt="DBS Logo"
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          />
        </div>
      </div>
      <div
        style={{
          paddingTop: "30px",
          marginLeft: "30px",
          marginRight: "30px",
        }}
      >
        <h2 style={{ color: "#562D2D" }}>Strategic Sponsors</h2>
        <hr style={{ borderColor: "#562D2D" }} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "30px",
        }}
      >
        <img
          src="/Strategic_Partners.png"
          alt="Strategic Partners"
          style={{ height: "400px" }}
        />
      </div>
    </>
  );
};

export default Sponsors;
