import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {useState} from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
       <h1>Counter</h1>
      <h2>{count}</h2>
      <button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        ++
      </button>
      <button
        onClick={() => {
          setCount(count - 1)
        }}
      >
        --
      </button>
      <button
        onClick={() => {
          setCount(0)
        }}
      >
        Reset
      </button>
    </>
  );
}

export default App;
