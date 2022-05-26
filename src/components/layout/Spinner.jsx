import React from "react";
import spinner from '../../spinner1.gif'

function Spinner() {
  return (
    <div className="spinner">
      <img src={spinner} alt="Loading" />
    </div>
  );
}

export default Spinner;
