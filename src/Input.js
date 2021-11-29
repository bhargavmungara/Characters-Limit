import { useState } from "react";
import "./global.css";

const Input = () => {
  const [input, setInput] = useState("");
  const [inputValue, setInputValue] = useState("Your Input");

  function stop() {
    if (inputValue < input.length) {
      alert("You have reached the limit");
    } else {
      ("");
    }
  }

  return (
    <div>
      <label htmlFor="tweet" className="red">
        Type the limit of number of Characters here ➡️
      </label>
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      ></input>

      <textarea
        id="tweet"
        name="tweet"
        placeholder="input goes here"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onBlur={(e) => setInput(e.target.value)}
        onKeyDown={stop()}
        disabled={inputValue < input.length ? 1 : 0}
      ></textarea>
      <div className="new">
        <section>{input}</section>
      </div>
      <aside>
        Number of Characters remaining : {input.length}/{inputValue}
      </aside>
    </div>
  );
};

export default Input;
