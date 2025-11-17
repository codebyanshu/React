import { useState } from "react";
import "./App.css";

// let count = 0;

function App() {
  let [count, setCount] = useState(0);

  function Increment() {
    setCount(count + 1);
  }
  function Decrement() {
    setCount(count - 1);
  }
  function Reset() {
    setCount(0);
  }
  return (
    <>
      <h1>Counter App</h1>
      <p>Count : {count}</p>
      <div className="box">
        <SetButton text="Increment" icon="➕ " func = {Increment}/>
        <SetButton text="Decrement" icon="➖ " func = {Decrement} />
        <SetButton text="Reset" icon="🔄️ " func = {Reset}/>
       
      </div>
    </>
  )
}

function SetButton({text,icon,func})
{
  return (
     <button onClick={func}>{icon}{text}</button>

  )
}

export default App;
