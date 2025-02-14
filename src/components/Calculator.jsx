import React, { useState } from "react";
import Keys from "./Keys";

const Calculator = () => {
  const keys = [
    "AC", "C", "%", "/",
    "7", "8", "9", "*",
    "4", "5", "6", "-",
    "1", "2", "3", "+",
    ".", "0", "EQUALS",
  ];

  const [showResult, setShowResult] = useState(false);
  const [display, setDisplay] = useState("");

  const maxLimit = 15;

  function calculateResult() {
    if (display.length !== 0) {
      try {
        let calcResult = eval(display);
        calcResult = parseFloat(calcResult.toFixed(3));
        setDisplay(calcResult.toString());
        setShowResult(true);
      } catch (error) {
        setDisplay("Error");
      }
    } else {
      setDisplay("");
    }
  }

  function handleButton(value) {
    setShowResult(false);
    if (value === "AC") setDisplay("");
    else if (value === "C") setDisplay(display.slice(0, -1));
    else if (isOperator(value)) {
      if (display === "" || isOperator(display[display.length - 1])) return;
      setDisplay(display + value);
    } else if (value === "EQUALS") {
      calculateResult();
    } else if (display.length >= maxLimit) {
      alert(`Maximum characters allowed: ${maxLimit}`);
    } else {
      setDisplay(display + value);
    }
  }

  function isOperator(char) {
    return ["*", "/", "%"].includes(char);
  }

  return (
    <div className="calculator-container">
      <div className="display">{display || "0"}</div>
      <div className="keys-container">
        {keys.map((item, index) => (
          <Keys label={item} key={index} onButtonClick={handleButton} />
        ))}
      </div>
    </div>
  );
};

export default Calculator;
