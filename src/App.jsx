import React, { useEffect, useState } from "react";
import "./App.css";

export default function MyApp() {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);
  useEffect(() => {
    const intValue = parseInt(text);
    if (!isNaN(intValue)) {
      setCount(intValue);
    }
  }, [text]);

  function onhandlechange(e) {
    const value = e.target.value;
    setText(value);
  }
  return (
    <>
      <h1>increament</h1>
      <br />
      <br />
      <input
        type="text"
        // value={text}
        placeholder="Enter Number Only"
        onChange={onhandlechange}
      />
      <br />
      <br />
      <input type="text" placeholder="see your increament" value={text} />
      <br />
      <br />
      <MyButton count={count} setCount={setCount} setText={setText} />
    </>
  );
}

function MyButton({ count, setCount, setText }) {
  function increament() {
    const updatecount = count + 1;
    setCount(updatecount);
    setText(updatecount.toString());
  }
  return <button onClick={increament}>Increament</button>;
}
