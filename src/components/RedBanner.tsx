import React from "react";

const RedBanner = (props: { bannerText: string }) => {
  return (
    <div
      style={{
        backgroundColor: "#E55C56",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "50px 0px",
      }}
    >
      <h1 style={{ fontWeight: "bold", fontSize: "200%", color: "#FFFFFF" }}>
        {props.bannerText}
      </h1>
    </div>
  );
};

export default RedBanner;
