import React, { useState, useEffect } from "react";
import PageOne from "./PageOne";

const PageTwo = ({ multiplier }) => {
  const [value1, setValue1] = useState();
  const [value2, setValue2] = useState();
  const [value3, setValue3] = useState();
  const [answer, setAnswer] = useState();

  {
    /*useEffect(() => {
    randnum();
  }, []);*/
  }

  const randnum = (num) => {
    setValue1(Math.floor(Math.random() * 10));
    setValue2(Math.floor(Math.random() * 10));
  };
  const handleChange1 = (e) => {
    setValue1(e.target.value);
  };
  const handleChange2 = (e) => {
    setValue2(e.target.value);
  };

  const handleChange3 = (e) => {
    setValue3(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const calculation = multiplier(value1, value2);
    if (parseInt(value3) === calculation) {
      setAnswer("Good Answer");
    } else {
      setAnswer("Bad Answer. Try again Myoah");
    }
    setValue1(randnum);
    setValue2(randnum);
    setValue3("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          className="input-first"
          value={value1}
          onChange={handleChange1}
        />
        <input
          type="number"
          className="input-second"
          value={value2}
          onChange={handleChange2}
        />
        <input
          type="number"
          className="input-third"
          onChange={handleChange3}
          value={value3}
        />
        <button type="submit">Submit!</button>
      </form>

      <div>
        <h2>{answer}</h2>
      </div>
    </div>
  );
};

export default PageTwo;
