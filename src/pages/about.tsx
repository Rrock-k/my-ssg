import React from "react";

export async function getStaticProps() {
  try {
    const res = await fetch("https://api.chucknorris.io/jokes/random");
    const data = await res.json();
    return { props: { joke: data.value } };
  } catch {
    return { props: { joke: "Не удалось получить шутку" } };
  }
}

export default function AboutPage({ joke }: { joke?: string }) {
  return (
    <>
      <h1>О проекте MySSG</h1>
      <p>
        MySSG — простой пример статической генерации React-приложения. Здесь
        каждая страница собирается в HTML во время сборки.
      </p>
      {joke && (
        <blockquote>
          <p>{joke}</p>
        </blockquote>
      )}
    </>
  );
}
