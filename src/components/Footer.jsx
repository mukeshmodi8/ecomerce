import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section contact">
          <h2>Contact Us</h2>
          <p>
            <FaMapMarkerAlt className="icon" /> Paldi Mithi, Deodar, Banaskantha, 385330
          </p>
          <p>
            <FaPhoneAlt className="icon" /> Dipak Modi:<a href="tel:+919601543844"> +91 9601543844</a>
          </p>
          <p>
            <FaPhoneAlt className="icon" /> Trikam Modi:<a href="tel:+919004056482"> +91 9004056482</a>
          </p>
          <p>
            <FaEnvelope className="icon" /> <a href="mailto:trikammodi786@gmail.com">trikammodi786@gmail.com</a>
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Mr. Happy. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;