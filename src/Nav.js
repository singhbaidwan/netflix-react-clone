import React, { useState, useEffect } from "react";
import "./Nav.css";
function Nav() {
  const [show, handleShow] = useState(false);

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     if (window.scrollY > 100) {
  //       handleShow(true);
  //     } else {
  //       handleShow(false);
  //     }
  //   });
  //   return () => {
  //     window.removeEventListener("scroll");
  //   };
  // }, []);

  return (
    <div className={`nav ${show && "nav--black"}`}>
      <img
        src="https://pngimg.com/uploads/netflix/netflix_PNG32.png"
        alt="Netflix Logo"
        className="nav--logo"
      />
      <img
        src="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg"
        alt="Avatar"
        className="nav--avatar"
      />
    </div>
  );
}

export default Nav;
