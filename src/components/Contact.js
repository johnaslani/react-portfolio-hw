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

  const formCheck=(e)=>{
    if (e.target.name === "email" && !validEmail.test(e.target.value)) {
      setError("Must be a valid email address");
    } else if (!e.target.value) {
      setError(`${e.target.name} is required`);
    }
  }

  const handleChange = (e) => {
      setInput({ ...input, [e.target.name]: e.target.value });
      setError("");
  };

  // First we check to see if "edit" prop exists. If not, we render the normal form
  // If the prop "edit" exists, we know to render the update form instead
  return !formSubmitted ? (
    <div>
      {error ? <p>{error}</p> : <></>}
      <form className="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={input.name}
          name="name"
          className=""
          onChange={handleChange}
          required
          onBlur={formCheck}
        ></input>
        <input
          type="text"
          placeholder="Enter your email"
          value={input.email}
          name="email"
          className=""
          onChange={handleChange}
          onBlur={formCheck}
          required
        ></input>
        <textarea
          type="text"
          placeholder="Enter your message"
          value={input.message}
          name="message"
          className=""
          onChange={handleChange}
          onBlur={formCheck}
          required
        ></textarea>
        <button className="">Add bucket list item</button>
      </form>
    </div>
  ) : (
    <div>
      <h3>Thank you for your message!</h3>
    </div>
  );
}

export default Contact;
