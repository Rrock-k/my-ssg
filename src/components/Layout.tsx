import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const titles: Record<string, string> = {
  "/": "Главная",
  "/about.html": "О нас",
  "/contact.html": "Контакты",
};

export default function Layout() {
  const location = useLocation();
  const title = titles[location.pathname] ?? "MySSG";
  return (
    <html>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <link rel="stylesheet" href="/assets/styles.css" />
      </head>
      <body>
        <header>
          <nav>
            <Link to="/">Home</Link> | <Link to="/about.html">About</Link> | <Link to="/contact.html">Contact</Link> | <Link to="/todo.html">Todo</Link> | <Link to="/theme.html">Theme</Link>
          </nav>
        </header>
        <main id="root">
          <Outlet />
        </main>
        <footer>
          <p>© MySSG 2025</p>
        </footer>
        <script src="/assets/client.js" defer></script>
      </body>
    </html>
  );
}
