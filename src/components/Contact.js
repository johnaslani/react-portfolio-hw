import React, { useState } from "react";
const validEmail = new RegExp(/^\S+@\S+\.\S+$/);

function Contact(props) {
  const [input, setInput] = useState({ name: "", message: "", email: "" });
  const [error, setError] = useState("");

  const [formSubmitted, setFormSubmitted] = useState(false);
  console.log(input);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("formSubmitted");
    setFormSubmitted(true);
    setInput({ name: "", message: "", email: "" });
  };

  const formCheck = (e) => {
    if (e.target.name === "email" && !validEmail.test(e.target.value)) {
      setError("Must be a valid email address");
    } else if (!e.target.value) {
      setError(`${e.target.name} is required`);
    }
  };

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    setError("");
  };

  // First we check to see if "edit" prop exists. If not, we render the normal form
  // If the prop "edit" exists, we know to render the update form instead
  return !formSubmitted ? (
    <div className="formPage">
      <h2 className="contact">Contact Me</h2>
      {error ? <p>{error}</p> : <></>}
      <form className="form" onSubmit={handleSubmit}>
        <div className="formGroup">
          <label className="formLabel">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={input.name}
            name="name"
            className=""
            onChange={handleChange}
            required
            onBlur={formCheck}
            size="50"
          ></input>
        </div>
        <div className="formGroup">
          <label className="formLabel">Email</label>
          <input
            type="text"
            placeholder="Enter your email"
            value={input.email}
            name="email"
            className=""
            onChange={handleChange}
            onBlur={formCheck}
            required
            size="50"
          ></input>
        </div>
        <div className="formGroup">
          <label className="formLabel">Message</label>
          <textarea
            type="text"
            placeholder="Enter your message"
            value={input.message}
            name="message"
            className=""
            onChange={handleChange}
            onBlur={formCheck}
            required
            rows="10"
            cols="50"
          ></textarea>
        </div>
        <button className="formBtn">Send Message</button>
      </form>
    </div>
  ) : (
    <div>
      <h3>Thank you for your message!</h3>
    </div>
  );
}

export default Contact;
