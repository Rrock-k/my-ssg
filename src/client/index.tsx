import React from "react";
import { hydrateRoot } from "react-dom/client";
import App from "../app/App";

// When a built page is served as "/index.html" the location won't match
// the routing path used during build ("/"). Adjust the history before
// hydrating so React Router resolves the correct route and avoids
// rendering a nested layout.
if (window.location.pathname.endsWith("/index.html")) {
  history.replaceState(null, "", "/");
}

// Hydrate the entire document since the server markup contains the full
// HTML structure.
hydrateRoot(document, <App />);
