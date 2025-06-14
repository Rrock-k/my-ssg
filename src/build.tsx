import { writeFileSync, mkdirSync, rmSync, readdirSync } from "fs";
import { resolve, join, basename, extname } from "path";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import AppRoutes from "./app/routes.js";

async function build() {
  const projectRoot = process.cwd();
  const distDir = resolve(projectRoot, "dist");
  rmSync(distDir, { recursive: true, force: true });
  mkdirSync(distDir, { recursive: true });

  const pagesDir = resolve(projectRoot, "src/pages");
  const pageFiles = readdirSync(pagesDir).filter(f => f.endsWith(".tsx"));

  for (const file of pageFiles) {
    const name = basename(file, extname(file));
    const path = name === "index" ? "/" : `/${name}.html`;
    const html = renderToStaticMarkup(
      <StaticRouter location={path}>
        <AppRoutes />
      </StaticRouter>
    );
    const outFile = join(distDir, name === "index" ? "index.html" : `${name}.html`);
    writeFileSync(outFile, "<!DOCTYPE html>" + html);
    console.log(`✓ ${outFile} готов`);
  }
}

build().catch(err => {
  console.error(err);
  process.exit(1);
});
