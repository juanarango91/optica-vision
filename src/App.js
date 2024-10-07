import ReactDOM from "react-dom/client";
import Layout from "./componentes/Layout/Layout";
import Home from "./componentes/Home/Home";
import Products from "./componentes/Products/Productos";
import About from "./componentes/About/About";
import Contact from "./componentes/Contact/Contact";
import Map from "./componentes/Map/Map";
import Testimonials from "./componentes/Testimonials/Testimonials";

// Routers
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <div id="root" className="App">
      <Layout />
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<Products />} />
            <Route path="/acerca" element={<About />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/mapa" element={<Map />} />
            <Route path="/testimonios" element={<Testimonials />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
export default App;
