'use client'

import { useState } from "react";


interface Props {
  value?: number;
}

const CartCounter = ({ value = 0 }: Props) => {
  const [counter, setCounter] = useState(value);
  return (
    <>
      <span className="text-9xl"> {counter} </span>
      <div>
        <button
          onClick={() => setCounter(counter + 1)}
          className="bg-green-800 rounded-md w-[100px] p-2 flex items-center justify-center text-gray-200 mb-4"
        >
          +1
        </button>
        <button
          onClick={() => setCounter(counter - 1)}
          className="bg-green-800 rounded-md w-[100px] p-2 flex items-center justify-center text-gray-200"
        >
          -1
        </button>
      </div>
    </>
  );
};

export default CartCounter;
