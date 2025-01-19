import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/landing/Home";
import Platform from "./components/platform/Platform";
import Ecommerce from "./components/eCommerce/Ecommerce";
import Gaming from "./components/gaming/Gaming"
import Media from "./components/media/Media";
import About from "./components/about/About.jsx"
import Contact from "./components/contact_us/ContactUs.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Default route */}
        <Route path="/platform" element={<Platform />} />
        <Route path="/solutions/ecommerce" element={<Ecommerce />} />
        <Route path="/solutions/gaming" element={<Gaming />} />
        <Route path="/solutions/media" element={<Media />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<Contact />}/>
      </Routes>
    </Router>
  );
};

export default App;
