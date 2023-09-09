
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [red, setRed] = useState(false);
  const [yellow, setYellow] = useState(false);
  const [green, setGreen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setRed(true);
    }, 3000);
    setTimeout(() => {
      setYellow(true);
    }, 6000);
    setTimeout(() => {
      setGreen(true);
    }, 9000);
  }, []);

  return (
    <div className="outer-box">
      <div className="blackbox">
        <div className="row">
          <div
            className="circle"
            style={
              red
                ? { position: "relative", backgroundColor: "red" }
                : { backgroundColor: "white" }
            }
          ></div>
        </div>
        <div className="row">
          <div
            className="circle"
            style={yellow ? { backgroundColor: "yellow" } : null}
          ></div>
        </div>
        <div className="row">
          <div
            className="circle"
            style={green ? { backgroundColor: "green" } : null}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default App;
