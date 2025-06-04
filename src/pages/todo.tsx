import React from "react";
import Layout from "../components/Layout";
import TodoIsland from "../components/TodoIsland";

export default function TodoPage() {
  return (
    <Layout title="Задачи">
      <h1>Мой список задач</h1>
      <TodoIsland />
    </Layout>
  );
}
