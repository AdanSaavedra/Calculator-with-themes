import React, { useContext } from "react";
import "./App.css";
import Calculator from "../Calculator";
import { ThemeContext } from "../Theme";

const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`App ${theme}`}>
      <Calculator />
    </div>
  );
};

export default App;
