import { useState } from "react";
import s from "./Counter.module.scss";

interface CounterProps {
  className?: string;
}
export const Counter = ({ className }: CounterProps) => {
  const [count, setCount] = useState<number>(0);
  return (
    <div className={`${className ? className : ""}`}>
      <div>{count}</div>
      <button
        className={s.btn}
        onClick={() => setCount((prev) => prev + 1)}
      >
        +1
      </button>
    </div>
  );
};
