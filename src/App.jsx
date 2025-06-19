import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navb from "./components/navb/navb";
import Foot from "./components/footer/Foot";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Privacy from "./pages/Privacy/Privacy";
import Forum from "./pages/Forum/Forum";
import Contact from "./pages/Contact/Contact";
import Errorpage from "./pages/ErrorPage/Errorpage";
import Blog from "./pages/Blog/Blog";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import UserProfile from "./utils/UserProfile";
import GuidaUniversita from "./pages/Blog/articles/GuidaUniversita";
import ProblemiUniversita from "./pages/Blog/articles/ProblemiUniversita";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navb />
      <main className="flex-grow">
        {" "}
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/forum" element={<Forum />}></Route>
            <Route path="/blog" element={<Blog />}></Route>
            <Route path="login" element={<Login />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/privacypolicy" element={<Privacy />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="userprofile" element={<UserProfile />}></Route>
            <Route path="guida-scelta-universita" element={<GuidaUniversita />}></Route>
            <Route path="/perche-universita-non-funziona" element={<ProblemiUniversita />}></Route>
            <Route path="*" element={<Errorpage />}></Route>
            
          </Routes>
        </AnimatePresence>
      </main>
      <Foot />
    </div>
  );
}

export default App;
