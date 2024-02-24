import React from "react";

const Contact = () => {
  return (
    <div className="contact-page-wrapper" id="Contact">
      <h1 className="primary-heading">For any support needed,</h1>
      <h1 className="primary-heading">Reach out to us via email.</h1>
      <div className="contact-form-container">
        <input type="text" placeholder="Enter your email-id" />
        <button className="secondary-button">Submit</button>
      </div>
    </div>
  );
};

export default Contact;
