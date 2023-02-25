import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    let patterArray = [1, 2, 3, 4, 5];

    patterArray.map((item) => {
      let result = "";
      for (let num = 1; num <= item; num++) {
        result += 5 - item + 1;
      }
      console.log(result);
    });
  }, []);

  return;

  <div className="App"></div>;
}

export default App;
