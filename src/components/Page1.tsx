import React from "react";

type Props = {
  name: string;
};

export default function Page1({ name }: Props) {
  return (
    <div>
      <h2>Привет, {name}!</h2>
      <p>Это пример React-компонента внутри страницы.</p>
    </div>
  );
}
