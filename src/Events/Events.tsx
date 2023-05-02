import React, { useState } from "react";
import RedBanner from "../components/RedBanner";
import EventsBg from "../assets/red_banner.jpg"
import Event1 from "../assets/event1.jpg"
import Event2 from "../assets/event2.png"

const Events: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <div
        className="banner"
        style={{
          backgroundImage: `url(${EventsBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "350px",
        }}
      >
        <h1
          style={{
            color: "white",
            textAlign: "center",
            marginBottom: "60px",
            paddingTop: "80px",
            fontSize: 50,
          }}
        >
          Venture Capital Summit 2023
        </h1>
        <h3 style={{ textAlign: "center", fontSize: 25}}>
          03 MAY 2023 | 6:30 pm to 10:30 pm
        </h3>
      </div>
      <RedBanner bannerText="Events"></RedBanner>

      <div style={{ display: "flex" }}>
        <div
          className="box"
          style={{
            height: "500px",
            width: "400px",
            marginTop: "30px",
            marginLeft: "30px",
            flexWrap: "wrap",
          }}
        >
          <div
            className="inner-box"
            style={{
              height: "350px",
              backgroundImage: `url(${Event1})`,
              backgroundSize: "cover",
            }}
          ></div>
          <div
            className="inner-box"
            style={{
              backgroundColor: "#F0475F",
              height: "150px",
            }}
          >
            <h4
              className="font-semibold"
              style={{
                paddingBottom: "10px",
                paddingLeft: "15px",
                paddingRight: "15px",
                color: "white",
                textAlign: "center",
                paddingTop: "30px",
              }}
            >
              Navigating Financial Turbulence<br></br> with Mr. Koh
            </h4>
            <h6
              style={{
                color: "white",
                textAlign: "center",
              }}
            >
              10th February 2023
            </h6>
          </div>
        </div>
        <div
          className="box"
          style={{
            height: "500px",
            width: "400px",
            marginTop: "30px",
            marginLeft: "30px",
            flexWrap: "wrap",
          }}
        >
          <div
            className="inner-box"
            style={{
              height: "350px",
              backgroundImage: `url(${Event2})`,
              backgroundSize: "cover",
            }}
          ></div>
          <div
            className="inner-box"
            style={{
              backgroundColor: "#F0475F",
              height: "150px",
            }}
          >
            <h4
              className="font-semibold"
              style={{
                paddingBottom: "10px",
                paddingLeft: "15px",
                paddingRight: "15px",
                color: "white",
                textAlign: "center",
                paddingTop: "30px",
              }}
            >
              Investing 101 by Endowus
            </h4>
            <h6
              style={{
                color: "white",
                textAlign: "center",
              }}
            >
              28th November 2022
            </h6>
          </div>
        </div>
      </div>
      <div style={{ height: "300px" }}></div>
    </>
  );
};

export default Events;
