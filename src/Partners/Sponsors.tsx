import React from "react";
import { useState } from "react";
import DBSLogo from "../assets/DBS logo.jpg"
import StrategicPartners from "../assets/Strategic_Partners.png"

const Sponsors: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [message, setMessage] = useState("");

  const handleButtonClick = () => {
    setShowPopup(true);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailBody = `Name: ${name}\nEmail: ${email}\nCompany Name: ${companyName}\nMessage: ${message}`;
    const mailtoUrl = `mailto:marketwatch@club.sutd.edu.sg?subject=Partner Inquiry&body=${encodeURIComponent(
      emailBody
    )}`;
    window.location.href = mailtoUrl;
    // Handle form submission logic here
    // You can access form data from the state variables: name, email, companyName, message
    // Close the popup after successful form submission
    setShowPopup(false);
  };

  const handleCloseClick = () => {
    setShowPopup(false);
  };

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
        <h1
          className="text-white"
          style={{ fontWeight: "bold", fontSize: "350%" }}
        >
          Our Partners
        </h1>
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
          onClick={handleButtonClick}
        >
          Become our Partner
        </button>
      </div>
      {showPopup && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden", // Added to hide horizontal scrollbar
          }}
        >
          <form
            style={{
              backgroundColor: "white",
              height: "400px",
              width: "600px",
              padding: "20px",
              borderRadius: "10px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            onSubmit={handleFormSubmit}
          >
            <button
              style={{
                alignSelf: "flex-end",
                border: "none",
                backgroundColor: "transparent",
                cursor: "pointer",
                fontSize: "20px",
              }}
              onClick={handleCloseClick}
            >
              x
            </button>
            <h2>Become Our Partner</h2>

            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              size={21}
              style={{ border: "1px solid #ECB8B5" }}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              size={21}
              style={{ border: "1px solid #ECB8B5" }}
            />
            <input
              type="text"
              placeholder="Company Name"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              size={21}
              style={{ border: "1px solid #ECB8B5" }}
            />
            <textarea
              placeholder="Message"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              size={21}
              style={{ border: "1px solid #ECB8B5" }}
            />
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
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      )}
      <div
        style={{
          paddingTop: "30px",
          marginLeft: "30px",
          marginRight: "30px",
        }}
      >
        <h2 style={{ color: "#562D2D" }}>Sponsors</h2>
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
            src={DBSLogo}
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
        <h2 style={{ color: "#562D2D" }}>Strategic Partners</h2>
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
          src={StrategicPartners}
          alt="Strategic Partners"
          style={{ height: "400px" }}
        />
      </div>
    </>
  );
};

export default Sponsors;
