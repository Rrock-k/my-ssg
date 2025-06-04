import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { resolve, join } from "path";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { AppProps } from "./app/App.js"

async function build() {
  const projectRoot = process.cwd();
  const distDir = resolve(projectRoot, "dist");
  if (!existsSync(distDir)) mkdirSync(distDir);

  // 1) Загружаем модуль страницы
  const { default: App } = await import("./app/App.js");
  // 2) Подтягиваем «getStaticProps» если есть
  let pageProps: Record<string, unknown> = {};
  try {
    const mod = await import("./app/getStaticProps.js");
    if (mod?.getStaticProps) {
      const res = await mod.getStaticProps();
      pageProps = (res?.props ?? {});
    }
  } catch (_) {
    /* файла может не быть — это ок */
  }

  // 3) Рендерим в строку
  const html = renderToStaticMarkup(
    <html>
      <head>
        <meta charSet="utf-8" />
        <title>Dynamic-but-SSG</title>
        <link rel="stylesheet" href="/assets/styles.css" />
      </head>
      <body>
        {/* корень React-дерева */}
        <div id="__APP__">
          <App {...pageProps as AppProps} />
        </div>

        {/* сериализованные данные для клиента */}
        <script
          id="__DATA__"
          type="application/json"
          // защита от XSS: минимально — JSON.stringify + replace <
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(pageProps).replace(/</g, "\\u003c"),
          }}
        />

        {/* клиентский бандл */}
        <script src="/assets/client.js" type="module"></script>
      </body>
    </html>
  );

  writeFileSync(join(distDir, "index.html"), "<!DOCTYPE html>" + html);
  console.log("✓ index.html готов");
}

build().catch(err => {
  console.error(err);
  process.exit(1);
});
