import React, { useState } from "react";
import * as classes from "./styled.module.css"; // todo - fix, * as classes -> import classes from "..."

interface UserInfo {
  name: string;
  about: string;
}
//
export const Main = () => {
  const [userInfo, userInfoChanged] = useState<UserInfo>({
    name: "",
    about: "",
  });

  const userInputsHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    userInfoChanged((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.inputsContainer}>
        <input
          className={classes.userInput}
          name="name"
          value={userInfo.name}
          onChange={userInputsHandler}
          placeholder="Введите имя"
        />
        <input
          className={classes.userInput}
          name="about"
          value={userInfo.about}
          onChange={userInputsHandler}
          placeholder="Введите краткую информацию"
        />
      </div>
    </div>
  );
};
