import React from "react";

type Props = {
  title: string;
  children: React.ReactNode;
};

export default function Layout({ title, children }: Props) {
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
            <a href="/">Home</a> |
            <a href="/about.html">About</a> |
            <a href="/contact.html">Contact</a> |
            <a href="/todo.html">Todo</a> |
            <a href="/theme.html">Theme</a>
          </nav>
        </header>
        <main id="root">{children}</main>
        <footer>
          <p>© MySSG 2025</p>
        </footer>
        <script src="/assets/client.js" defer></script>
      </body>
    </html>
  );
}
