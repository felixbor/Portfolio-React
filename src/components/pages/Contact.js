import React, { useState } from "react";

export default function Contact() {
  const [ErrMsg, setErrMsg] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
    const Name = event.target.value;
    if (Name.length < 3) {
      setErrMsg("name should be at least 3 characters")
      console.log("name too short");
    } else { setErrMsg("")}
    ;
  };

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  
     const email=event.target.value
    const mailValid = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!mailValid.test(email)) {
      console.log("not valid")
      setErrMsg("Email address is not valid!");
  }
  else  {
    setErrMsg("");
  }
  };


  const messsageChangeHandler = (event) => {
    setEnteredMessage(event.target.value);
    const message = event.target.value;
    if (message.length < 6) {
      setErrMsg("Message has to be at least 6 characters!");
      console.log("Message has to be at least 6 characters ");
    }else  {
      setErrMsg("");
    }
    
    
    //console.log("Name changed");
  
  };

  const submitHandler = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();
    console.log("Submit button works");
    if(enteredName== "" || enteredEmail== ""|| enteredMessage == ""){setErrMsg("All fileds should be filled")}
    else {setErrMsg("Your message has been submitted")}
  };

  return (
    <div
      className="ContactForm"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?ixid=Mnw0MDkzODR8MHwxfHNlYXJjaHwyfHxjb2RlfGVufDB8fHx8MTY3OTc4MDAyNQ&ixlib=rb-4.0.3")`,
        backgroundSize: "cover",
      }}
    >
      
      <form className="form" onSubmit={submitHandler}>
        <p>Contact Me</p>
        <div>
        <input
          value={enteredName}
          name="Name"
          onChange={nameChangeHandler}
          type="text"
          placeholder="name"
        />
        </div>
        <div>
        <input
          value={enteredEmail}
          name="email"
          onChange={emailChangeHandler}
          type="email"
          placeholder="email"
        />
        </div>
        <div>
        <input className="message"
          value={enteredMessage}
          onChange={messsageChangeHandler}
          type="text"
          placeholder="Message"
        />
        </div>
        <p>{ErrMsg} </p>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}
