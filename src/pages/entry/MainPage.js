import React, { useState } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import LoginComp from "../../components/Login/LoginComp";

import classes from "./MainPage.module.css";

const MainPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginPress = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
  };
  return (
    <div className={[`${classes.entry} bg-secondary`]}>
      <Jumbotron className={classes.Jumbotron}>
        <LoginComp
          email={email}
          password={password}
          handleEmailChange={handleEmailChange}
          handlePasswordChange={handlePasswordChange}
          handleLoginPress={handleLoginPress}
        />
      </Jumbotron>
    </div>
  );
};

export default MainPage;
