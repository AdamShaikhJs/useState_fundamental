import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [num, setLNum] = useState(0);

  const countAdd = () => {
    setCount((currentState) => {
      const newState = currentState + 1;
      return newState;
    });
    console.log(count);
    setName('adam');
    console.log(name); //empty
  };

  // ---Solution---
  useEffect(() => {
    console.log('use', count);
    if (count > 0) {
      console.log('hii-->', count);
      setLNum(num + 1);
    }
  }, [count]);

  return (
    <div>
      <h3> -- UseState hooks fundamental-- </h3>
      <p>
        Use state hooks counter example for the rerender the previous values
      </p>
      <p>{count} </p>
      <button onClick={countAdd}> incress </button>
      <p>{num} </p>
    </div>
  );
}
