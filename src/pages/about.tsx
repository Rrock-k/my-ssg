import React from "react";
import Layout from "../components/Layout";

export default function AboutPage() {
  return (
    <Layout title="О нас">
      <h1>О проекте MySSG</h1>
      <p>
        MySSG — простой пример статической генерации React-приложения. Здесь
        каждая страница собирается в HTML во время сборки.
      </p>
    </Layout>
  );
}
