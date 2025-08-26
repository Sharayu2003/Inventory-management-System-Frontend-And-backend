import React from "react";
import "./Contact.css"

const Contact = () => {
  return (
    <div className="contact-container maincontact">
      <h2>Contact Us</h2>
      <div className="contact-sections">
        <div className="contact-box">
          <h4>📞 By Phone</h4>
          <p>
            Speak directly with our support team for quick assistance.
            Call us anytime during business hours to get guidance and answers.
          </p>
          <p><b>+91 98765 43210</b></p>
        </div>

        <div className="contact-box">
          <h4>✉️ By Message</h4>
          <p>
            Prefer texting instead? Send us a message through chat or email,
            and our team will respond promptly to help resolve your concerns.
          </p>
          <p><b>support@yourdomain.com</b></p>
        </div>
      </div>
    </div>
  );
};

export default Contact;