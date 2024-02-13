import styles from "./calculator.module.css";

const TipButton = ({ number, handleClick, active }) => {
  return (
    <button
      //  Set active class for styling
      className={active === number ? styles.activeTip : undefined}
      onClick={() => {
        handleClick(number);
      }}
    >
      {number}%
    </button>
  );
};
export default TipButton;
