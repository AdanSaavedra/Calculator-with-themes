import "./styles.css";

const Calculator = () => {
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
          <p>399,981</p>
        </div>
        <div className="container">
          <div className="item item-7">7</div>
          <div className="item item-8">8</div>
          <div className="item item-9">9</div>
          <div className="item item-del">DEL</div>
          <div className="item item-4">4</div>
          <div className="item item-5">5</div>
          <div className="item item-6">6</div>
          <div className="item item-plus">+</div>
          <div className="item item-1">1</div>
          <div className="item item-2">2</div>
          <div className="item item-3">3</div>
          <div className="item item-minus">-</div>
          <div className="item item-point">.</div>
          <div className="item item-14">0</div>
          <div className="item item-div">/</div>
          <div className="item item-mult">x</div>
          <div className="item item-reset">RESET</div>
          <div className="item item-equal">=</div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
