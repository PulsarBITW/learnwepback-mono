import React, { useState } from "react";
import * as classes from "./styled.module.css";

const Counter = () => {
  const [count, countChanged] = useState<bigint>(BigInt(10));

  return (
    <div className={classes.wrapper}>
      <div className={classes.buttonGroup}>
        <button
          className={classes.button}
          onClick={() => countChanged(count - BigInt(1))}
        >
          -
        </button>
        <button
          className={classes.button}
          onClick={() => countChanged(count + BigInt(1))}
        >
          +
        </button>
      </div>
      <div className={classes.countValue}>{count.toString()}</div>
    </div>
  );
};

export default Counter;
