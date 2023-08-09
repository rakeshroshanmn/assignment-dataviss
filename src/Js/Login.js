import React, { useState, useEffect } from "react";
import styles from "../Css/login.module.css";
import {
  AccountCircle,
  Lock,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";

const Login = ({ onLoginSuccess }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  const handleVisibilityToggle = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const isValidPassword = (password) => {
    const passwordPattern = /^.{6,}$/;
    return passwordPattern.test(password);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (!isValidEmail(value)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    if (!isValidPassword(value)) {
      setPasswordError("Password should be at least 6 characters.");
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = () => {
    if (!isValidEmail(email)) {
      setEmailError("Please enter a valid email address.");
    } else if (!isValidPassword(password)) {
      setPasswordError("Password should be at least 6 characters.");
    } else {
      onLoginSuccess();
      setEmail("");
      setPassword("");
      setEmailError("");
      setPasswordError("");
    }
  };

  useEffect(() => {
    setIsSubmitDisabled(!isValidEmail(email) || !isValidPassword(password));
  }, [email, password]);

  return (
    <div className={`${styles.container} ${styles.card}`}>
      <div className={`${styles["card-child"]}`}>
        <img
          src="./Assets/nokia-logo.png"
          alt="logo"
          className={`${styles.img}`}
        />
        <h3 className={`${styles.heading}`}>Faciliviss</h3>
        <div className={`${styles["input-field"]}`}>
          <AccountCircle className={`${styles["input-icon"]}`} />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            className={`${styles.input}`}
          />
        </div>
        {emailError && (
          <p className={`${styles["error-message"]}`}>{emailError}</p>
        )}
        <div className={`${styles["input-field"]}`}>
          <Lock className={`${styles["input-icon"]}`} />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            className={`${styles.input}`}
          />
          {showPassword ? (
            <VisibilityOff
              className={`${styles["input-icon"]}`}
              onClick={handleVisibilityToggle}
            />
          ) : (
            <Visibility
              className={`${styles["input-icon"]}`}
              onClick={handleVisibilityToggle}
            />
          )}
        </div>
        {passwordError && (
          <p className={`${styles["error-message"]}`}>{passwordError}</p>
        )}
        <a href="/" className={`${styles.link}`}>
          Forgot Password?
        </a>
        <button
          type="button"
          onClick={handleSubmit}
          disabled={isSubmitDisabled}
          className={`${
            isSubmitDisabled ? `${styles["button-disabled"]}` : `${styles.btn}`
          }`}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Login;
