import React from "react";
import { hydrateRoot } from "react-dom/client";
import App from "../app/App";

// JSON-данные, которые build.ts вшивает в страницу
const payloadElement = document.getElementById("__DATA__");
const payload = payloadElement ? JSON.parse(payloadElement.textContent!) : {};

hydrateRoot(document.getElementById("__APP__")!, <App {...payload} />);
