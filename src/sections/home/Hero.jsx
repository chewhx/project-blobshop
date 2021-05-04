import React from "react";
import { Card } from "react-bootstrap";

const HeroSection = () => {
  return (
    <div
      style={{
        position: "relative",
        height: "450px",
        backgroundImage:
          "url(https://preview.redd.it/3e3ash0i6x161.jpg?width=3840&format=pjpg&auto=webp&s=9595b7decaa8f0483663434412c91303e4831c97)",
        // image credits: https://www.reddit.com/r/wallpaper/comments/k2icnd/minimal_blobs_3840x2160/
        backgroundRepeat: " no-repeat",
        backgroundSize: "cover",
        backgroundPositionY: "center",
        marginBottom: "6rem",
      }}
    >
      <Card
        className="py-5 px-5 bg-light"
        style={{
          position: "absolute",
          bottom: "-70px",
          left: "25%",
          zIndex: "2",
          minWidth: "200px",
          width: "60%",
          maxWidth: "600px",
        }}
      >
        <p className="display-3">Colour essentials</p>
        <p>
          Locally sourced products, carefully picked with quality and freshness
          in mind.
        </p>
      </Card>
    </div>
  );
};

export default HeroSection;
