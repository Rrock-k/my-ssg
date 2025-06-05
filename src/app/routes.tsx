import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/index";
import AboutPage from "../pages/about";
import ContactPage from "../pages/contact";
import Layout from "../components/Layout";
import TodoPage from "../pages/todo";
import ThemePage from "../pages/theme";

export type PagePropsMap = Record<string, any>;

export default function AppRoutes({ pageProps = {} }: { pageProps?: PagePropsMap } = {}) {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage {...pageProps["/"]} />} />
        <Route path="/about.html" element={<AboutPage {...pageProps["/about.html"]} />} />
        <Route path="/contact.html" element={<ContactPage {...pageProps["/contact.html"]} />} />
        <Route path="/todo.html" element={<TodoPage {...pageProps["/todo.html"]} />} />
        <Route path="/theme.html" element={<ThemePage {...pageProps["/theme.html"]} />} />
      </Route>
    </Routes>
  );
}
