import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import BlogList from "./pages/BlogList";
import BlogPost from "./pages/BlogPost";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "./index.css";

export default function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <BrowserRouter>
      <Nav onToggleTheme={() => setDark(d => !d)} />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/blog" element={<BlogList/>} />
        <Route path="/blog/:slug" element={<BlogPost/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
