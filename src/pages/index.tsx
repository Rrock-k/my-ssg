import React from "react";
import Layout from "../components/Layout";
import CounterIsland from "../components/CounterIsland";

export default function HomePage() {
  return (
    <Layout title="Главная">
      <h1>Статическая + интерактивная страница</h1>
      <CounterIsland />
    </Layout>
  );
}
