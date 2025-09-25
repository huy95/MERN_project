import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Nav'
import Product from './pages/Product'
import CreateProduct from './pages/CreateProduct'
import { useEffect, useState } from 'react'

function App() {
  const [theme, setTheme] = useState(() => {
    // ưu tiên user setting, fallback theo system
    const saved = localStorage.getItem("theme");
    if (saved) return saved;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDark ? "dark" : "light";
  });


  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem("theme", theme);
  }, [theme]);
  // apply theme lên <html> để style toàn app
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem("theme", theme);
  }, [theme]);
  const handleToggle = () => {
    console.log("toggle theme");
    setTheme(t => (t === "dark" ? "light" : "dark"));
    console.log(theme);
  }

  return (
    <Router>
      <Navbar theme={theme} onToggle={() => handleToggle()} />
      <Routes>
        <Route path='/' element={<Product />} />
        <Route path='/add' element={<CreateProduct />} />
      </Routes>

    </Router>
  )
}

export default App
