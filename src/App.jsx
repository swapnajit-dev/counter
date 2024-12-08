import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(2);
  const maxlimit = 20;
  const minlimit = 2;

  const handleIncrement = () => {
    if (count < maxlimit) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > minlimit) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(minlimit);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Counter</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Current Count: <span className="text-blue-500">{count}</span>
        </h2>
        <div className="flex gap-4 justify-center mb-4">
          <button
            onClick={handleIncrement}
            disabled={count === maxlimit}
            className={`px-4 py-2 rounded-md font-medium text-white ${
              count === maxlimit
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            Increment
          </button>
          <button
            onClick={handleDecrement}
            disabled={count === minlimit}
            className={`px-4 py-2 rounded-md font-medium text-white ${
              count === minlimit
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-red-500 hover:bg-red-600"
            }`}
          >
            Decrement
          </button>
        </div>
        <button
          onClick={reset}
          className="px-6 py-2 rounded-md font-medium text-white bg-green-500 hover:bg-green-600 transition"
        >
          Reset
        </button>
        <p className="mt-4 text-gray-600">
          {count === maxlimit
            ? "You've reached the maximum limit!"
            : count === minlimit
            ? "You've reached the minimum limit!"
            : "You're within limits."}
        </p>
      </div>
    </div>
  );
};

export default App;
