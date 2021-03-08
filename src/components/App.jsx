import React from "react";

function App() {
  let time = new Date().toLocaleTimeString();

  time = time.split("PM");
  let [timeValue, setTime] = React.useState(time);

  function getTime() {
    let time = new Date().toLocaleTimeString();
    time = time.split("PM");
    setTime((timeValue = time));
  }
  setInterval(getTime, 1000);
  return (
    <div className="container">
      <h1>{timeValue}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
