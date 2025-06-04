import React from "react";
import Layout from "../components/Layout";
import ThemeToggleIsland from "../components/ThemeToggleIsland";

export default function ThemePage() {
  return (
    <Layout title="Темы">
      <h1>Переключение темы</h1>
      <ThemeToggleIsland />
    </Layout>
  );
}
