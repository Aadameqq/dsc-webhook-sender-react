import React from "react";

const Input = ({
  placeHolder,
  classes = "form__input",
  name,
  textArea = false,
  handleChange,
  value,
}) => {
  const args = {
    type: "text",
    placeholder: placeHolder,
    className: textArea ? `${classes} form__input--textarea` : classes,
    name,
    autoComplete: "off",
    onChange: handleChange,
  };
  return !textArea ? (
    <input {...args} value={value} />
  ) : (
    <textarea {...args}>{value}</textarea>
  );
};
export default Input;
