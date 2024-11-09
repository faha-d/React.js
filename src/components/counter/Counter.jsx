import { useState } from "react";

const Counter = () => {

  const [count, setCount] = useState(0);

  const incrementNumber = () => {
    setCount(count + 1);
    console.log(count);
  };

  const decrementNumber = () => {
    setCount(count - 1);
  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={incrementNumber}>Increment</button>
      <button onClick={decrementNumber}>Decrement</button>
    </>
  );
};
export default Counter;
