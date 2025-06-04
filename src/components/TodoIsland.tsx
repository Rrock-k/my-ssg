'use client';
import { useState } from "react";

export default function TodoIsland() {
  const [items, setItems] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const addItem = () => {
    const value = input.trim();
    if (value) {
      setItems([...items, value]);
      setInput("");
    }
  };

  const removeItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div data-island="todo">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Новая задача"
      />
      <button onClick={addItem}>Добавить</button>
      <ul>
        {items.map((item, i) => (
          <li key={i}>
            {item} <button onClick={() => removeItem(i)}>×</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
