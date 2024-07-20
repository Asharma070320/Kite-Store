import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav_container">
      <h1 className="colorful-text">Chotu-Motu Patang Store</h1>
      <div className="icon_loc">
        <i className="ri-map-pin-line"></i>
        <a
          target="_blank"
          href="https://www.google.com/maps/place/Chotu+motu+patang+store/@26.4416768,74.6429667,17z/data=!3m1!4b1!4m6!3m5!1s0x396be78259c8013f:0xce7dc9d63a09b29c!8m2!3d26.441672!4d74.6455416!16s%2Fg%2F11ss4nn2y8?authuser=0&entry=ttu"
        >
          Visit Our Location
        </a>
      </div>
      
    </div>
  );
};

export default Navbar;
