import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Join.css";

function Join() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_f4f9w9i",
        "template_2ixv44w",
        form.current,
        "e0W3ggEAIJfxhjb92"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">READY TO</span>
          <span>LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY</span>
          <span className="stroke-text">WITH US?</span>
        </div>
      </div>
      <div className="right-j">
        <form
          ref={form}
          action="#"
          className="email-container"
          onSubmit={sendEmail}
        >
          <input
            type="email"
            name="user-email"
            placeholder="Enter your Email address"
          />
          <button className="btn btn-j">Join Now</button>
        </form>
      </div>
    </div>
  );
}

export default Join;
