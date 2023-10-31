import "./styles.css";

const Calculator = () => {
  return (
    <>
      <div className="calculator">
        <div className="header">
          <p>calc</p>
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
          <p>399.981</p>
        </div>
        <div className="container">
          <div className="item item-1">7</div>
          <div className="item item-2">8</div>
          <div className="item item-3">9</div>
          <div className="item item-4">DEL</div>
          <div className="item item-5">4</div>
          <div className="item item-6">5</div>
          <div className="item item-7">6</div>
          <div className="item item-8">+</div>
          <div className="item item-9">1</div>
          <div className="item item-10">2</div>
          <div className="item item-11">3</div>
          <div className="item item-12">-</div>
          <div className="item item-13">.</div>
          <div className="item item-14">0</div>
          <div className="item item-15">/</div>
          <div className="item item-16">x</div>
          <div className="item item-reset">RESET</div>
          <div className="item item-equal">=</div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
