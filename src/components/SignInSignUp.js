import React, { useEffect, useRef, useState } from "react";
import './SignInSignUp.css';
import { TodoWrapper } from "./TodoWrapper";

function SignInSignupWithLocalStorage() {
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const [showHome, setShowHome] = useState(false);
  const [show, setShow] = useState(false);
  const [localSignUp, setLocalSignUp] = useState(localStorage.getItem("signUp"));
  const localEmail = localStorage.getItem("email");
  const localPassword = localStorage.getItem("password");
  const localName = localStorage.getItem("name");

  useEffect(() => {
    if (localSignUp) {
      setShowHome(true);
    }
    if (localEmail) {
      setShow(true);
    }
  }, [localSignUp, localEmail]);

  const handleClick = () => {
    if (name.current.value && email.current.value && password.current.value) {
      localStorage.setItem("name", name.current.value);
      localStorage.setItem("email", email.current.value);
      localStorage.setItem("password", password.current.value);
      localStorage.setItem("signUp", email.current.value);
      setLocalSignUp(email.current.value); // Update localSignUp in the state
      alert("Account created successfully!!");
      window.location.reload();
    }
  }

  const handleSignIn = () => {
    if (email.current.value === localEmail && password.current.value === localPassword) {
      localStorage.setItem("signUp", email.current.value);
      setLocalSignUp(email.current.value); // Update localSignUp in the state
      window.location.reload();
    } else {
      alert("Please Enter valid Credential");
    }
  }

  return (
    <div>
      {showHome ? <TodoWrapper /> :
        (show ?
          <div className="container">
            <h1>Hello {localName}!!!</h1>
            <div className="input_space">
              <input placeholder="Email" type='text' ref={email} />
            </div>
            <div className="input_space">
              <input placeholder="Password" type='password' ref={password} />
            </div>
            <button onClick={handleSignIn}>Sign In</button>
          </div>
          :
          <div className="containers">
            <h2>User Login!!!</h2>
            <div className="input_space">
              <input placeholder="Name" type='text' ref={name} />
            </div>
            <div className="input_space">
              <input placeholder="Email" type='text' ref={email} />
            </div>
            <div className="input_space">
              <input placeholder="Password" type='password' ref={password} />
            </div>
            <button onClick={handleClick}>Sign Up</button>
          </div>)
      }
    </div>
  );
}

export default SignInSignupWithLocalStorage;
