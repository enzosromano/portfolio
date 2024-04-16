import Navbar from "./Navbar";
import Blog from "./pages/Blog";
import Links from "./pages/Links";
import Projects from "./pages/Projects";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/links" element={<Links />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </>
  )
}

export default App;
