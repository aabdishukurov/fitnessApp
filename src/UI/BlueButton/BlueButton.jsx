import style from "./BlueButton.module.scss";

export const BlueButton = ({ children, className, onClick }) => {
  return (
    <button className={`${style.button} ${className}`} onClick={onClick}>
      <i>{children}</i>
    </button>
  );
};
