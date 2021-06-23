import React, { useState } from "react";

const Switch = ({ title, handleClick, isActive, customFunction = null }) => {
  const [isHovered, setHover] = useState(false);
  const getClasses = () =>
    `form__checkbox__label ${isActive && `form__checkbox__label--on`} ${
      isHovered &&
      (isActive
        ? `form__checkbox__label--hover-on`
        : `form__checkbox__label--hover-off`)
    }`;
  return (
    <span className="form__checkbox">
      <label
        className={getClasses()}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <input
          type="checkbox"
          className="form__checkbox__input"
          onClick={() => {
            handleClick((prev) => !prev);
            customFunction && customFunction();
          }}
        />
        <div className="form__checkbox__dot"></div>
      </label>
      {title}
    </span>
  );
};

export default Switch;
