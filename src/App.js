import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import People from "./pages/People";
import NotFound from "./pages/NotFound";
import { Route, Routes } from "react-router-dom";
import Path from "./pages/Path";
import PersonDetail from "./pages/PersonDetail";
import FullStack from "./pages/Fullstack";
import Aws from "./pages/Aws";
import ReactJS from "./pages/ReactJS";
import PrivateRouter from "./pages/PrivateRouter";
function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/people" element={<People />} />
        <Route path="/people/:id" element={<PersonDetail />} />

        <Route path="/Path" element={<Path />}>
          <Route path="fullstack" element={<FullStack />}>
            <Route path="" element={<ReactJS />} />
          </Route>
          <Route path="aws" element={<Aws />} />
        </Route>

        <Route path="/contact" element={<PrivateRouter />}>
          <Route path="" element={<Contact />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
