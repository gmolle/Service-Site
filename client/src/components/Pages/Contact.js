import React, { useEffect, useState } from "react";
import axios from "axios";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact Us";
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [buttonText, setButtonText] = useState("Send Message");
  const [disabled, setDisabled] = useState(false);
  const [emailSent, setEmailSent] = useState(null);
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");

  const changeName = (e) => setName(e.target.value);
  const changeEmail = (e) => setEmail(e.target.value);
  const changeMessage = (e) => setMessage(e.target.value);
  const changePhone = (e) => setPhone(e.target.value);
  const changeSubject = (e) => setSubject(e.target.value);

  const isNumericInput = (e) => {
    const key = e.keyCode;
    return (key >= 48 && key <= 57) || (key >= 96 && key <= 105);
  };

  const isModifierKey = (event) => {
    const key = event.keyCode;
    return (
      event.shiftKey === true ||
      key === 35 ||
      key === 36 || // Allow Shift, Home, End
      key === 8 ||
      key === 9 ||
      key === 13 ||
      key === 46 || // Allow Backspace, Tab, Enter, Delete
      (key > 36 && key < 41) || // Allow left, up, right, down
      // Allow Ctrl/Command + A,C,V,X,Z
      ((event.ctrlKey === true || event.metaKey === true) &&
        (key === 65 || key === 67 || key === 86 || key === 88 || key === 90))
    );
  };

  const enforceFormat = (e) => {
    // Input must be of a valid number format or a modifier key, and not longer than ten digits
    if (!isNumericInput(e) && !isModifierKey(e)) {
      e.preventDefault();
    }
  };

  const formatToPhone = (e) => {
    if (isModifierKey(e)) {
      return;
    }

    const target = e.target;
    const input = e.target.value.replace(/\D/g, "").substring(0, 10); // First ten digits of input only
    const zip = input.substring(0, 3);
    const middle = input.substring(3, 6);
    const last = input.substring(6, 10);

    if (input.length > 6) {
      target.value = `(${zip}) - ${middle} - ${last}`;
    } else if (input.length > 3) {
      target.value = `(${zip}) - ${middle}`;
    } else if (input.length > 0) {
      target.value = `(${zip}`;
    }
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setMessage("");
    setPhone("");
    setSubject("");
    setButtonText("Send Message");

    setTimeout(() => {
      setEmailSent(null);
      setDisabled(false);
    }, 2000);
  };

  const formSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      phone,
      subject,
      message,
    };

    setButtonText("...Sending Message");

    axios
      .post("http://localhost:3001/api/email", data)
      .then((res) => {
        setEmailSent(true);
        setDisabled(true);
        resetForm();
      })
      .catch((err) => {
        console.log("message not sent");
        setEmailSent(false);
        setDisabled(false);
      });
  };

  return (
    <div id="contact-page">
      <h1>Let's Talk</h1>

      <form onSubmit={formSubmit}>
        <div className="input-box" id="name">
          <input
            name="name"
            type="text"
            className="feedback-input"
            value={name}
            onChange={changeName}
            required
          />
          <label htmlFor="name" className="label">
            Name
          </label>
        </div>

        <div className="input-box" id="phone">
          <input
            name="phone"
            type="tel"
            className="feedback-input"
            value={phone}
            onChange={changePhone}
            onKeyDown={enforceFormat}
            onKeyUp={formatToPhone}
            required
          />
          <label htmlFor="phone" className="label">
            Phone Number
          </label>
        </div>

        <div className="input-box" id="email">
          <input
            name="email"
            type="text"
            className="feedback-input"
            value={email}
            onChange={changeEmail}
            required
          />
          <label htmlFor="email" className="label">
            Email
          </label>
        </div>

        <div className="input-box" id="subject">
          <input
            name="subject"
            type="text"
            className="feedback-input"
            value={subject}
            onChange={changeSubject}
            required
          />
          <label htmlFor="subject" className="label">
            Subject
          </label>
        </div>

        <div className="input-box" id="message">
          <textarea
            name="message"
            className="feedback-input"
            value={message}
            onChange={changeMessage}
            required
          ></textarea>
          <label htmlFor="message" className="label">
            Message
          </label>
        </div>

        <div className="input-box" id="submit">
          <input
            type="submit"
            value={buttonText}
            required
            disabled={disabled}
          />
        </div>

        {emailSent === true && (
          <p className="email-status" id="success">
            Email Sent
          </p>
        )}
        {emailSent === false && (
          <p className="email-status" id="error">
            Email Not Sent
          </p>
        )}
      </form>
    </div>
  );
};

export default Contact;
