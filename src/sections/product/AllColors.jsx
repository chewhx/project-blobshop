import React, { useState } from "react";
import { Nav } from "react-bootstrap";

// Sections
import BootstrapColors from "./BootstrapColors";
import AppleColors from "./AppleColors";
import UserColors from "./UserColors";

const SectionLinks = () => {
  const [section, setSection] = useState();
  return (
    <>
      <Nav className="py-4" activeKey="/bootstrap">
        <Nav.Item>
          <Nav.Link active onClick={() => setSection("Bootstrap")}>
            <h4>Bootstrap</h4>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => setSection("AppleUI")}>
            <h4>Apple UI</h4>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => setSection("User")}>
            <h4>User</h4>
          </Nav.Link>
        </Nav.Item>
      </Nav>
      {section === "Bootstrap" ? (
        <BootstrapColors />
      ) : section === "AppleUI" ? (
        <AppleColors />
      ) : section === "User" ? (
        <UserColors />
      ) : (
        <BootstrapColors />
      )}
    </>
  );
};

export default SectionLinks;
