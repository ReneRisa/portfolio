import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
const btnContactMe = document.getElementById("btnContactMe");
const btnSubmit = document.getElementById("btnSubmitForma");
const containerContact = document.getElementById("container-contact");

btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("SUBMIITED");
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  name.trim() == ""
    ? (document.getElementById("nameError").style.display = "block")
    : (document.getElementById("nameError").style.display = "none");
  /*email.trim() == ""
    ? (document.getElementById("emailError").style.display = "block")
    : (document.getElementById("emailError").style.display = "none");*/
  message.trim() == ""
    ? (document.getElementById("messageError").style.display = "block")
    : (document.getElementById("messageError").style.display = "none");
  // Validate email
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.trim() == "") {
    document.getElementById("emailError").innerHTML = "Email is required!";
    document.getElementById("emailError").style.display = "block";
  } else if (!emailRegex.test(email)) {
    document.getElementById("emailError").innerHTML = "Invalid email format";
    document.getElementById("emailError").style.display = "block";
  } else {
    document.getElementById("emailError").innerHTML = "Email is required!";
    document.getElementById("emailError").style.display = "none";
  }

  const data = {
    name: name,
    email: email,
    message: message,
  };
});

btnContactMe.addEventListener("click", (e) => {
  e.preventDefault();
  if (containerContact) {
    containerContact.scrollIntoView({ behavior: "smooth" });
  }
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
