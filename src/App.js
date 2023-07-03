import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Contact from "./pages/Contact";
import Path from "./pages/Path";
import Home from "./pages/Home";
import People from "./pages/People";
import NotFound from "./pages/NotFound";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/people" element={<People/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/Path" element={<Path/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
