import React from "react";
import { hydrateRoot } from "react-dom/client";
import App from "../app/App";

// Hydrate the entire document instead of a specific root element
// because the server-side markup includes the full <html> structure.
hydrateRoot(document, <App />);
