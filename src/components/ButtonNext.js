import React from "react";
import "../styles/ButtonNext.css";

const ButtonNext = ({ onClick }) => {
  return (
    <div className= 'ButtonNext__container-active'>
      <button type="button" className='ButtonNext' onClick={ onClick }>
        Next
      </button>
    </div>
  );
};

export default ButtonNext;
