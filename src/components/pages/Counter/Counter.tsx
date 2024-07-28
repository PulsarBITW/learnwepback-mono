import React, { lazy, useState } from "react";
import * as classes from "./styled.module.css";

const Counter = () => {
  const [count, countChanged] = useState<number>(0);

  return (
    <div className={classes.wrapper}>
      <div className={classes.countValue}>{count}</div>
      <div className={classes.buttonGroup}>
        <button
          className={classes.button}
          onClick={() => countChanged(count - 1)}
        >
          -
        </button>
        <button
          className={classes.button}
          onClick={() => countChanged(count + 1)}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
