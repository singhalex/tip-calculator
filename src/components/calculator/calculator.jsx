import { useRef, useState } from "react";
import styles from "../calculator/calculator.module.css";
import TipButton from "./TipButton";

export default function Calculator() {
  const [bill, setBill] = useState("");
  const [numPeople, setNumPeople] = useState("");
  const [tip, setTip] = useState(0);
  const [customTip, setCustomTip] = useState("");
  const [active, setActive] = useState(null);

  const inputRef = useRef(null);
  const tipValues = [5, 10, 15, 25, 50];

  const reset = () => {
    // Reset all user inputs and put focus on the bill input
    setBill("");
    setNumPeople("");
    setTip(0);
    setActive(null);
    inputRef.current.focus();
  };

  const updateBill = (event) => {
    // Return early if the bill is too large
    if (Number(event.target.value) > 9999999) return;

    if (event.target.value === "") {
      // set empty input for styling purposes
      setBill("");
    } else {
      setBill(Number(event.target.value));
    }
  };

  const updatePeople = (event) => {
    if (event.target.value === "") {
      // set empty input for styling purposes
      setNumPeople("");
    } else {
      setNumPeople(Number(event.target.value));
    }
  };

  const updateTip = (number) => {
    // set the tip as a percentage
    setTip(number / 100);
    // to hightight tip button
    setActive(number);
  };

  const updateCustomTip = (event) => {
    // cannot set more than 100% tip
    if (Number(event.target.value) > 100) return;

    if (event.target.value === "") {
      // clear tips for styling purposes
      setCustomTip("");
      setTip("");
    } else {
      // to control input
      setCustomTip(Number(event.target.value));
      // to set the tip for actual calculations
      setTip(Number(event.target.value) / 100);
      // clear any highlighted tip button
      setActive(null);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.leftWrapper}>
        <div className={styles.inputWrapper}>
          <label htmlFor="bill">Bill</label>
          <input
            ref={inputRef}
            type="number"
            name="bill"
            id="bill"
            placeholder="0"
            value={bill}
            onChange={(event) => updateBill(event)}
          />
          <img src="images\icon-dollar.svg" alt="" className={styles.dollar} />
        </div>
        <div className="button-wrapper">
          <div>Select Tip %</div>
          <div className={styles.buttonGrid}>
            {/* Render tip buttons, using index as key */}
            {tipValues.map((number, index) => (
              <TipButton
                key={index}
                number={number}
                handleClick={updateTip}
                active={active}
              />
            ))}
            <input
              className={styles.tipInput}
              type="number"
              placeholder="Custom"
              value={customTip}
              onChange={(event) => {
                updateCustomTip(event);
              }}
            />
          </div>
        </div>
        <div className={styles.inputWrapper}>
          <div className={styles.peopleLabelWrapper}>
            <label htmlFor="people">Number of People</label>
            <div
              className={styles.invalid}
              hidden={
                bill !== "" && tip !== 0 && numPeople === "" ? false : true
              }
            >
              Can't be zero
            </div>
          </div>
          <input
            className={
              bill !== "" && tip !== 0 && numPeople === ""
                ? styles.invalidPeople
                : null
            }
            type="number"
            name="people"
            id="people"
            placeholder="0"
            value={numPeople}
            onChange={(event) => updatePeople(event)}
          />
          <img src="images\icon-person.svg" alt="" className={styles.person} />
        </div>
      </div>
      <div className={styles.resultsWrapper}>
        <div>
          <div className={styles.resultLine}>
            <div className={styles.tipLabel}>
              <div>Tip Amount</div>
              <div className={styles.perPerson}>/ person</div>
            </div>
            <div
              className={styles.dollarAmounts}
              style={
                ((bill * tip) / numPeople).toFixed(2).length > 8
                  ? { fontSize: "2rem" }
                  : undefined
              }
            >
              {bill !== "" && tip !== 0 && numPeople !== "" && numPeople !== 0
                ? `$${((bill * tip) / numPeople).toFixed(2)}`
                : "$0.00"}
            </div>
          </div>
          <div className={styles.resultLine}>
            <div className={styles.tipLabel}>
              <div>Total</div>
              <div className={styles.perPerson}>/ person</div>
            </div>
            <div
              className={styles.dollarAmounts}
              style={
                ((bill + bill * tip) / numPeople).toFixed(2).length > 8
                  ? { fontSize: "2rem" }
                  : undefined
              }
            >
              {bill !== "" && tip !== 0 && numPeople !== "" && numPeople !== 0
                ? `$${((bill + bill * tip) / numPeople).toFixed(2)}`
                : "$0.00"}
            </div>
          </div>
        </div>
        <button
          className={styles.resetButton}
          onClick={reset}
          disabled={bill !== "" && numPeople !== "" && tip !== 0 ? false : true}
        >
          RESET
        </button>
      </div>
    </div>
  );
}
