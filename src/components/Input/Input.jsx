import React from "react";
import styles from "./Input.module.scss";
const Input = ({
  title,
  pattern,
  type,
  value,
  handleChange,
  handleBlur,
  placeholder,
  className,
  brColor,
  isValid,
}) => {
  return (
    <>
      <input
        type={type}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        pattern={pattern}
        title={title}
        className={className}
        placeholder={placeholder}
        style={{
          borderBottom: brColor,
        }}
        required
      />
    </>
  );
};

export default Input;