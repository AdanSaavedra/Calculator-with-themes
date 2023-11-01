import { useState } from "react";
import { create, all } from "mathjs";
import "./styles.css";

const config = {};
const math = create(all, config);

const Calculator = () => {
  const [value, setValue] = useState("");

  const readValue = (e) => {
    setValue(value + e);
    if (e == "=") {
      if (math.evaluate(value) - Math.floor(math.evaluate(value)) !== 0) {
        setValue(math.evaluate(value).toFixed(2));
      } else {
        setValue(math.evaluate(value));
      }
    } else if (e == "DEL") {
      setValue(value.slice(0, -1));
    } else if (e == "RESET") {
      setValue("");
    }
    // else if (value.includes("DEL")) {
    //   setValue(value.slice(0, -1));
    // }
  };

  return (
    <>
      <div className="calculator">
        <div className="header">
          <p className="headerTitle">calc</p>
          <div className="themeContainer">
            <p className="themeTitle">THEME</p>
            <div className="themeContainerSelector">
              <div className="themeContainerNumbers">
                <p>1</p>
                <p>2</p>
                <p>3</p>
              </div>
              <div className="themeContainerChecks">
                <input type="radio" name="1" defaultChecked />
                <input type="radio" name="1" />
                <input type="radio" name="1" />
              </div>
            </div>
          </div>
        </div>
        <div className="result">
          <p>{value}</p>
        </div>
        <div className="container">
          <div
            onClick={(e) => readValue(e.target.outerText)}
            className="item item-7"
          >
            7
          </div>
          <div
            onClick={(e) => readValue(e.target.outerText)}
            className="item item-8"
          >
            8
          </div>
          <div
            onClick={(e) => readValue(e.target.outerText)}
            className="item item-9"
          >
            9
          </div>
          <div
            onClick={(e) => readValue(e.target.outerText)}
            className="item item-del"
          >
            DEL
          </div>
          <div
            onClick={(e) => readValue(e.target.outerText)}
            className="item item-4"
          >
            4
          </div>
          <div
            onClick={(e) => readValue(e.target.outerText)}
            className="item item-5"
          >
            5
          </div>
          <div
            onClick={(e) => readValue(e.target.outerText)}
            className="item item-6"
          >
            6
          </div>
          <div
            onClick={(e) => readValue(e.target.outerText)}
            className="item item-plus"
          >
            +
          </div>
          <div
            onClick={(e) => readValue(e.target.outerText)}
            className="item item-1"
          >
            1
          </div>
          <div
            onClick={(e) => readValue(e.target.outerText)}
            className="item item-2"
          >
            2
          </div>
          <div
            onClick={(e) => readValue(e.target.outerText)}
            className="item item-3"
          >
            3
          </div>
          <div
            onClick={(e) => readValue(e.target.outerText)}
            className="item item-minus"
          >
            -
          </div>
          <div
            onClick={(e) => readValue(e.target.outerText)}
            className="item item-point"
          >
            .
          </div>
          <div
            onClick={(e) => readValue(e.target.outerText)}
            className="item item-14"
          >
            0
          </div>
          <div
            onClick={(e) => readValue(e.target.outerText)}
            className="item item-div"
          >
            /
          </div>
          <div
            onClick={(e) => readValue(e.target.outerText)}
            className="item item-mult"
          >
            *
          </div>
          <div
            onClick={(e) => readValue(e.target.outerText)}
            className="item item-reset"
          >
            RESET
          </div>
          <div
            onClick={(e) => readValue(e.target.outerText)}
            className="item item-equal"
          >
            =
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
