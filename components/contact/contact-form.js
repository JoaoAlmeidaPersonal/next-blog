import classes from "./contact-form.module.css";
import {Fragment, useEffect, useRef, useState} from "react";
import axios, {request} from "axios";
import Notification from "../ui/notification";

async function sendContactData(contactDetails) {
  const response = await axios.post("/api/contact", contactDetails);

  const data = response.data;

  if (data.message !== "Successfully stored message!") {
    throw new Error(data.message || "Something went wrong!");
  }
}

function ContactForm() {
  const [requestStatus, setRequestStatus] = useState("");

  useEffect(() => {
    if(requestStatus ==='success' || requestStatus === 'error') {
      const timer = setTimeout(() => {
        setRequestStatus('')
      },3000);
      return () => clearTimeout(timer)
    }
  },[requestStatus])

  const emailInputRef = useRef();
  const messageInputRef = useRef();
  const nameInputRef = useRef();

  async function submitFormHandler(event) {
    event.preventDefault();

    setRequestStatus("pending");

    const message = {
      email: emailInputRef.current.value,
      name: nameInputRef.current.value,
      message: messageInputRef.current.value,
    };

    try {
      await sendContactData(message);
      setRequestStatus("success");
      emailInputRef.current.value = ''
      nameInputRef.current.value = ''
      messageInputRef.current.value = ''


    } catch (err) {
      setRequestStatus("error");
    }
  }

  let notification;

  if (requestStatus === 'pending') {
    notification = {
      status: 'pending',
      title: 'Sending message...',
      message: 'Your message is on its way!',
    };
  }

  if (requestStatus === 'success') {
    notification = {
      status: 'success',
      title: 'Success!',
      message: 'Message sent successfully!',
    };
  }

  if (requestStatus === 'error') {
    notification = {
      status: 'error',
      title: 'Error!',
      message: requestError,
    };
  }

  return (
    <Fragment>
      <section className={classes.contact}>
        <h1>How can I help you?</h1>
        <form className={classes.form} onSubmit={submitFormHandler}>
          <div className={classes.controls}>
            <div className={classes.control}>
              <label htmlFor="email">Your Email</label>
              <input ref={emailInputRef} type="email" id="email" required />
            </div>

            <div className={classes.control}>
              <label htmlFor="name">Your Name</label>
              <input ref={nameInputRef} type="text" id="name" required />
            </div>
          </div>
          <div className={classes.control}>
            <label htmlFor="message">Your Message</label>
            <textarea ref={messageInputRef} id="message" rows="5" />
          </div>
          <div className={classes.actions}>
            <button>Send Message</button>
          </div>
        </form>
      </section>
      {notification && (
          <Notification
              status={notification.status}
              title={notification.title}
              message={notification.message}
          />
      )}    </Fragment>
  );
}

export default ContactForm;
