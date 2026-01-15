import React from "react";
import moment from "moment";

const Links = () => {
  return (
    <div className="links">
      <div>
        <div className="link">
          <a href="/about">About</a>
          <a href="/hot-topics">Hot Topics</a>
          <a href="/contact">Contact</a>
          <a href="/careers">Careers</a>
          <a href="/">RapidReel</a>
        </div>
        <div className="copyright">
          <h6>&copy; {moment().format("YYYY")} RapidReel - Rapid Faceless Content Creation</h6>
        </div>
      </div>
    </div>
  );
};

export default Links;
