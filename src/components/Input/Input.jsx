import React from "react";
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
  autocomplete,
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
        autoComplete={autocomplete}
        required
      />
    </>
  );
};

export default Input;
