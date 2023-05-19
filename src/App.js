import React, { useState } from 'react';

export const App = () => {
  const [count, setCount] = useState(0);

  const onIncrementClick = () => {
    setCount(count + 1);
  };
  const ondecrementClick = () => {
    setCount(count - 1);
  };
  return (
    <div className="container">
      <h1>code-next-react-counter</h1>

      <hr />

      <div>
        <h1>count: {count}</h1>
        <button
          className="btn btn-success"
          onClick={onIncrementClick}
          style={{ marginRight: '8px ' }}
        >
          increment
        </button>

        <button className="btn btn-warning" onClick={ondecrementClick}>
          decrement
        </button>
      </div>
    </div>
  );
};
