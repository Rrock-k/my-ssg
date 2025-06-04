'use client';
import { useEffect, useState } from "react";

export default function ThemeToggleIsland() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.body.dataset.theme = dark ? "dark" : "light";
  }, [dark]);

  return (
    <button data-island="theme-toggle" onClick={() => setDark(d => !d)}>
      {dark ? "Светлая тема" : "Тёмная тема"}
    </button>
  );
}
