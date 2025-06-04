'use client';
import { useState } from "react";

export default function CounterIsland() {
  const [count, setCount] = useState(0);

  return (
    <button
      data-island="counter"             //  ★ ключевой атрибут
      onClick={() => setCount(c => c + 1)}
    >
      Нажато {count} раз
    </button>
  );
}

