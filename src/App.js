import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Contact from "./pages/Contact";
import Path from "./pages/Path";
import Home from "./pages/Home";
import People from "./pages/People";
import NotFound from "./pages/NotFound";
import { Routes, Route } from "react-router-dom";
import PersonDetail from "./pages/PersonDetail";
import FullStack from "./pages/Fullstack";
import Aws from "./pages/Aws";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/people" element={<People/>} />
        <Route path="/people/:id" element={<PersonDetail/>} />
        <Route path="/contact" element={<Contact/>} />


        <Route path="/Path" element={<Path/>} >
<Route path = "fullstack" element={<FullStack/>} />
<Route path = "aws" element={<Aws/>} />

        </Route>

        <Route path="*" element={<NotFound/>} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
