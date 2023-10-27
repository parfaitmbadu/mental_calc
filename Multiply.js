import React, { useState } from "react";
import PageTwo from "./PageTwo";

const PageOne = () => {
  function multiplier(a, b) {
    return a * b;
  }

  return (
    <div>
      <h1>Let's do Some Computation</h1>
      <PageTwo multiplier={multiplier} />
    </div>
  );
};

export default PageOne;
