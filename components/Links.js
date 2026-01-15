import React from "react";
import moment from "moment";
import Link from "next/link";

const Links = () => {
  return (
    <div className="links">
      <div>
        <div className="link">
          <Link href="/about">About</Link>
          <Link href="/hot-topics">Hot Topics</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/careers">Careers</Link>
          <Link href="/">RapidReel</Link>
        </div>
        <div className="copyright">
          <h6>&copy; {moment().format("YYYY")} RapidReel - Rapid Faceless Content Creation</h6>
        </div>
      </div>
    </div>
  );
};

export default Links;
