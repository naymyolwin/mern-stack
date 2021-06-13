import React, { useState } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import LoginComp from "../../components/Login/LoginComp";
import ForgotPasswordComp from "../../components/ForgotPassword/ForgotPasswordComp";

import classes from "./MainPage.module.css";

const MainPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(true);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleFormSwitch = () => {
    setLogin(!login);
  };

  const handleLoginPress = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
  };
  const handleResetPress = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
  };

  return (
    <div className={[`${classes.entry} bg-secondary`]}>
      <Jumbotron className={classes.Jumbotron}>
        {login ? (
          <LoginComp
            email={email}
            password={password}
            handleEmailChange={handleEmailChange}
            handlePasswordChange={handlePasswordChange}
            handleLoginPress={handleLoginPress}
            handleFormSwitch={handleFormSwitch}
          />
        ) : (
          <ForgotPasswordComp
            email={email}
            handleEmailChange={handleEmailChange}
            handleResetPress={handleResetPress}
            handleFormSwitch={handleFormSwitch}
          />
        )}
      </Jumbotron>
    </div>
  );
};

export default MainPage;
