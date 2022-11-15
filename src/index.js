import Calendar from "../src/components/calendar";
import Audioplayer from "../src/component/audioplayer"
import React from 'react';
import ReactDOM from 'react-dom';
function App() {
  return (
    <div className="App">
      <Calendar />
    </div>
  );
  // return <Calendar />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);