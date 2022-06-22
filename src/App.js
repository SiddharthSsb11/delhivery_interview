import React, { useState} from "react";
import "./App.css";

function App() {
  const countersCount = 6;

  const countersArray = [...Array(countersCount).keys()];
  //console.log(countersArray);

  const initialState = countersArray.map((el) => {
    return { id: el, value: 0 };
  });

  //console.log(initialState);

  const [counter, setCounter] = useState(initialState);

  //console.log(counter);

  const increamentHandler = (index) => {
    //console.log('increase',index);
    const counterStateCopy = [...counter];
    counterStateCopy[index].value = counter[index].value + 1;
    setCounter(counterStateCopy);
  };

  const decreamentHandler = (index) => {
    //console.log("decrease", index);
    const counterStateCopy = [...counter];
    counterStateCopy[index].value = counter[index].value - 1;
    setCounter(counterStateCopy);
  };


  return (
    <div className="App">
      <h1><u>Multiple Counters</u> </h1>
      <div className="parentBox">
        {counter.map((el, i) => {
          return (
            <div className="box" key = {i}>
              <h2>Counter { i + 1 }</h2>
              <h3>{el.value}</h3>
              <div className="parentBox">
                <button style={{padding:"5px"}} onClick={()=>increamentHandler(el.id)}> Increase</button>
                <button style={{padding:"5px"}} onClick={()=>decreamentHandler(el.id)}> Decrease</button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
